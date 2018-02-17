import React from 'react'
import { Segment, Divider } from 'semantic-ui-react'



const Connections = (props) => (
  <Segment piled>
  <Divider horizontal><h3  textAlign="center" style={{color: "grey"}}>My Connections</h3></Divider>
  {props.exampleMessage}
  </Segment>
)

export default Connections