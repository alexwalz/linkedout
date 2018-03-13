import React , { Component } from 'react'
import { Container, Grid, Segment, Header, Icon, Form, TextArea, Card,  Button, Image, Select, Step, Comment} from 'semantic-ui-react'
import PostButton from './PostButton'
import axios from 'axios'
import '../css/feed.css'

let messageStyles={
  marginBottom: "5px",
  backgroundColor: "transparent",
  color: "white"
}

let postStyles={
  background: "#bdc3c7",
  background: "-webkit-linear-gradient(to right, #bdc3c7, #2c3e50)",
  background: "linear-gradient(to right, #bdc3c7, #2c3e50)"
}

class ShareBox extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          color: "grey",
          editing: false,
          messageType: "News Feed"
         }
    }

    edit(){
      this.setState({editing: true})
    }

    cancel(){
      this.setState({editing: false})
    }

    handleInputChange = event => {
      const value = event.target.value;
      const name = event.target.name;
      this.setState({
        [name]: value
      });
    };
   

  handleFormSubmit = ()=> {
    axios
      .post(
          `/api/users/addPost`, 
          {
            message: this.state.message,
            messageType: this.state.messageType
          }
          
      )
      .then(r => {
        this.setState({editing: false})
        this.props.renderUser()

      })
      .catch(e => console.log(e));


  }

    renderForm(){
      let postOptions =[
        {key: 'news', value: 'news', text: 'News Feed'},
        {key: 'job', value: 'job', text: 'Job Posting'},
        {key: 'recruitment', value: 'recruitment', text: 'Recruitment'},
        {key: 'thought', value: 'thought', text: 'Thought'}
      ]
      return(

    <Comment.Group style={{backgroundColor: "none"}}>
    
    <Comment style={{backgroundColor: "transparent"}}>
      <Comment.Avatar as='a' src={this.props.loggedInUser.image_url}/>
      <Comment.Content>
        <Comment.Author as='a' style={{color: "white"}}>{this.props.loggedInUser.firstName + " " + this.props.loggedInUser.lastName}</Comment.Author>
        <Comment.Metadata>
          <div></div>
        </Comment.Metadata>
        <Comment.Actions>
          <Comment.Action active style={{color: "white"}}>New Post</Comment.Action>
        </Comment.Actions>
        <Form reply>
          {/* <Select placeholder='Select the type of post' options={postOptions} style={messageStyles} name="messageType" onChange={this.handleInputChange}/> */}
          <Form.TextArea style={{backgroundColor:"transparent", border: "1px solid white", color: "white"}} onChange={this.handleInputChange} name="message"/>
          <Icon className="submitButton" name='checkmark' size='large' circular color="grey" style={{ cursor: "pointer", backgroundColor: "white"}}  onClick={this.handleFormSubmit}/>
          <Icon className="submitButton"  name='close' size='large' circular color="grey" style={{ cursor: "pointer", backgroundColor: "white"}}  onClick={()=> this.cancel()} />
        </Form>
      </Comment.Content>
    </Comment>
  </Comment.Group>

        )
    }

    renderDisplay(){
      return(
          <Step.Group fluid vertical style={{backgroundColor:"transparent", border: "1px solid white"}}>
              <Step active onClick={()=> this.edit()}  style={{backgroundColor:"transparent"}}>
              <Icon name='plus' color="grey" />
              <Step.Content>
                <Step.Title style={{color: "#67C8D3"}}>Posts</Step.Title>
                <Step.Description style={{color: "white"}}>Click Here To Create A New Post</Step.Description>
              </Step.Content>
              </Step>
       </Step.Group>

        )
    }

    render() { 
        return ( <Container>
          {(this.state.editing) ? this.renderForm() : this.renderDisplay()}
          </Container>
         )
    }
}



export default ShareBox;