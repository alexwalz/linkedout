import React , { Component } from 'react'
import { Container, Grid, Segment, Header, Icon, Form, TextArea, Card,  Button, Image, Select, Step, Comment} from 'semantic-ui-react'
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
          project_name: "",
          development_position: "",
          code_url: "", 
          project_url: "",
          project_description: "",
          languages: ""
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
          `/api/users/`+this.props.loggedInUser._id+"/newProject", 
          {
            project_name: this.state.project_name,
            development_position: this.state.development_position,
            code_url: this.state.code_url, 
            project_url: this.state.project_url,
            project_description: this.state.project_description,
            languages: this.state.languages
          }
          
      )
      .then(r => {
        this.setState({editing: false})
        this.props.renderUser()
        console.log(r)
      })
      .catch(e => console.log(e));
  }

    renderForm(){

      return(

    <Comment.Group style={{backgroundColor: "none"}}>
    <Comment style={{backgroundColor: "transparent"}}>
      <Comment.Avatar as='a' src={this.props.loggedInUser.image_url} circular/>
      <Comment.Content>
        <Comment.Author as='a' style={{color: "white"}}>{this.props.loggedInUser.firstName + " " + this.props.loggedInUser.lastName}</Comment.Author>
        <Comment.Metadata>
          <div></div>
        </Comment.Metadata>
        <Comment.Actions>
          <Comment.Action active style={{color: "white"}}>New Project</Comment.Action>
        </Comment.Actions>
        <Form reply>
        <Form.Input style={{backgroundColor:"transparent", border: "1px solid white", color: "white"}} onChange={this.handleInputChange} name="project_name" label="Project Name" placeholder="Name of My Project"/>
          <Form.Input style={{backgroundColor:"transparent", border: "1px solid white", color: "white"}} onChange={this.handleInputChange} name="development_position" label="My Position" placeholder="Front End Developer"/>
          <Form.Input style={{backgroundColor:"transparent", border: "1px solid white", color: "white"}} onChange={this.handleInputChange} name="code_url" label="Link To Project Code" placeholder="https://github.com/..."/>
          <Form.Input style={{backgroundColor:"transparent", border: "1px solid white", color: "white"}} onChange={this.handleInputChange} name="project_url" label="Link To Project Production" placeholder="https://..."/>
          <Form.TextArea style={{backgroundColor:"transparent", border: "1px solid white", color: "white"}} onChange={this.handleInputChange} name="project_description" placeholder="For this project I did..."/>
          <Form.Input style={{backgroundColor:"transparent", border: "1px solid white", color: "white"}} onChange={this.handleInputChange} name="languages" label="Languages Used" placeholder="React, Node, Express, MongoDb"/>
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
          <Step.Group fluid vertical style={{backgroundColor:"transparent", border: "1px solid white"}}>
              <Step active onClick={()=> this.edit()}  style={{backgroundColor:"transparent"}}>
              <Icon name='plus' color="grey" />
              <Step.Content>
                <Step.Title style={{color: "#67C8D3"}}>Projects</Step.Title>
                <Step.Description style={{color: "white"}}>Click Here To Add A New Project</Step.Description>
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