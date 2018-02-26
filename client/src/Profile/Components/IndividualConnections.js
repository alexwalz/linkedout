import React from 'react'
import { Header, Image, Card, Grid, Segment } from 'semantic-ui-react'




const IndividualConnections = (props) => (

<div style={{width: "20%"}}  textAlign='center'>
    <Image src={props.image_url} size='small' centered circular style={{border: "3px solid #67C8D3", padding: "3px", backgroundColor: "white"}}/>
    {/* <p textAlign="center">{props.firstName + " " + props.lastName}</p> */}
    
  </div>
)

export default IndividualConnections