import React, {Component} from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'
import axios from 'axios'


class ConnectButton extends Component {
  constructor(props) {
    super(props);
    this.state = { 
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
    })
    .catch(e => console.log(e));
  }


  render(props) { 
    return ( 
      <div>
          <Button.Group>
              <Button basic color="grey" onClick={this.handleConnect}> Connect </Button>
              <Button.Or />
              <Button basic color="teal">Email Me</Button>
        </Button.Group>
    </div>
     )
  }
}
 
export default ConnectButton;