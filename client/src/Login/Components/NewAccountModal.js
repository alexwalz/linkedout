import React, {Component} from 'react'
import { Button, Header, Icon, Modal, Form, Grid, Input, TextArea } from 'semantic-ui-react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import NewUserCard from './NewUserCard'

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "John",
            lastName: "Doe",
            email: "JohnDoe@johndoe.com",
            about:
              "Here is a bunch of filler information about a fella named John Doe.  You should only be seing this information is our website is broken.  If that is the case, please contact us and let us know that you are seing the generic 'State' information.",
            phone: "123-456-7890",
            image_url:
              "http://www.terry.uga.edu/digitalmarketing/images/icons/user.jpg",
            job_title: "Developer",
            birthday: "01/01/1990",
            current_company: "John Doe's Dev Company",
            location: "Silicon Valley",
          }
        };

        handleInputChange = event => {
            const value = event.target.value;
            const name = event.target.name;
            this.setState({
              [name]: value
            });
          };
        
          handleFormSubmit = event => {
            event.preventDefault();
            axios.post("/api/users", this.state).then(function(response){
                console.log(response)
            }).catch(function(e){
                console.log(e)
            })
          };


    render() { 
        return ( 
            <Modal trigger={<Button basic color="grey">New Account</Button>} blur basic size='small'>
            <Header icon='user' content='Create A New Account' />
            <Modal.Actions style={{marginTop: "-3%"}}>

                      <Grid divided='vertically'>
                        <Grid.Row columns={2}>
                        <Grid.Column>
                            <NewUserCard userInfo={this.state}/>
                        </Grid.Column>

                        <Grid.Column>
                            
                        <Form inverted>
                            <br/>
                                <Form.Group widths='equal'>
                                <Form.Input onChange={this.handleInputChange}  label='First Name' placeholder={this.state.firstName} type='text' name="firstName"/>
                                <Form.Input onChange={this.handleInputChange}  label='Last Name' placeholder={this.state.lastName} type='text' name="lastName"/>
                                </Form.Group>
                                
                                <Form.Group widths='equal'>
                                <Form.Input onChange={this.handleInputChange} label='Email' placeholder={this.state.email} type='text' name="email"/>
                                <Form.Input onChange={this.handleInputChange} label='Password' type='password' name="password"/>
                                </Form.Group>

                                <Form.Group widths='equal'>
                                <Form.Input onChange={this.handleInputChange} label='image_url' placeholder='https://<Path To Image>' type='text' name="image_url"/>
                                <Form.Input onChange={this.handleInputChange} label='Phone' placeholder={this.state.phone} type='text' name="phone" />
                                </Form.Group>
                                
                                <Form.Group widths='equal'>
                                <Form.Input onChange={this.handleInputChange} label='Current Company' placeholder={this.state.current_company} type='text' name="current_company"/>
                                <Form.Input onChange={this.handleInputChange} label='Job Title' placeholder={this.state.job_title} type='text' name="job_title"/>
                                </Form.Group>

                                <Form.Group widths="equal">
                                <Form.Input onChange={this.handleInputChange} label='Birthday' placeholder={this.state.birthday} type='text' name="birthday"/>
                                <Form.Input onChange={this.handleInputChange} label='Location' placeholder={this.state.location} type='text' name="location"/>
                                </Form.Group>

                                <Form.TextArea style={{width: "110%"}}rows={12} onChange={this.handleInputChange} label='About' placeholder='Tell us more about you to display on your profile' name="about"/>
                                <Button color='teal' inverted onClick={this.handleFormSubmit}>Create Account</Button>
                            </Form>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>


            </Modal.Actions>
          </Modal>
         )
    }
}
 
export default LoginModal;