import React from 'react'
import { Message, Image, Grid } from 'semantic-ui-react'
import PostComments from './PostComments'
import {Link} from 'react-router-dom'


let messageStyles={
    border: "2px solid grey",
    padding: "3%",
    borderImage: "linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%)",
    backgroundColor: "transparent"
    // borderImageSlice: "1",
    // background: "#4b79a1", /* fallback for old browsers */
    // background: "-webkit-linear-gradient(to right, #4b79a1, #283e51)", /* Chrome 10-25, Safari 5.1-6 */
    // background: "linear-gradient(to right, #4b79a1, #283e51)"
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
                    <Link to={'/home/profile/'+ props.userId}><h2 style={{lineHeight: "4.2rem", color: "white"}}>{props.name}</h2></Link>
                </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                <Grid.Column  width={16}>
                    <Message.Header style={{color: "white"}}>{props.messageType}</Message.Header>
                    <p style={{color: "white"}}>{props.message}</p>
                </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                <Grid.Column  width={16}  textAlign='right'>
                    <p style={{color: "grey"}}>{props.date}</p>
                </Grid.Column>
                </Grid.Row>
                
            </Grid>

                <div>
                    <PostComments userInfo = {props.userInfo} LoggedInUserInfo = {props.LoggedInUserInfo}/>
                    
                </div>

        </Message>
      </div>
    )
  }
export default FeedMessages
