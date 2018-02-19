import React, {Component} from 'react'
import { Button, Form, Icon, Message, Grid, Container } from 'semantic-ui-react'
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment/Segment';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

          }
    }
    render() { 
        return (  
            <div>
                <Grid columns={2} >
                <Grid.Row >
                <Grid.Column width={7}  style={{marginLeft:"2%"}}>
                    
                        <Segment inverted   style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/always_grey.png')"}}>
                            <Message
                            attached
                            header='Welcome to DevSpot!'
                            content='Fill out the form below to sign-up for a new account'
                            inverted
                            />
                            <Form inverted>
                            <br/>
                            <Form.Group widths='equal'>
                            
                                <Form.Input fluid label='First Name' placeholder='First Name' type='text' />
                                <Form.Input fluid label='Last Name' placeholder='Last Name' type='text' />
                                </Form.Group>
                                
                                <Form.Group widths='equal'>
                                <Form.Input label='Email' placeholder='Email' type='text' />
                                <Form.Input label='Password' type='password' />
                                </Form.Group>

                                <Form.Group widths='equal'>
                                <Form.Input label='image_url' placeholder='https://<Path To Image>' type='text' />
                                <Form.Input label='Phone' placeholder='801-123-4567' type='text' />
                                </Form.Group>
                                
                                <Form.Group widths='equal'>
                                <Form.Input label='Current Company' placeholder='Instructure' type='text' />
                                <Form.Input label='Job Title' placeholder='Project Manager' type='text' />
                                </Form.Group>

                                <Form.Input label='Location' placeholder='Salt Lake City, UT' type='text' />
                                <Form.TextArea label='About' placeholder='Tell us more about you...' />

                                <Form.Checkbox inline label='I agree to the terms and conditions' />
                                <Button color='teal' inverted >Submit</Button>

                            </Form>
                            <br/>
                            <Message attached='bottom' warning>
                            <Icon name='help' />
                            Already signed up?&nbsp;<a href='#'>Login here</a>&nbsp;instead.
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