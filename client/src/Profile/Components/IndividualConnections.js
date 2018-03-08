import React from 'react'
import { Header, Image, Card, Grid, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'




const IndividualConnections = (props) => (

<div textAlign='center'>
  <Link to={"/home/profile/"+props.url}>
    <Image src={props.image_url} size='tiny' centered circular style={{border: "3px solid #67C8D3", padding: "2px", backgroundColor: "white", minHeight: "100px", minWidth: "100px", maxHeight: "100px", maxWidth: "100px", overflow: "hidden"}}/>
    <h4 textAlign="center" style={{color: "white"}}>{props.firstName + " " + props.lastName}</h4>
    <h4 style={{marginTop:"-3%", color: "#67C8D3"}} textAlign="center">{props.job_title}</h4>
    </Link>
  </div>
)

export default IndividualConnections