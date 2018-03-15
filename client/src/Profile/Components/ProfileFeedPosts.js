import React, {Component} from 'react'
import { Message, Image, Grid, Comment, Form, Icon, Button } from 'semantic-ui-react'
import PostComments from './PostComments'
import {Link} from 'react-router-dom'
import axios from 'axios'


class FeedMessages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            text: ""
          }
    }

    edit(){
        this.setState({editing: true})
      }
  
      cancel(){
        this.setState({editing: false})
      }

    deleteComment=()=>{
        axios
        .delete("/api/posts/"+this.props.postId)
        .then(response => {
                this.props.updateParent()
                this.setState({editing: false})
        })
        .catch(error => {
          console.log("Error fetching and parsing data", error);
        });
    }

    updatePost=()=>{
        axios
        .put("/api/posts/"+this.props.postId, 
        {
            message: this.state.text
        })
        .then(response => {
                this.props.updateParent()
                this.setState({editing: false})
        })
        .catch(error => {
          console.log("Error fetching and parsing data", error);
        });
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };



    renderForm(props){


let messageStyles={
    border: "4px solid grey",
    padding: "3%",
    borderImage: "linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%)",
    backgroundColor: "transparent"
}

        return(
  
                <Comment.Group style={{backgroundColor: "none", marginBottom: "5%"}}>
                <Comment style={{backgroundColor: "transparent"}}>
                  <Comment.Content>
                    <Comment.Actions>
                      <Comment.Action active style={{color: "white"}}><h2>Edit Post</h2></Comment.Action>
                    </Comment.Actions>
                    <Form reply>
                      <Form.TextArea style={{backgroundColor:"transparent", border: "1px solid white", color: "white"}} onChange={this.handleInputChange} name="text" placeholder={this.props.message}/>
                      <Icon name='checkmark' size='large' circular color="grey"  style={{backgroundColor: "white"}} onClick={this.updatePost}/>
                      <Icon name='close' size='large' circular color="grey" style={{backgroundColor: "white"}} onClick={()=> this.cancel()} />
                      <Button inverted color='red' onClick={this.deleteComment}>Delete</Button>
                    </Form>
                  </Comment.Content>
                </Comment>
              </Comment.Group>
  
          )
      }
  
      renderDisplay(props){

        let messageStyles={
            border: "4px solid white",
            padding: "3%",
            // borderImage: "linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%)",
            backgroundColor: "transparent"
        }

        return(
  
            <div style={{margin: "10px"}}>
            <Message info style={messageStyles}>
            <Grid columns={2}>
                  <Grid.Row>
                  <Grid.Column width={4}>
                  <Image  style={{ border: "2px solid #67C8D3", padding: "2px", height: "4rem", width: "4rem", borderRadius: "999px"}} src={this.props.image_url} />
                  </Grid.Column>
                  <Grid.Column width={12}>
                      <Link to={'/home/profile/'+ this.props.userId}><h2 style={{lineHeight: "4.2rem", color: "white"}}>{this.props.name}</h2></Link>
                  </Grid.Column>

                  </Grid.Row>
  
                  <Grid.Row>
                  <Grid.Column  width={16}>
                      <Message.Header style={{color: "white"}}>{this.props.messageType}</Message.Header>
                      
                      {/* <Icon name='pencil' size='small' color="teal" style={{marginBottom: "3%"}} onClick={()=> this.edit()} /> */}
                      {/* {this.props.loggedInUserInfo.userId === this.props.user_id && this.props.loggedInUserInfo.loggedIn ? <Icon name='pencil' size='small' color="teal" style={{marginBottom: "3%"}} onClick={()=> this.edit()} /> : null } */}
                      <p style={{color: "white"}}>{this.props.message}</p>
                  </Grid.Column>
                  </Grid.Row>
  
                  <Grid.Row>
                  <Grid.Column  width={16}  textAlign='right'>
                      <p style={{color: "grey"}}>{this.props.date}</p>
                  </Grid.Column>
                  </Grid.Row>
                  
              </Grid>
  
                  <div>
                      <PostComments userInfo = {this.props.userInfo} loggedInUserInfo = {this.props.loggedInUserInfo} postId={this.props.postId} comments={this.props.comments} updateParent={this.props.updateParent}/>
                      
                  </div>

                <div>
                {this.props.loggedInUserInfo._id === this.props.url ? <h5 style={{marginBottom: "3%", cursor: "pointer", color: "#67C8D3"}} onClick={()=> this.edit()}>Edit Post</h5> : null}
                  
                </div>
  
          </Message>
        </div>
          )
      }
      
    render() { 
        return ( 
            <div>
            {(this.state.editing) ? this.renderForm() : this.renderDisplay()}
            </div>
         )
    }
}
 
export default FeedMessages;
