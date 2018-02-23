import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'
import axios from "axios"
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'

export default class SecondaryModal extends Component {
  state = { modalOpen: true }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

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
            await console.log(res.data.userId)
            if(res.data.userId){
              
              this.setState({
                incorrectPassword: false,
                loggedIn: true,
                loggedInUserId: res.data.userId,
                modalOpen: false
            },
          )
          }else{
            this.setState({
              incorrectPassword: true
            })
          };
        };


  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
      {this.state.loggedIn ? <Redirect to="/home/feed"/> : null}
        <Header icon='user' content='Existing User Login' />
            <Modal.Content>
              <h4>You must be logged in to view these accounts.</h4>
            </Modal.Content>
            <Modal.Actions>

                      <Form>
                        <Form.Group widths='equal'>
                        <Form.Input onChange={this.handleInputChange} fluid label='email' placeholder='Email' name="email" />
                        <Form.Input onChange={this.handleInputChange} fluid label='password' placeholder='Password' name="password" type='password'/>
                        </Form.Group>
                    </Form>
                    {this.state.incorrectPassword ? <span style={{color: "red"}}> Incorrect User or Password </span> : null}
              <Button color='green' inverted onClick={this.handleFormSubmit}>
                <Icon name='checkmark' /> Login
              </Button>
          <Button color='green' onClick={this.handleClose} inverted>
            <Link to='/'>Create Account</Link>
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}