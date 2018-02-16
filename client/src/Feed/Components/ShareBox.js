import React from 'react'
import { Message, Grid, Segment, Divider, Header, Icon, Image } from 'semantic-ui-react'


const FeedIdentity = (props) => (
  <div style={{marginBottom:"10px"}}>
    
    <Segment>

    <Header as='h2' icon textAlign='center' style={{color: "black"}}>
      <Icon name='user' circular />
      <Header.Content>
        {props.first_name + " " + props.last_name}
        <Header.Subheader>
             <Divider horizontal style={{color: "#00b5ad"}} >{props.job_title}</Divider>
        </Header.Subheader>
	   </Header.Content>
    </Header>

        
    </Segment>
  </div>
)

export default FeedIdentity;