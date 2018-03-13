import React, {Component} from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'
import axios from 'axios'


class ConnectButton extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      updateReady: true,
      connected: false
     }
  }

  componentDidMount() {
    axios
      .get("/api/users/" + this.props.url)
      .then(response => {this.setState({ renderedUser: response.data });})
      .catch(error => {null});
  }

  componentWillReceiveProps(props) {
    this.setState(props)
    axios
    .get("/api/users/" + this.props.url)
    .then(response => {
        this.setState({ renderedUser: response.data });
        this.setState({connected: false});
        this.handleConnectionCheck()
    })
    .catch(error => {null});
  }

  handleConnect = ()=> {
    axios
    .post(`/api/users/connections/add/`+this.props.userInfo._id+"", )
    .then(r => {this.setState({connected: true})})
    .catch(e => console.log(e));
  }

  getLoggedInUser = () => {
    axios
      .get("/api/users/login")
      .then(response => {this.setState({ loggedInUser: response.data });})
      .catch(error => {null});
  };

  handleConnectionCheck = () =>{
    this.getLoggedInUser()
    this.state.loggedInUser.loggedIn ? 
    this.state.loggedInUser.userData.connections.map((connectionCheck, key) => (
      connectionCheck._id === this.state.url ? this.setState({connected: true}) : null)) : null
  }

  connectedButton = () => {
    return(<Button basic color="red"><Icon name='heart'/>Connected</Button>)
  }

  connectButton = () => {
    return(<Button basic color="grey" onClick={this.handleConnect}><Icon name='empty heart'/>Connect</Button>)
  }


  render(props) { 
    return ( 
      <div>
          <Button.Group>
              {this.state.connected ? this.connectedButton() : this.connectButton()}
              <Button.Or />
              <Button basic color="grey"><Icon name='mail'/>Email Me</Button>
        </Button.Group>
    </div>
     )
  }
}
 
export default ConnectButton;