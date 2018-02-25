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

            <FeedMessages messageType = "Job Posting" name={this.props.userInfo.firstName + " " + this.props.userInfo.lastName} image_url={this.props.userInfo.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedMessages messageType = "News Feed" name={this.props.userInfo.firstName + " " + this.props.userInfo.lastName} image_url={this.props.userInfo.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedMessages messageType = "News Feed" name={this.props.userInfo.firstName + " " + this.props.userInfo.lastName} image_url={this.props.userInfo.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedMessages messageType = "Thought of The Day" name={this.props.userInfo.firstName + " " + this.props.userInfo.lastName} image_url={this.props.userInfo.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedMessages messageType = "Job Posting" name={this.props.userInfo.firstName + " " + this.props.userInfo.lastName} image_url={this.props.userInfo.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedMessages messageType = "Recruitment" name={this.props.userInfo.firstName + " " + this.props.userInfo.lastName} image_url={this.props.userInfo.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedMessages messageType = "Thought of The Day" name={this.props.userInfo.firstName + " " + this.props.userInfo.lastName} image_url={this.props.userInfo.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>
    </Container>
  </div>
    ); 
  }
}

export default ProfileFeed
