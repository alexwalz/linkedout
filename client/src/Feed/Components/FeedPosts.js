import React from 'react'
import { Message, Image, Grid } from 'semantic-ui-react'


function FeedPosts(props) {
    return (
      <div style={{margin: "5px"}}>
          <Message info>
          <Grid columns={2}>
                <Grid.Row>
                <Grid.Column width={4}>
                <Image src={props.image_url} size='mini' />
                </Grid.Column>
                <Grid.Column width={12}>
                    <h2>{props.name}</h2>
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
export default FeedPosts