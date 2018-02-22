import React, {Component} from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
        loggedInUserId: "",
          loggedIn: false,
          [name]: value
        });
      };
    
 

              handleFormSubmit = async (event) => {
                event.preventDefault();
                const res = await axios.post('/api/users/login', this.state);
                console.log(res.data)
                await console.log(res.data.userId)
                this.setState({
                    loggedIn: true,
                    loggedInUserId: res.data.userId
                })
            };




    render() { 
        return ( 
            <Modal trigger={<Button color="teal">User Login</Button>} basic size='small'>
            <Header icon='user' content='Existing User Login' />
            <Modal.Content>
              <p>Already Have an Account?  Login with your credentials below.</p>
            </Modal.Content>
            <Modal.Actions>

                      <Form>
                        <Form.Group widths='equal'>
                        <Form.Input onChange={this.handleInputChange} fluid label='email' placeholder='Email' name="email" />
                        <Form.Input onChange={this.handleInputChange} fluid label='password' placeholder='Password' name="password"/>
                        </Form.Group>
                    </Form>

              <Button color='green' inverted onClick={this.handleFormSubmit}>
                <Icon name='checkmark' /> Login
              </Button>

             {this.state.loggedIn ? <Redirect to={`/home/profile/${this.state.loggedInUserId}`}/> : null } 

            </Modal.Actions>
          </Modal>
         )
    }
}
 
export default LoginModal;