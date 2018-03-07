import React , { Component } from 'react'
import { Container, Grid, Segment, Header, Icon, Form, TextArea, Card,  Button, Image, Select, Step, Comment} from 'semantic-ui-react'
import axios from 'axios'
import {Link} from 'react-router-dom'

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

      return(

    <Comment.Group style={{backgroundColor: "none"}}>
    <Comment style={{backgroundColor: "transparent"}}>
      <Comment.Content>
        <Comment.Actions>
          <Comment.Action active style={{color: "white"}}>Edit Project</Comment.Action>
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
          
              <Step active  style={{backgroundColor:"transparent"}}>
              <div style={{width: "100%"}}>
                <Icon name='pencil' size='small' color="grey" onClick={()=> this.edit()} style={{marginBottom: "1%"}} /> 
                  <Step.Content>
                    <Step.Title style={{color: "#67C8D3", width: "100%"}}>{this.props.project_name}</Step.Title>
                    <Step.Description style={{color: "white"}}>{this.props.development_position}</Step.Description>
                  </Step.Content>
              </div>
                

              <Step.Content style={{marginTop:"15px"}}>
              <div style={{width: "100%"}}>
              <Button.Group>
                    <Link to={this.props.code_url} target="_blank"><Button basic color="grey">View Code</Button></Link>
                    <Button.Or />
                    <Link to={this.props.project_url} target="_blank"><Button basic color="grey">Production</Button></Link>
                </Button.Group>
                </div>

                  <div style={{width: "100%"}}>
                    <Step.Title style={{color: "#67C8D3", marginTop:"25px"}}>Project Description</Step.Title>
                    <Step.Description style={{color: "white"}}>{this.props.project_description}</Step.Description>
                </div>

              </Step.Content>

            <div style={{width: "100%"}}>
            <Step.Content>
                <Step.Title style={{color: "#67C8D3", marginTop: "15px"}}>Languages</Step.Title>
                <Step.Description style={{color: "white"}}>{this.props.languages}</Step.Description>
              </Step.Content>
              </div>


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