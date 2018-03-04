import React, {Component} from 'react'
import { Header, Segment, Container, Divider, Loader, Icon } from 'semantic-ui-react'
import ProfileFeedPosts from './ProfileFeedPosts'

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

  renderError(){
    return(
    
      <div style={{marginTop: "7%"}}>
      <Header as='h3' icon textAlign='center'>
        <Icon name='warning sign' color="grey" circular />
        <Header.Content style={{color: "#5CC1CD"}}>
          No Posts For This User
        </Header.Content>
      </Header>
    </div>

    )
  }

  renderDisplay(){

}
  render(props) {
    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return (
        <div>
        <Container style={{textAlign: "center"}}>
           
                <Loader active inline='centered' size="big" inverted style={{marginTop: "12%"}}/>
                <h3  textAlign="center" style={{color: "#5CC1CD"}}>Loading My Posts...</h3>

      </Container>
    </div>
      )
    }
    
    return (
      <div>
      <Container>
        {this.props.userInfo.posts.length > 0 ? 
        
        this.props.userInfo.posts.slice(0).reverse().map((message, key) => (
          <ProfileFeedPosts messageType = {message.messageType} name={this.props.userInfo.firstName + " " + this.props.userInfo.lastName} image_url={this.props.userInfo.image_url} message = {message.message} date={message.date} userInfo={this.props.userInfo} loggedInUserInfo={this.props.loggedInUserInfo} url={this.props.url}/>
      ))
        
        
        : this.renderError()}


    </Container>
  </div>
    ); 
  }
}

export default ProfileFeed
