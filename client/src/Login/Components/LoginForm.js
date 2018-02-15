import React from 'react'
import { Button, Form, Icon, Message, Grid, Container } from 'semantic-ui-react'
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment/Segment';

const LoginForm = () => (
<div>
  <Container>  
    <Grid columns={2} >
    <Grid.Row >
      <Grid.Column width={9}  style={{marginLeft:"2%"}}>
        
                <Segment inverted   style={{marginLeft:"2%"}}>
                <Message
                attached
                header='Welcome to our site!'
                content='Fill out the form below to sign-up for a new account'
                inverted
                />
                <Form inverted>
                <br/>
                <Form.Group widths='equal'>
                
                    <Form.Input fluid label='First Name' placeholder='First Name' type='text' />
                    <Form.Input fluid label='Last Name' placeholder='Last Name' type='text' />
                </Form.Group>
                <Form.Input label='Email' placeholder='Email' type='text' />
                <Form.Input label='Password' type='password' />
                <Form.Checkbox inline label='I agree to the terms and conditions' />
                <Button color='blue'>Submit</Button>
                </Form>
                <br/>
                <Message attached='bottom' warning>
                <Icon name='help' />
                Already signed up?&nbsp;<a href='#'>Login here</a>&nbsp;instead.
                </Message>
                </Segment>

      </Grid.Column>

      <Grid.Column>
      </Grid.Column>
  
    </Grid.Row>

  </Grid>
</Container>
</div>
  
)

export default LoginForm