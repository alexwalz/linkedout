import React from 'react'
import { Header, Segment, Container } from 'semantic-ui-react'
import JobPosts from './JobPosts'

const JobsFeed = (props) => (
      <div style={{marginTop: 40}}>
            <JobPosts messageType = "Job Posting" name={props.firstName + " " + props.lastName} image_url={props.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <JobPosts messageType = "Job Posting" name={props.firstName + " " + props.lastName} image_url={props.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <JobPosts messageType = "Job Posting" name={props.firstName + " " + props.lastName} image_url={props.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <JobPosts messageType = "Job Posting" name={props.firstName + " " + props.lastName} image_url={props.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <JobPosts messageType = "Job Posting" name={props.firstName + " " + props.lastName} image_url={props.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <JobPosts messageType = "Job Posting" name={props.firstName + " " + props.lastName} image_url={props.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>

            <JobPosts messageType = "Job Posting" name={props.firstName + " " + props.lastName} image_url={props.image_url} message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Magna eget est lorem ipsum dolor sit amet consectetur. Gravida dictum fusce ut placerat orci." date="February 13, 2018"/>
    </div>
)

export default JobsFeed