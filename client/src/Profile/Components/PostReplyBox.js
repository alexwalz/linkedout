import React, { Component } from 'react'
import { Form, TextArea, Button } from 'semantic-ui-react'
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
          console.log(response)
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
                        <TextArea placeholder='Reply' onChange={this.handleInputChange} name="text" />
                    </Form>

                    <Button.Group size='small'>
                        <Button basic color="grey" onClick={this.handleSubmit}>Submit</Button>
                    </Button.Group>
             </div>
           )
      }
  }
   
  export default ReplyForm;