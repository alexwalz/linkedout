import React from 'react'
import { Header, Segment, Container, Divider } from 'semantic-ui-react'
import FeedMessages from './ProfileFeedPosts'

const ProfileFeed = (props) => (
  <div>
      <Container>
        <Segment>
          <Divider horizontal><h3  textAlign="center" style={{color: "grey"}}>My Posts</h3></Divider>

            <FeedMessages messageType = "Job Posting" name={props.first_name + " " + props.last_name} image_url={props.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedMessages messageType = "News Feed" name={props.first_name + " " + props.last_name} image_url={props.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedMessages messageType = "News Feed" name={props.first_name + " " + props.last_name} image_url={props.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedMessages messageType = "Thought of The Day" name={props.first_name + " " + props.last_name} image_url={props.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedMessages messageType = "Job Posting" name={props.first_name + " " + props.last_name} image_url={props.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedMessages messageType = "Recruitment" name={props.first_name + " " + props.last_name} image_url={props.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedMessages messageType = "Thought of The Day" name={props.first_name + " " + props.last_name} image_url={props.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>
        </Segment>
    </Container>
  </div>
)

export default ProfileFeed
