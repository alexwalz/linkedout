import React from 'react'
import { Message, Grid, Segment, Divider, Header, Icon, Image, Container } from 'semantic-ui-react'


const FeedIdentity = (props) => (
  <div style={{marginBottom:"10px"}}>
    
    <Segment>
    <Header as='h2' icon textAlign='center' style={{color: "black"}}>
      <Image src={props.image_url} avatar style={{width: 150, height: 150}}/> 
      <Header.Content>
        {props.first_name + " " + props.last_name}
        <Header.Subheader>
             <Divider horizontal style={{color: "#00b5ad"}} >{props.job_title}</Divider>
        </Header.Subheader>
	   </Header.Content>
    </Header>
    <Container style={{textAlign: "center", borderTop: "black 2px solid"}}>
      <div style={{margin: 5}}>
        <h3>{props.connections} Connections</h3> 
      </div>
    </Container>

        
    </Segment>
  </div>
)

export default FeedIdentity;