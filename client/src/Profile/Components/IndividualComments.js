  import React, {Component} from 'react'
  import { Comment, Icon, Form, Button } from 'semantic-ui-react'
  import {Link} from 'react-router-dom'
  import axios from 'axios'


class IndividualComments extends Component {
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
   
    deleteComment=()=>{
      console.log("Delete Requested on", this.props.comment_id)

      axios
      .delete("/api/comments/"+this.props.comment_id)
      .then(response => {
              console.log("Successfully Deleted")
              this.props.updateParent()
              this.setState({editing: false})
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }

  updateComment=()=>{
    console.log("Update Requested on", this.props.comment_id)

    axios
    .put("/api/comments/"+this.props.comment_id, {
      text: this.state.text
    })
    .then(response => {
            console.log("Successfully Deleted")
            this.props.updateParent()
            this.setState({editing: false})
    })
    .catch(error => {
      console.log("Error fetching and parsing data", error);
    });
}



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

    renderForm(props){

      return(

            <Comment.Group style={{backgroundColor: "none"}}>
              <Comment style={{backgroundColor: "transparent"}}>
                <Comment.Content>
                  <Comment.Actions>
                    <Comment.Action active style={{color: "white"}}><h2>Edit Comment</h2></Comment.Action>
                  </Comment.Actions>
                  <Form reply>
                    <Form.TextArea style={{backgroundColor:"transparent", border: "1px solid white", color: "white"}} onChange={this.handleInputChange} name="text" placeholder={this.props.message}/>
                    <Icon name='checkmark' size='large' circular color="grey"  onClick={this.updateComment}/>
                    <Icon name='close' size='large' circular color="grey" onClick={()=> this.cancel()} />
                    <Button inverted color='red' onClick={this.deleteComment}>Delete</Button>
                  </Form>
                </Comment.Content>
              </Comment>
            </Comment.Group>

        )
    }

    renderDisplay(props){
      return(

        <Comment>
            <Comment.Avatar as='a' circular src={this.props.userInfo.image_url} />
            <Comment.Content>
             <Link to={'/home/profile/'+ this.props.userInfo._id}> <Comment.Author  style={{color: "#5CC1CD"}} as='a'>{this.props.userInfo.firstName + " " + this.props.userInfo.lastName}</Comment.Author></Link>
              <Comment.Metadata>
                <span style={{color: "grey"}}>{this.props.date}</span>
              </Comment.Metadata>
        {this.props.loggedInUserInfo.userId === this.props.user_id && this.props.loggedInUserInfo.loggedIn ? <Icon name='pencil' size='small' color="teal" style={{marginBottom: "3%", cursor: "pointer"}} onClick={()=> this.edit()} /> : null } 
              <Comment.Text style={{color: "white"}}>{this.props.message}</Comment.Text>
              <Comment.Actions>
              </Comment.Actions>
            </Comment.Content>
        </Comment>
        )
    }

    render() { 
        return ( <div>
          {(this.state.editing) ? this.renderForm() : this.renderDisplay()}
          </div>
         )
    }
}



export default IndividualComments;