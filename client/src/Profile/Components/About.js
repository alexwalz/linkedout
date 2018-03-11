import React, { Component } from "react";
import {
  Header,
  Segment,
  Container,
  Card,
  Form,
  Grid,
  Button,
  Icon,
  Divider
} from "semantic-ui-react";
import PostButton from "../../Feed/Components/PostButton";
import axios from "axios";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
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

  edit() {
    this.setState({ editing: true });
  }

  cancel() {
    this.setState({ editing: false });
  }


  renderError(){
    return(
    
      <div style={{marginTop: "7%"}}>
      <Header as='h3' icon textAlign='center'>
        <Icon name='warning sign' color="grey" circular />
        <Header.Content style={{color: "#5CC1CD"}}>
          No Information Added For This Profile
        </Header.Content>
      </Header>
    </div>

    )
  }


  renderForm() {
    return (
      <Card
        fluid
        style={{ boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.2)" }}
        style={{ marginBottom: "10px" }}
      >
        <Card.Content>
          <Card.Description>
            <Form>
              <Form.TextArea label="about" placeholder="Tell us about you..." onChange={this.handleInputChange} name="about"/>
            </Form>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Grid>
            <Grid.Row>
              <Grid.Column width={3} />

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
    );
  }

  renderDisplay() {
    return (
      
      <div style={{ marginBottom: "10px" }}>
      
        <Grid.Row style={{ marginBottom: "10px", marginBottom: "10px" }}>
          {this.props.loggedInUserInfo.userId === this.props.url &&
          this.props.loggedInUserInfo.loggedIn ? (
            <Icon name="pencil" size="small" color="grey" onClick={() => this.edit()} />
          ) : null}
          <Grid.Column textAlign="center" />
        </Grid.Row>
        {this.props.userInfo.about === "" ? this.renderError() :
        <div style={{ color: "white" }}>{this.props.userInfo.about}</div>
        }
      </div>
    );
  }
  

  render() {
    return (
      <Container>
        {this.state.editing ? this.renderForm() : this.renderDisplay()}
      </Container>
    );
  }
}

export default About;
