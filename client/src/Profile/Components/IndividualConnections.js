import React from 'react'
import { Header, Image } from 'semantic-ui-react'




const IndividualConnections = (props) => (

    <div style={{marginBottom: "10px"}}>
        <Header as='h3'>
            <Image circular src={props.connections.image_url} />
            {' '}{props.connections.name}
        </Header>
    </div>
)

export default IndividualConnections