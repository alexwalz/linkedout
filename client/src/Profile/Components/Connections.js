import React from 'react'
import { Segment, Divider } from 'semantic-ui-react'
import IndividualConnections from './IndividualConnections'



const Connections = (props) => (
  <Segment style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/always_grey.png')"}}>
  <Divider horizontal><h3  textAlign="center" style={{color: "white"}}>My Connections</h3></Divider>

      {props.connections.map((connection, key) => (
                  <IndividualConnections connections={connection} key={key}/>
                ))}
    
  </Segment>
)

export default Connections