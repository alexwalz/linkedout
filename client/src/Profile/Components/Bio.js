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
            this.setState({loggedInUser: response.data.userId})
            this.setState({userData: response.data.userData})
        })
        .catch(error => {
          console.log("Error fetching and parsing data", error);
        });
    }

  
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState(prevState => ({
            userData: {
              ...prevState.userData,
              [name]:value
            }
          }));
      };
    
 
handleFormSubmit = async (event) => {
const res = await axios.post('/api/users/'+this.state.loggedInUser+"/edit", this.state.userData );
await this.setState({editing: false})
await this.props.renderUser()
};


    renderForm(){


      return(

    <Card fluid style={{boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.2)"}} style={{marginBottom: "10px"}}>
      <Card.Content>
        <Card.Description>
           <Form>

           <Form.Group widths='equal'>
           <Form.Input fluid label='First Name' placeholder={this.props.userInfo.firstName} onChange={this.handleInputChange}  name="firstName"/>
           <Form.Input fluid label='Last Name' placeholder={this.props.userInfo.lastName} onChange={this.handleInputChange}  name="lastName"/>
           </Form.Group>

           <Form.Group widths='equal'>
           <Form.Input fluid label='Company' placeholder={this.props.userInfo.current_company} onChange={this.handleInputChange}  name="current_company"/>
           <Form.Input fluid label='Job Title' placeholder={this.props.userInfo.job_title} onChange={this.handleInputChange}  name="job_title"/>
           </Form.Group>

           <Form.Group widths='equal'>
           <Form.Input fluid label='Phone' placeholder={this.props.userInfo.phone} onChange={this.handleInputChange}  name="phone"/>
           </Form.Group>

           <Form.Input fluid label='Birthday' placeholder={this.props.userInfo.birthday} onChange={this.handleInputChange} name="birthday"/>
           <Form.Input fluid label='Location' placeholder={this.props.userInfo.location} onChange={this.handleInputChange}  name="location"/>
           
          </Form>
        </Card.Description>
      </Card.Content>
       <Card.Content extra>
        <Grid>
          <Grid.Row>

            <Grid.Column width={3}>
            </Grid.Column>

            <Grid.Column width={5}>
                <Button icon='close' size="large" circular color='grey' onClick={() => this.cancel()}/>
            </Grid.Column>

            <Grid.Column width={5}>
                <Button icon='check' size="large" circular color='grey' onClick={()=>this.handleFormSubmit()}/>
            </Grid.Column>

          </Grid.Row>
          
        </Grid>
      </Card.Content>
    </Card>

        )
    }

    renderDisplay(){

        let backgroundStyles={
            // background: "#4b79a1", /* fallback for old browsers */
            // background: "-webkit-linear-gradient(to right, #4b79a1, #283e51)", /* Chrome 10-25, Safari 5.1-6 */
            // background: "linear-gradient(to right, #4b79a1, #283e51)"
            backroundColor: "transparent",
        }

      return(


    <div style={{marginBottom:"10px"}} >
    
    <Segment style={{backgroundColor: "transparent"}}>
    <div style={{marginLeft: "auto", marginRight: "auto"}}>{this.props.loggedInUserInfo.userId === this.props.url && this.props.loggedInUserInfo.loggedIn ? null : (<ConnectButton loggedInUser = {this.props.loggedInUserInfo} userInfo={this.props.userInfo} url={this.props.url} renderUser={this.props.renderUser}/>)}</div>
    {this.props.loggedInUserInfo.userId === this.props.url && this.props.loggedInUserInfo.loggedIn ? <Icon name='pencil' size='small' color="grey" onClick={()=> this.edit()} /> : null }
    
        <Grid.Row style={{marginBottom: "10px"}}>
          <Grid.Column textAlign="center">
          </Grid.Column>
        </Grid.Row>

   


        
        {this.props.userInfo.email === "" ? null :
        <Grid>
        <Grid.Row columns={2}>
        <Grid.Column width={2}>
            <Icon circular color='grey' name='mail outline' />
        </Grid.Column>
      
        <Grid.Column width={14} textAlign="left">
            <h4 style={{lineHeight: "2.5rem", color: "white"}}>{this.props.userInfo.email}</h4>
        </Grid.Column>
        </Grid.Row>
        </Grid>
        }
        
        
        {this.props.userInfo.phone === "" ? null :
        <Grid  style={{marginTop: "-8%"}}>
        <Grid.Row columns={2}>
        <Grid.Column width={2} style={{marginTop: "3px"}}>
            <Icon circular color='grey' name='phone' />
        </Grid.Column>

        <Grid.Column width={14} textAlign="left">
            <h4 style={{lineHeight: "2.5rem", color: "white"}}>{this.props.userInfo.phone}</h4>
        </Grid.Column>
        </Grid.Row>
        </Grid>
        }

        {this.props.userInfo.current_company === "" ? null :
        <Grid  style={{marginTop: "-8%"}}>
        <Grid.Row columns={2}>
        <Grid.Column width={2} style={{marginTop: "3px"}}>
            <Icon circular color='grey' name='building outline' />
        </Grid.Column>
        <Grid.Column width={14} textAlign="left">
            <h4 style={{lineHeight: "2.5rem", color: "white"}}>{this.props.userInfo.current_company}</h4>
        </Grid.Column>
        </Grid.Row>
        </Grid>
        }

        {this.props.userInfo.job_title === "" ? null :
        <Grid  style={{marginTop: "-8%"}}>
        <Grid.Row columns={2}>
        <Grid.Column width={2} style={{marginTop: "3px"}}>
            <Icon circular color='grey' name='code' />
        </Grid.Column>

        <Grid.Column width={14} textAlign="left">
            <h4 style={{lineHeight: "2.5rem", color: "white"}}>{this.props.userInfo.job_title}</h4>
        </Grid.Column>
        </Grid.Row>
        </Grid>
        }

        {this.props.userInfo.birthday === "" ? null :
        <Grid  style={{marginTop: "-8%"}}>
        <Grid.Row columns={2}>
        <Grid.Column width={2} style={{marginTop: "3px"}}>
        <Icon circular color='grey' name='calendar' />
        </Grid.Column>

        <Grid.Column width={14} textAlign="left">
            <h4 style={{lineHeight: "2.5rem", color: "white"}}>{this.props.userInfo.birthday}</h4>
        </Grid.Column>
        </Grid.Row>
        </Grid>
        }

        {this.props.userInfo.location === "" ? null :
        <Grid  style={{marginTop: "-8%"}}>
        <Grid.Row columns={2}>
        <Grid.Column width={2} style={{marginTop: "3px"}}>
        <Icon circular color='grey' name='map pin' />
        </Grid.Column>

        <Grid.Column width={14} textAlign="left">
            <h4 style={{lineHeight: "2.5rem", color: "white"}}>{this.props.userInfo.location}</h4>
        </Grid.Column>
        </Grid.Row>
        </Grid>
        }
        
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