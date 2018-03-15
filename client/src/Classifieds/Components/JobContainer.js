import React, { Component } from 'react'
import {Step, Button, Icon, Divider, Grid} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class JobsFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            

            {/* <Step.Group fluid vertical style={{backgroundColor:"transparent", border: "1px solid white"}}>
            <Step active style={{backgroundColor:"transparent"}}>
            <Icon name='code' color="grey" />
            <Step.Content>
              <Step.Title style={{color: "#67C8D3", width: "100%"}}>Company Name</Step.Title>
              <Step.Description style={{color: "white"}}>Front End Developer</Step.Description>
            </Step.Content>
              

            <Step.Content style={{marginTop:"15px", marginBottom: "15px"}}>

            <Button.Group>
                  <Link to={"/home/classifieds"} target="_blank"><Button basic color="grey">View Website</Button></Link>
                  <Button.Or />
                  <Link to={"/home/classifieds"} target="_blank"><Button basic color="grey">Email Company</Button></Link>
              </Button.Group>

              <Step.Title style={{color: "#67C8D3", marginTop:"25px"}}>Job Description</Step.Title>
              <Step.Description style={{color: "white"}}>This is where you put in a bunch of information about the job posting.  It's going to be somewhat long so it's important for the design to still look good when the text is super long like this.</Step.Description>
            </Step.Content>

          <Step.Content>
              <Step.Title style={{color: "#67C8D3", marginTop: "15px"}}>Languages</Step.Title>
              <Step.Description style={{color: "white"}}>React, Node, Javascript, Ruby</Step.Description>
            </Step.Content>


            </Step>
     </Step.Group> */}



     <Step.Group fluid vertical style={{backgroundColor:"transparent", border: "1px solid white"}}>
            <Step active style={{backgroundColor:"transparent"}}>
        <Grid>
        <Grid.Row> 
            <Icon name='code' color="grey" />
        
                   
            <Step.Content>
              <Step.Title style={{color: "#67C8D3", width: "100%"}}>{this.props.cInfo.company_name}</Step.Title>
              <Step.Description style={{color: "white"}}>{this.props.cInfo.job_title}<br/>{this.props.cInfo.city}, {this.props.cInfo.state}<br/>{this.props.cInfo.zip}</Step.Description>
            </Step.Content>
        </Grid.Row>
              <br/>
        
            <Step.Content style={{marginTop:"15px", marginBottom: "15px"}}>
        <Grid.Row>
        <Grid.Column width={16}>
            <Button.Group>
                  <Link to={"/"} target="_blank"><Button basic color="grey">View Website</Button></Link>
                  <Button.Or />
                  <Link to={'mailto:'+this.props.cInfo.contact_email} target="_blank"><Button basic color="grey">Email Company</Button></Link>
              </Button.Group>
        </Grid.Column>
        </Grid.Row>

        <Grid.Row>
              <Step.Title style={{color: "#67C8D3", marginTop:"25px"}}>Job Description</Step.Title>
              <Step.Description style={{color: "white"}}>{this.props.cInfo.jobType}<br/>{this.props.cInfo.category}<br/><br/>DESCRIPTION: {this.props.cInfo.position_description}<br/><br/>RESPONSIBILITES: {this.props.cInfo.position_responsibilities}<br/><br/>QUALIFICATIONS: {this.props.cInfo.position_qualifications}<br/><br/>SALARY RANGE FROM: {this.props.cInfo.salaryFrom} TO: {this.props.cInfo.salaryTo}<br/> EDUCATION LEVEL: {this.props.cInfo.eduLevel}<br/> EXPERIENCE REQUIRED: {this.props.cInfo.yearsOfExp}<br/><br/>CONTACT INFO<br/>  NAME: {this.props.cInfo.contact_name}<br/>  NUMBER: {this.props.cInfo.phone_number}<br/>  EMAIL: {this.props.cInfo.contact_email}<br/><br/> {this.props.cInfo.additional_info}</Step.Description>
        </Grid.Row>
            </Step.Content>
            
        </Grid>
          {/* <Step.Content>
              <Step.Title style={{color: "#67C8D3", marginTop: "15px"}}>Languages</Step.Title>
              <Step.Description style={{color: "white"}}>React, Node, Javascript, Ruby</Step.Description>
            </Step.Content> */}


            </Step>
     </Step.Group>
     <br/>
     </div>
         )
    }
}
 
export default JobsFeed;