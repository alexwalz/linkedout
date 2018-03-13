import React from 'react'
import { Message, Image, Grid } from 'semantic-ui-react'

let imageStyles={
    border: "2px solid white",
    padding: "1px",
    borderImage: "linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%)",
    borderImageSlice: "1"
}

let messageStyles={
    border: "2px solid white",
    padding: "3%",
    borderImage: "linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%)",
    borderImageSlice: "1",
    background: "#4b79a1", /* fallback for old browsers */
    background: "-webkit-linear-gradient(to right, #4b79a1, #283e51)", /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to right, #4b79a1, #283e51)"
}



function JobPosts(props) {
    return (
      <div style={{margin: "5px"}}>
          <Message info style={messageStyles}>
          <Grid columns={2}>

                <Grid.Row>
                <Grid.Column  width={16}>
                    <Message.Header style={{color: "white"}}>{props.messageType}</Message.Header>
                    <p style={{color: "white"}}>{props.message}</p>
                </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                <Grid.Column  width={16}  textAlign='right'>
                    <p style={{color: "white"}}>{props.date}</p>
                </Grid.Column>
                </Grid.Row>
                
            </Grid>
            
            
       
        </Message>
      </div>
    )
  }
export default JobPosts