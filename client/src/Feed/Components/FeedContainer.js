import React from 'react'
import { Header, Segment, Container, Divider, Icon } from 'semantic-ui-react'
import ProfileFeedPosts from '../../Profile/Components/ProfileFeedPosts'


const ProfileFeed = (props) => (
      <div style={{marginTop: 40}}>
            <Divider horizontal><h3 textAlign="center" style={{ color: "white" }}><Icon circular name='share alternate' />Posts Feed</h3></Divider>

      {props.loggedInUser.posts.slice(0).reverse().map((message, key) => (
          <ProfileFeedPosts messageType = {message.messageType} name={props.loggedInUser.firstName + " " + props.loggedInUser.lastName} image_url={props.loggedInUser.image_url} message = {message.message} date={message.date} userInfo={props.loggedInUser} loggedInUserInfo={props.loggedInUserInfo}/>
      ))}

    </div>
)

export default ProfileFeed