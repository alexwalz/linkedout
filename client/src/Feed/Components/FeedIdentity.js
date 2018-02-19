import React from 'react'
import { Message, Grid, Segment, Divider, Header, Icon, Image, Container } from 'semantic-ui-react'
import { Link }  from 'react-router-dom'



const FeedIdentity = (props) => (
  <div style={{marginBottom:"10px"}}>
    
    <Segment style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/always_grey.png')"}}>
    <Header as='h2' icon textAlign='center' style={{color: "black"}}>
      <Image src={props.image_url} avatar style={{width: 150, height: 150, border: "4px solid #67C8D3", padding: "2px"}}/> 
      <Header.Content style={{color: "white"}}>
        {props.first_name + " " + props.last_name}
        <Header.Subheader>
             <Divider horizontal style={{color: "#67C8D3"}} >{props.job_title}</Divider>
        </Header.Subheader>
	   </Header.Content>
    </Header>
    <Container style={{textAlign: "center", borderTop: "black 2px solid"}}>
      <div style={{margin: 5}}>
        <h3>{props.connections} Connections</h3> 
        <Link to="/home/network">Connect Now</Link>
      </div>
    </Container>

        
    </Segment>
  </div>
)

export default FeedIdentity;