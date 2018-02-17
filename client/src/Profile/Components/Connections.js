import React from 'react'
import { Segment, Divider } from 'semantic-ui-react'
import IndividualConnections from './IndividualConnections'



const Connections = (props) => (
  <Segment piled>
  <Divider horizontal><h3  textAlign="center" style={{color: "grey"}}>My Connections</h3></Divider>

      {props.connections.map(connection => (
                  <IndividualConnections connections={connection}/>
                ))}
    
  </Segment>
)

export default Connections