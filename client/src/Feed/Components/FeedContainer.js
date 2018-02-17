import React from 'react'
import { Header, Segment, Container } from 'semantic-ui-react'
import FeedPosts from './FeedPosts'

const ProfileFeed = (props) => (
  <div>
      <Container style={{marginTop: 40, boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.2)"}}>
        <Segment attached>
            <FeedPosts messageType = "Job Posting" name={props.first_name + " " + props.last_name} image_url={props.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedPosts messageType = "News Feed" name={props.first_name + " " + props.last_name} image_url={props.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedPosts messageType = "News Feed" name={props.first_name + " " + props.last_name} image_url={props.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedPosts messageType = "Thought of The Day" name={props.first_name + " " + props.last_name} image_url={props.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedPosts messageType = "Job Posting" name={props.first_name + " " + props.last_name} image_url={props.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedPosts messageType = "Recruitment" name={props.first_name + " " + props.last_name} image_url={props.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedPosts messageType = "Thought of The Day" name={props.first_name + " " + props.last_name} image_url={props.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>
        </Segment>
    </Container>
  </div>
)

export default ProfileFeed