import React from 'react'
import { Comment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const IndividualComments = (props) => (
    <div
    >
            <Comment>
                <Comment.Avatar as='a' circular src={props.userInfo.image_url} />
                <Comment.Content>
                 <Link to={'/home/profile/'+ props.userInfo._id}> <Comment.Author  style={{color: "#5CC1CD"}} as='a'>{props.userInfo.firstName + " " + props.userInfo.lastName}</Comment.Author></Link>
                  <Comment.Metadata>
                    <span style={{color: "grey"}}>{props.date}</span>
                  </Comment.Metadata>
                  <Comment.Text style={{color: "white"}}>{props.message}</Comment.Text>
                  <Comment.Actions>
                  </Comment.Actions>
                </Comment.Content>
            </Comment>
  
    </div>
  )
  
  export default IndividualComments