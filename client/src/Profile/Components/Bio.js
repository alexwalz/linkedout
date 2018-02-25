import React, {Component} from 'react'
import Languages from './Languages'
import { Message, Grid, Segment, Divider, Header, Icon, Image, Container, Card, Form, Select, TextArea, Button } from 'semantic-ui-react'
import PostButton from '../../Feed/Components/PostButton'
import axios from 'axios'


class Bio extends Component {
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
    
 
              handleFormSubmit = async (event) => {
                event.preventDefault();
                console.log(this.props.loggedInUser)
                const res = await axios.post('/api/users/'+this.props.loggedInUser, this.state );
                await console.log(res)

            };

    renderForm(){

      return(

    <Card fluid style={{boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.2)"}} style={{marginBottom: "10px"}}>
      <Card.Content>
        <Card.Description>
           <Form>
           <Form.Group widths='equal'>
           <Form.Input fluid label='email' placeholder={this.props.userInfo.email} />
           <Form.Input fluid label='phone' placeholder={this.props.userInfo.phone} />
           </Form.Group>

           <Form.Group widths='equal'>
           <Form.Input fluid label='company' placeholder={this.props.userInfo.company} />
           <Form.Input fluid label='jobTitle' placeholder={this.props.userInfo.jobTitle} />
           </Form.Group>

           <Form.Input fluid label='birthday' placeholder={this.props.userInfo.birthday} />
           <Form.Input fluid label='location' placeholder={this.props.userInfo.location} />
           
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
                <PostButton editing= {this.state.editing} onClick={() => this.handleFormSubmit()}/>
            </Grid.Column>

          </Grid.Row>
          
        </Grid>
      </Card.Content>
    </Card>

        )
    }

    renderDisplay(){
      return(


    <div style={{marginBottom:"10px"}} >
    
    <Segment style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/always_grey.png')"}}>

    {this.props.userInfo.loggedInUser === this.props.userInfo.url ? <Icon name='pencil' size='small' onClick={()=> this.edit()} /> : null } 
    
        <Grid.Row style={{marginBottom: "10px"}}>
          <Grid.Column textAlign="center">
          <Divider horizontal><h3  textAlign="center" style={{color: "white"}}>{this.props.userInfo.firstName + " " + this.props.userInfo.lastName}'s Bio</h3></Divider>
          </Grid.Column>
        </Grid.Row>

    <Header as='h2' icon textAlign='center'>
      <Icon name='user' color="teal" circular />
    
    </Header>

    <Grid>
        <Grid.Row columns={2}>
        <Grid.Column width={2}>
            <Icon circular color='teal' name='mail outline' />
        </Grid.Column>
        <Grid.Column width={14} textAlign="left">
            <h4 style={{lineHeight: "2.5rem", color: "white"}}>{this.props.userInfo.email}</h4>
        </Grid.Column>

        <Grid.Column width={2} style={{marginTop: "3px"}}>
            <Icon circular color='teal' name='phone' />
        </Grid.Column>
        <Grid.Column width={14} textAlign="left">
            <h4 style={{lineHeight: "2.5rem", color: "white"}}>{this.props.userInfo.phone}</h4>
        </Grid.Column>

        <Grid.Column width={2} style={{marginTop: "3px"}}>
            <Icon circular color='teal' name='building outline' />
        </Grid.Column>
        <Grid.Column width={14} textAlign="left">
            <h4 style={{lineHeight: "2.5rem", color: "white"}}>{this.props.userInfo.current_company} | {this.props.userInfo.job_title}</h4>
        </Grid.Column>

        <Grid.Column width={2} style={{marginTop: "3px"}}>
        <Icon circular color='teal' name='calendar' />
        </Grid.Column>
        <Grid.Column width={14} textAlign="left">
            <h4 style={{lineHeight: "2.5rem", color: "white"}}>{this.props.userInfo.birthday}</h4>
        </Grid.Column>

        <Grid.Column width={2} style={{marginTop: "3px"}}>
        <Icon circular color='teal' name='map pin' />
        </Grid.Column>
        <Grid.Column width={14} textAlign="left">
            <h4 style={{lineHeight: "2.5rem", color: "white"}}>{this.props.userInfo.location}</h4>
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