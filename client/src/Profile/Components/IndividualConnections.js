import React from 'react'
import { Header, Image } from 'semantic-ui-react'




const IndividualConnections = (props) => (

    <div style={{marginBottom: "10px"}}>
        <Header as='h3' style={{color: "white"}}>
            <Image style={{ border: "2px solid #B1D4DD", padding: "2px", height: "4rem", width: "4rem", borderRadius: "999px"}} circular src={props.connections.image_url} />
            {' '}{props.connections.name}
        </Header>
    </div>
)

export default IndividualConnections