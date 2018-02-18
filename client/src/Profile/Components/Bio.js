import React, {Component} from 'react'
import Languages from './Languages'
import { Message, Grid, Segment, Divider, Header, Icon, Image, Container, Card, Form, Select, TextArea, Button } from 'semantic-ui-react'
import PostButton from '../../Feed/Components/PostButton'


class Bio extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          editing: false
         }
    }

    edit(){
      this.setState({editing: true})
    }

    cancel(){
      this.setState({editing: false})
    }

    postComment(){
      //this funciton will be passed to the PostButton when editing is true 
    }

    renderForm(){

      return(

    <Card fluid style={{boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.2)"}} style={{marginBottom: "10px"}}>
      <Card.Content>
        <Card.Description>
           <Form>
           <Form.Group widths='equal'>
           <Form.Input fluid label='email' placeholder={this.props.email} />
           <Form.Input fluid label='phone' placeholder={this.props.phone} />
           </Form.Group>

           <Form.Group widths='equal'>
           <Form.Input fluid label='company' placeholder={this.props.company} />
           <Form.Input fluid label='jobTitle' placeholder={this.props.jobTitle} />
           </Form.Group>

           <Form.Input fluid label='birthday' placeholder={this.props.birthday} />
           <Form.Input fluid label='location' placeholder={this.props.location} />
           
          </Form>
        </Card.Description>
      </Card.Content>
       <Card.Content extra>
        <Grid>
          <Grid.Row>

            <Grid.Column width={9}>
            </Grid.Column>

            <Grid.Column width={3}>
               <Button basic color='red' onClick={() => this.cancel()}>Cancel</Button>
            </Grid.Column>

            <Grid.Column width={3}>
                <PostButton editing= {this.state.editing}/>
            </Grid.Column>

          </Grid.Row>
          
        </Grid>
      </Card.Content>
    </Card>

        )
    }

    renderDisplay(){
      return(

    <div style={{marginBottom:"10px"}} onClick={()=> this.edit()}>
    
    <Segment>
        <Grid.Row style={{marginBottom: "10px"}}>
          <Grid.Column textAlign="center">
          <Divider horizontal><h3  textAlign="center" style={{color: "grey"}}>{this.props.first_name + " " + this.props.last_name}'s Bio</h3></Divider>
          </Grid.Column>
        </Grid.Row>

    <Header as='h2' icon textAlign='center'>
      <Icon name='user' circular />
    
    </Header>

    <Grid>
        <Grid.Row columns={2}>
        <Grid.Column width={2}>
            <Icon circular color='teal' name='mail outline' />
        </Grid.Column>
        <Grid.Column width={14} textAlign="left">
            <h4 style={{lineHeight: "2.5rem"}}>{this.props.email}</h4>
        </Grid.Column>

        <Grid.Column width={2} style={{marginTop: "3px"}}>
            <Icon circular color='teal' name='phone outline' />
        </Grid.Column>
        <Grid.Column width={14} textAlign="left">
            <h4 style={{lineHeight: "2.5rem"}}>{this.props.phone}</h4>
        </Grid.Column>

        <Grid.Column width={2} style={{marginTop: "3px"}}>
            <Icon circular color='teal' name='building outline' />
        </Grid.Column>
        <Grid.Column width={14} textAlign="left">
            <h4 style={{lineHeight: "2.5rem"}}>{this.props.company} | {this.props.jobTitle}</h4>
        </Grid.Column>

        <Grid.Column width={2} style={{marginTop: "3px"}}>
        <Icon circular color='teal' name='calendar' />
        </Grid.Column>
        <Grid.Column width={14} textAlign="left">
            <h4 style={{lineHeight: "2.5rem"}}>{this.props.birthday}</h4>
        </Grid.Column>

        <Grid.Column width={2} style={{marginTop: "3px"}}>
        <Icon circular color='teal' name='map pin' />
        </Grid.Column>
        <Grid.Column width={14} textAlign="left">
            <h4 style={{lineHeight: "2.5rem"}}>{this.props.location}</h4>
        </Grid.Column>


        </Grid.Row>

    </Grid>
        
    </Segment>
  </div>
        )
    }

    render() { 
        return ( <Container>
          {(this.state.editing) ? this.renderForm() : this.renderDisplay()}
          </Container>
         )
    }
}



export default Bio;