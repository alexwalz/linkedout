import React from 'react'
import { Message, Image, Grid } from 'semantic-ui-react'


function FeedMessages(props) {
    return (
      <div style={{margin: "5px"}}>
          <Message info>
          <Grid columns={2}>
                <Grid.Row>
                <Grid.Column width={4}>
                <Image  style={{ border: "2px solid #B1D4DD", padding: "2px", height: "4rem", width: "4rem", borderRadius: "999px"}} src={props.image_url} rounded />
                </Grid.Column>
                <Grid.Column width={12}>
                    <h2 style={{lineHeight: "4.5rem"}}>{props.name}</h2>
                </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                <Grid.Column  width={16}>
                    <Message.Header style={{color: "grey"}}>{props.messageType}</Message.Header>
                    <p>{props.message}</p>
                </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                <Grid.Column  width={16}  textAlign='right'>
                    <p style={{color: "grey"}}>{props.date}</p>
                </Grid.Column>
                </Grid.Row>
                
            </Grid>
            
            
       
        </Message>
      </div>
    )
  }
export default FeedMessages
