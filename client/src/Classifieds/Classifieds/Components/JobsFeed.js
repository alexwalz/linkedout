import React from 'react'
import { Message, Image, Grid } from 'semantic-ui-react'

let messageStyles={
    border: "2px solid grey",
    padding: "3%",
    borderImage: "linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%)",
    borderImageSlice: "1"
}


function FeedMessages(props) {
    return (
      <div style={{margin: "5px"}}>
          <Message info style={messageStyles}>
          <Grid columns={2}>
                <Grid.Row>
                <Grid.Column width={4}>
                <Image  style={{ border: "2px solid #67C8D3", padding: "2px", height: "4rem", width: "4rem", borderRadius: "999px"}} src={props.image_url} rounded />
                </Grid.Column>
                <Grid.Column width={12}>
                    <h2 style={{lineHeight: "4.2rem", color: "#67C8D3"}}>{props.name}</h2>
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
