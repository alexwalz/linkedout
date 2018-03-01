import React, {Component} from 'react'
import { Header, Segment, Container, Divider, Loader } from 'semantic-ui-react'
import FeedMessages from './ProfileFeedPosts'

class ProfileFeed extends React.Component {
  
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({loading: true})

  }

  componentDidUpdate(){
    setTimeout(() => this.setState({ loading: false }), 2000); // simulates an async action, and hides the spinner
  }

  render(props) {
    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return (
        <div>
        <Container style={{textAlign: "center"}}>
           
                <Loader active inline='centered' size="big" inverted style={{marginTop: "12%"}}/>
                <h1  textAlign="center" style={{color: "white"}}>Loading My Posts...</h1>

      </Container>
    </div>
      )
    }
    
    return (
      <div>
      <Container>

          {this.props.userInfo.posts.slice(0).reverse().map((message, key) => (
              <FeedMessages messageType = {message.messageType} name={this.props.userInfo.firstName + " " + this.props.userInfo.lastName} image_url={this.props.userInfo.image_url} message = {message.message} date={message.date}/>
          ))}

    </Container>
  </div>
    ); 
  }
}

export default ProfileFeed
