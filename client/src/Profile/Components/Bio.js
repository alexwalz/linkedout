import React, {Component} from 'react'
import Languages from './Languages'
import { Message, Grid, Segment, Divider, Header, Icon, Image, Container, Card, Form, Select, TextArea, Button } from 'semantic-ui-react'
import PostButton from '../../Feed/Components/PostButton'
import axios from 'axios'
import ConnectButton from './ConnectButton'
import EmailButton from './EmailButton'


class Bio extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          editing: false,
          userData:{}
         }
    }

    edit(){
      this.setState({editing: true})
    }

    cancel(){
      this.setState({editing: false})
    }

    componentDidMount(){
        axios
        .get("/api/users/login")
        .then(response => {
            this.setState(response.data)
          this.setState({ userData: response.data.userData });
        })
        .catch(error => {
          console.log("Error fetching and parsing data", error);
        });
    }

  
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({userData:{[name]: value}});
        console.log(this.state.userData)
      };
      
    
 
handleFormSubmit = async (event) => {
const res = await axios.post('/api/users/'+this.state.userId+"/edit", this.state.userData );
await console.log(res)
};


    renderForm(){


      return(

    <Card fluid style={{boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.2)"}} style={{marginBottom: "10px"}}>
      <Card.Content>
        <Card.Description>
           <Form>


           <Form.Group widths='equal'>
           <Form.Input fluid label='Company' placeholder={this.props.userInfo.company} onChange={this.handleInputChange}  name="company"/>
           <Form.Input fluid label='Job Title' placeholder={this.props.userInfo.jobTitle} onChange={this.handleInputChange}  name="job_title" />
           </Form.Group>

           <Form.Group widths='equal'>
           <Form.Input fluid label='Phone' placeholder={this.props.userInfo.phone} onChange={this.handleInputChange}  name="phone"/>
           </Form.Group>

           <Form.Input fluid label='Birthday' placeholder={this.props.userInfo.birthday} onChange={this.handleInputChange} name="birthday"/>
           <Form.Input fluid label='Location' placeholder={this.props.userInfo.location} onChange={this.handleInputChange}  name="location" />
           
          </Form>
        </Card.Description>
      </Card.Content>
       <Card.Content extra>
        <Grid>
          <Grid.Row>

            <Grid.Column width={3}>
            </Grid.Column>

            <Grid.Column width={5}>
                <Button icon='close' size="large" circular color='black' onClick={() => this.cancel()}/>
            </Grid.Column>

            <Grid.Column width={5}>
                <Button icon='check' size="large" circular color='black' onClick={()=>this.handleFormSubmit()}/>
            </Grid.Column>

          </Grid.Row>
          
        </Grid>
      </Card.Content>
    </Card>

        )
    }

    renderDisplay(){

        let backgroundStyles={
            background: "#4b79a1", /* fallback for old browsers */
            background: "-webkit-linear-gradient(to right, #4b79a1, #283e51)", /* Chrome 10-25, Safari 5.1-6 */
            background: "linear-gradient(to right, #4b79a1, #283e51)"
        }

      return(


    <div style={{marginBottom:"10px"}} >
    
    <Segment style={backgroundStyles}>

    {this.props.loggedInUserInfo.userId === this.props.url && this.props.loggedInUserInfo.loggedIn ? <Icon name='pencil' size='small' color="black" onClick={()=> this.edit()} /> : null }
    
        <Grid.Row style={{marginBottom: "10px"}}>
          <Grid.Column textAlign="center">
          </Grid.Column>
        </Grid.Row>

    <Header as='h2' icon textAlign='center'>
      <Icon name='user' color="black" circular />
    
    </Header>

    <Grid>
        <Grid.Row columns={2}>
        <Grid.Column width={2}>
            <Icon circular color='black' name='mail outline' />
        </Grid.Column>
        <Grid.Column width={14} textAlign="left">
            <h4 style={{lineHeight: "2.5rem", color: "white"}}>{this.props.userInfo.email}</h4>
        </Grid.Column>

        <Grid.Column width={2} style={{marginTop: "3px"}}>
            <Icon circular color='black' name='phone' />
        </Grid.Column>
        <Grid.Column width={14} textAlign="left">
            <h4 style={{lineHeight: "2.5rem", color: "white"}}>{this.props.userInfo.phone}</h4>
        </Grid.Column>

        <Grid.Column width={2} style={{marginTop: "3px"}}>
            <Icon circular color='black' name='building outline' />
        </Grid.Column>
        <Grid.Column width={14} textAlign="left">
            <h4 style={{lineHeight: "2.5rem", color: "white"}}>{this.props.userInfo.current_company} | {this.props.userInfo.job_title}</h4>
        </Grid.Column>

        <Grid.Column width={2} style={{marginTop: "3px"}}>
        <Icon circular color='black' name='calendar' />
        </Grid.Column>
        <Grid.Column width={14} textAlign="left">
            <h4 style={{lineHeight: "2.5rem", color: "white"}}>{this.props.userInfo.birthday}</h4>
        </Grid.Column>

        <Grid.Column width={2} style={{marginTop: "3px"}}>
        <Icon circular color='black' name='map pin' />
        </Grid.Column>
        <Grid.Column width={14} textAlign="left">
            <h4 style={{lineHeight: "2.5rem", color: "white"}}>{this.props.userInfo.location}</h4>
        </Grid.Column>

            <Grid.Column width={8} textAlign="center" style={{marginTop: "20px"}}>
                {this.props.loggedInUserInfo.userId ===this.props.url && this.props.loggedInUserInfo.loggedIn ? null : (<ConnectButton />)}
            </Grid.Column>

            <Grid.Column width={8} textAlign="center" style={{marginTop: "20px"}}>
                {this.props.loggedInUserInfo.userId ===this.props.url && this.props.loggedInUserInfo.loggedIn ? null : (<EmailButton />)}
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