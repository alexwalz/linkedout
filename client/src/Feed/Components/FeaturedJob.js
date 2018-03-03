import React, { Component } from 'react'
import {Step, Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class FeaturedJob extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <Step.Group fluid vertical style={{backgroundColor:"transparent", border: "1px solid white"}}>
            <Step active style={{backgroundColor:"transparent"}}>
            <Icon name='code' color="grey" />
            <Step.Content>
              <Step.Title style={{color: "#67C8D3", width: "100%"}}>Company Name</Step.Title>
              <Step.Description style={{color: "white"}}>Front End Developer</Step.Description>
            </Step.Content>
              

            <Step.Content style={{marginTop:"15px"}}>

            <Button.Group>
                  <Link to={"/"} target="_blank"><Button basic color="grey">View Website</Button></Link>
                  <Button.Or />
                  <Link to={"/"} target="_blank"><Button basic color="grey">Email Company</Button></Link>
              </Button.Group>

              <Step.Title style={{color: "#67C8D3", marginTop:"25px"}}>Job Description</Step.Title>
              <Step.Description style={{color: "white"}}>This is where you put in a bunch of information about the job posting.  It's going to be somewhat long so it's important for the design to still look good when the text is super long like this.</Step.Description>
            </Step.Content>

          <Step.Content>
              <Step.Title style={{color: "#67C8D3", marginTop: "15px"}}>Languages</Step.Title>
              <Step.Description style={{color: "white"}}>React, Node, Javascript, Ruby</Step.Description>
            </Step.Content>


            </Step>
     </Step.Group>
     </div>
         )
    }
}
 
export default FeaturedJob;