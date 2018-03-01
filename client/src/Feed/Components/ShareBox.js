import React , { Component } from 'react'
import { Container, Grid, Segment, Header, Icon, Form, TextArea, Card,  Button, Image, Select, Step, Comment} from 'semantic-ui-react'
import PostButton from './PostButton'
import axios from 'axios'

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
          editing: false,
          messageType: "Job Posting"
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
   console.log(this.state)
    axios
      .post(
          `/api/users/addPost`, 
          {
            message: this.state.message,
            messageType: this.state.messageType
          }
          
      )
      .then(r => {console.log(r.status)
        console.log(r)
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
      <Comment.Avatar as='a' src={this.props.loggedInUser.userData.image_url}/>
      <Comment.Content>
        <Comment.Author as='a' style={{color: "white"}}>{this.props.loggedInUser.userData.firstName + " " + this.props.loggedInUser.userData.lastName}</Comment.Author>
        <Comment.Metadata>
          <div></div>
        </Comment.Metadata>
        <Comment.Actions>
          <Comment.Action active style={{color: "white"}}>New Post</Comment.Action>
        </Comment.Actions>
        <Form reply>
          <Select placeholder='Select the type of post' options={postOptions} style={messageStyles} name="messageType" onChange={this.handleInputChange}/>
          <Form.TextArea style={{backgroundColor:"transparent", border: "1px solid white", color: "white"}} onChange={this.handleInputChange} name="message"/>
          <Icon name='checkmark' size='large' circular color="grey"  onClick={this.handleFormSubmit}/>
          <Icon name='close' size='large' circular color="grey" onClick={()=> this.cancel()} />
        </Form>
      </Comment.Content>
    </Comment>
  </Comment.Group>

        )
    }

    renderDisplay(){
      return(
          // <Card fluid onClick={()=> this.edit()} style={{boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.2)", border: "none"}} style={messageStyles} >
          //   <Card.Content style={{textAlign: "center"}}>
          //     <Card.Description><h3 style={{ marginTop: "5%", color:"white"}}> <Icon circular name='plus' />Create New Post</h3></Card.Description>
          //   </Card.Content>
          //    <Card.Content extra>
          //     <Grid>
          //       <Grid.Row>

          //         <Grid.Column width={9}>
          //         </Grid.Column>

          //         <Grid.Column width={3}>
            
          //         </Grid.Column>

          //         <Grid.Column width={3}>
          //         </Grid.Column>

          //       </Grid.Row>
                
          //     </Grid>
          //   </Card.Content>
          // </Card>
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