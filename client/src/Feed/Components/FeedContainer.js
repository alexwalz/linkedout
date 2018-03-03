import React from 'react'
import { Header, Segment, Container, Divider, Icon } from 'semantic-ui-react'
import FeedPosts from './FeedPosts'

const ProfileFeed = (props) => (
      <div style={{marginTop: 40}}>
            <Divider horizontal><h3 textAlign="center" style={{ color: "white" }}><Icon circular name='share alternate' />Posts Feed</h3></Divider>

            <FeedPosts messageType = "Job Posting" name={props.userInfo.firstName + " " + props.userInfo.lastName} image_url={props.userInfo.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedPosts messageType = "News Feed" name={props.userInfo.firstName + " " + props.userInfo.lastName} image_url={props.userInfo.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedPosts messageType = "News Feed" name={props.userInfo.firstName + " " + props.userInfo.lastName} image_url={props.userInfo.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedPosts messageType = "Thought of The Day" name={props.userInfo.firstName + " " + props.userInfo.lastName} image_url={props.userInfo.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedPosts messageType = "Job Posting" name={props.userInfo.firstName + " " + props.userInfo.lastName} image_url={props.userInfo.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedPosts messageType = "Recruitment" name={props.userInfo.firstName + " " + props.userInfo.lastName} image_url={props.userInfo.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <FeedPosts messageType = "Thought of The Day" name={props.userInfo.firstName + " " + props.userInfo.lastName} image_url={props.userInfo.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>
    </div>
)

export default ProfileFeed