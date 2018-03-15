import React, { Component } from 'react'
import {Step, Button, Icon, Divider, Grid, Header} from 'semantic-ui-react'
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
              <Step.Title style={{color: "#67C8D3", marginTop:"25px"}}>Job Title</Step.Title>
              <Step.Description style={{color: "white"}}>{this.props.cInfo.jobType}<br/>{this.props.cInfo.category}<br/><br/></Step.Description>
        </Grid.Row>

        <Grid.Row>
              <Step.Title style={{color: "#67C8D3", marginTop:"25px"}}> Job Description</Step.Title>
              <Step.Description style={{color: "white"}}>{this.props.cInfo.position_description}</Step.Description>
        </Grid.Row>

        <Grid.Row>
              <Step.Title style={{color: "#67C8D3", marginTop:"25px"}}> Job Responsibilities</Step.Title>
              <Step.Description style={{color: "white"}}>{this.props.cInfo.position_responsibilities}</Step.Description>
        </Grid.Row>

        <Grid.Row>
              <Step.Title style={{color: "#67C8D3", marginTop:"25px"}}>Qualifications</Step.Title>
              <Step.Description style={{color: "white"}}>{this.props.cInfo.position_qualifications}</Step.Description>
        </Grid.Row>

        <Grid.Row>

            <Grid.Column width={4}>
              <Step.Title style={{color: "#67C8D3", marginTop:"25px"}}>Salary Information</Step.Title>
              <Step.Description style={{color: "white"}}>{this.props.cInfo.salaryFrom} TO: {this.props.cInfo.salaryTo}</Step.Description>
            </Grid.Column>

       
             <Grid.Column width={4}>
              <Step.Title style={{color: "#67C8D3", marginTop:"25px"}}>Education</Step.Title>
              <Step.Description style={{color: "white"}}>{this.props.cInfo.eduLevel}</Step.Description>
             </Grid.Column>

             <Grid.Column width={4}>
              <Step.Title style={{color: "#67C8D3", marginTop:"25px"}}>Experience</Step.Title>
              <Step.Description style={{color: "white"}}>{this.props.cInfo.yearsOfExp}</Step.Description>
             </Grid.Column>

             <Grid.Column width={4}>
              <Step.Title style={{color: "#67C8D3", marginTop:"25px"}}>Additional Information</Step.Title>
              <Step.Description style={{color: "white"}}>{this.props.cInfo.additional_info}</Step.Description>
             </Grid.Column>

             <Grid.Column width={4}>
              <Step.Title style={{color: "#67C8D3", marginTop:"25px"}}>Contact Information</Step.Title>
              <Step.Description style={{color: "white"}}>NAME: {this.props.cInfo.contact_name}<br/>  NUMBER: {this.props.cInfo.phone_number}<br/>  EMAIL: {this.props.cInfo.contact_email}</Step.Description>
             </Grid.Column>

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