import React, { Component } from 'react'
import { Form, TextArea, Button, Icon } from 'semantic-ui-react'
import axios from 'axios'


  class ReplyForm extends Component {
      constructor(props) {
          super(props);
          this.state = { 
              text: ""
           }
      }

      handleSubmit = ()=> {
        console.log("Comment Submission Requested")
        console.log("Posting to", this.props.postId)
        axios
        .post(`/api/users/comment/`+this.props.postId,
        {
            text: this.state.text
        })
        .then(response => {
          console.log(response),
          this.props.updateParent(),
          this.setState({text: ""}),
          this.refs.text.value = '';
        })
        .catch(error => console.log(error));
      }

      handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };


      render(props) { 
          return ( 
              <div>
                    <Form style={{marginBottom: "2%", marginTop: "4%"}}>
                        <TextArea placeholder='Type Your Comment Here' onChange={this.handleInputChange} name="text" ref="text" value={this.state.text} style={{backgroundColor: "transparent", color: "white"}}/>
                    </Form>

                        <Icon name='checkmark' size='large' circular color="grey" style={{ cursor: "pointer", backgroundColor: "white"}} onClick={this.handleSubmit}/>
                        <Icon name='close' size='large' circular color="grey" style={{ cursor: "pointer",  backgroundColor: "white"}}onClick={()=> this.props.showComments()} />
             </div>
           )
      }
  }
   
  export default ReplyForm;