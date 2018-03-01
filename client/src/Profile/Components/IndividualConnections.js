import React from 'react'
import { Header, Image, Card, Grid, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'




const IndividualConnections = (props) => (

<div textAlign='center'>
  <Link to="/home/profile/5a976c3771360c08da7f049b">
    <Image src={props.image_url} size='small' centered circular style={{border: "3px solid #67C8D3", padding: "3px", backgroundColor: "white"}}/>
    <h4 textAlign="center">{props.firstName + " " + props.lastName}</h4>
    <h3 style={{marginTop:"-3%", color: "#67C8D3"}} textAlign="center">{props.job_title}</h3>
    </Link>
  </div>
)

export default IndividualConnections