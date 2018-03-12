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
              <Step.Title style={{color: "#67C8D3", width: "100%"}}>Instructure</Step.Title>
              <Step.Description style={{color: "white"}}>Senior Software Engineer</Step.Description>
            </Step.Content>
              

            <Step.Content style={{marginTop:"15px"}}>

            <Button.Group>
                  <Link to={"https://jobs.lever.co/instructure/05fd95ac-7058-4e6c-a77c-e483c4bfea4d"} target="_blank"><Button basic color="grey">View Website</Button></Link>
                  <Button.Or />
                  <Link to={"https://jobs.lever.co/instructure/05fd95ac-7058-4e6c-a77c-e483c4bfea4d"} target="_blank"><Button basic color="grey">Email Company</Button></Link>
              </Button.Group>

              <Step.Title style={{color: "#67C8D3", marginTop:"25px"}}>Job Description</Step.Title>
              <Step.Description style={{color: "white"}}>We’re hiring senior engineers, who are passionate about technology and education, to help build new features into our existing products (Canvas, Bridge, and Arc).

Our product team doesn't throw specs over some imaginary wall to engineering, and engineering doesn't throw code over some imaginary wall to QA. We all collaborate together. We highly value innovation, so much so that we have quarterly Hackweeks.  A week each quarter to work on relevant pet projects and features.</Step.Description>
            </Step.Content>

          <Step.Content>
              <Step.Title style={{color: "#67C8D3", marginTop: "15px"}}>Languages</Step.Title>
              <Step.Description style={{color: "white"}}>Skilled full stack developer, or an expert back-end and DevOps developer.</Step.Description>
            </Step.Content>


            </Step>
     </Step.Group>
     </div>
         )
    }
}
 
export default FeaturedJob;