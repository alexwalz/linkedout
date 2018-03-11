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

  handleConnect = ()=> {
    console.log("Connection Requested")
    console.log(this.props)
    axios
    .post(
        `/api/users/connections/add/`+this.props.userInfo._id+"", 
       
    )
    .then(r => {
      console.log(r)
      this.props.renderUser()
      this.setState({connected: true})
    })
    .catch(e => console.log(e));
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.updateReady === true){
      this.handleConnectionCheck()
    }else {
      console.log("Done")
    }
    console.log(this.state)
  }

  handleConnectionCheck = () =>{
    this.props.loggedInUser.loggedIn ? 
    this.props.loggedInUser.userData.connections.map((connectionCheck, key) => (
      connectionCheck._id === this.props.url ? this.setState({connected: true, updateReady: false}) : console.log("Not Connected")
    ))
    
    : console.log(false)
  }

  connectedButton = () => {
    return(
      <Button basic color="red"><Icon name='heart'/>Connected</Button>
    )
  }


  connectButton = () => {
    return(
      <Button basic color="grey" onClick={this.handleConnect}><Icon name='empty heart'/>Connect</Button>
    )
  }




  render(props) { 
    return ( 
      <div>

    {/* {this.props.loggedInUser.loggedIn ? 
    this.props.loggedInUser.map((connectionCheck, key) => (
      console.log(connectionCheck)
    ))}
     : console.log(false); */}

     {/* {this.props.loggedInUser.loggedIn ? this.handleConnectionCheck : console.log(false)} */}


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