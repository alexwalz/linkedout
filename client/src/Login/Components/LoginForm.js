import React, {Component} from 'react'
import { Button, Form, Icon, Message, Grid, Container } from 'semantic-ui-react'
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment/Segment';
import LoginModal from './LoginModal'
import axios from 'axios'


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

          }
    }


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
        })
      };


    render() { 
        return (  
            <div>
                <Grid columns={2} >
                <Grid.Row >
                <Grid.Column width={7}  style={{marginLeft:"2%"}}>
                    
                        <Segment inverted   style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/always_grey.png')", border: "1px solid white"}}>
                            <Message
                            attached
                            header='Welcome to DevSpot!'
                            content='Fill out the form below to sign-up for a new account'
                            inverted
                            />
                            <Form inverted>
                            <br/>
                            <Form.Group widths='equal'>
                            
                                <Form.Input onChange={this.handleInputChange} fluid label='firstName' placeholder='First Name' type='text' name="firstName"/>
                                <Form.Input onChange={this.handleInputChange} fluid label='lastName' placeholder='Last Name' type='text' name="lastName"/>
                                </Form.Group>
                                
                                <Form.Group widths='equal'>
                                <Form.Input onChange={this.handleInputChange} label='email' placeholder='Email' type='text' name="email"/>
                                <Form.Input onChange={this.handleInputChange} label='password' type='password' name="password"/>
                                </Form.Group>

                                <Form.Group widths='equal'>
                                <Form.Input onChange={this.handleInputChange} label='image_url' placeholder='https://<Path To Image>' type='text' name="image_url"/>
                                <Form.Input onChange={this.handleInputChange} label='Phone' placeholder='801-123-4567' type='text' name="phone" />
                                </Form.Group>
                                
                                <Form.Group widths='equal'>
                                <Form.Input onChange={this.handleInputChange} label='Current Company' placeholder='Instructure' type='text' name="current_company"/>
                                <Form.Input onChange={this.handleInputChange} label='Job Title' placeholder='Project Manager' type='text' name="job_title"/>
                                </Form.Group>

                                <Form.Group widths="equal">
                                <Form.Input onChange={this.handleInputChange} label='Birthday' placeholder='01/01/2001' type='text' name="birthday"/>
                                <Form.Input onChange={this.handleInputChange} label='Location' placeholder='Salt Lake City, UT' type='text' name="location"/>
                                </Form.Group>

                                <Form.TextArea onChange={this.handleInputChange} label='About' placeholder='Tell us more about you to display on your profile' name="about"/>

                                <Form.Checkbox inline label='I agree to the terms and conditions' />
                                <Button color='teal' inverted onClick={this.handleFormSubmit}>Submit</Button>

                            </Form>
                            <br/>
                            <Message attached='bottom' warning>

                            <Icon name='help' />
                                <LoginModal/>
                            </Message>

                            </Segment>

                </Grid.Column>

                <Grid.Column width={9} >
                </Grid.Column>
            
                </Grid.Row>

            </Grid>
        </div>
        )
    }
}
 
export default LoginForm;