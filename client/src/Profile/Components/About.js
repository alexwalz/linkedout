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


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };
 

handleFormSubmit = ()=> {
  console.log(this.props.loggedInUserInfo.userId)
  console.log(this.state.about)
  axios
    .post(`/api/users/${this.props.loggedInUserInfo.userId}/about`, this.state.about)
    .then(r => {console.log(r.status)
      this.setState({editing: false})
      this.props.renderUser()
    })
    .catch(e => console.log(e));
}

  edit() {
    this.setState({ editing: true });
  }

  cancel() {
    this.setState({ editing: false });
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
                <Button icon='close' size="large" circular color='teal' onClick={() => this.cancel()}/>
            </Grid.Column>

            <Grid.Column width={5}>
                <Button icon='check' size="large" circular color='teal' onClick={()=>this.handleFormSubmit()}/>
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
            <Icon name="pencil" size="small" onClick={() => this.edit()} />
          ) : null}
          <Grid.Column textAlign="center" />
        </Grid.Row>
        <div style={{ color: "#67C8D3" }}>{this.props.userInfo.about}</div>
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
