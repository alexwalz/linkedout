import React from 'react'
import { Segment, Divider, Grid } from 'semantic-ui-react'
import IndividualConnections from './IndividualConnections'
import ConnectionsModal from './ConnectionsModal'



const Connections = (props) => (

        <Segment style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/always_grey.png')"}}>
                <div style={{marginBottom: "10px"}} >
                   <ConnectionsModal />
                </div>
                 <IndividualConnections firstName="Jordan" lastName ="Jacobson" job_title="Software Engineer" image_url="http://www.patriots.com/sites/patriots.com/files/styles/borealis_no_limit_respondsmall/public/embedded-photos/vzn_brian_mecum_headshot_004.jpg?itok=SzZfv98_"/>

        </Segment>
)

export default Connections