import React from 'react'
import { Segment, Divider, Grid } from 'semantic-ui-react'
import IndividualConnections from './IndividualConnections'
import ConnectionsModal from './ConnectionsModal'

let styles = {        
        top: "0",
        left: "0",
        backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/always_grey.png')",
        // webkitClipPath: "polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0)",
        // clipPath: "polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0)",
        // height: "52vh"
}



const Connections = (props) => (



        <Segment style={styles}>
                <div style={{marginBottom: "10px"}} >
                   <ConnectionsModal userInfo = {props.userInfo} />
                </div>
                <Grid>
                    <Grid.Row>


                            <Grid.Column width={2} style={{padding: "5px"}} textAlign="center">
                            </Grid.Column>

                       
                        {props.userInfo.connections.slice(0, 6).map((connection, key) => (
                            <Grid.Column width={2} style={{padding: "5px"}} textAlign="center">
                                        <IndividualConnections firstName={connection.firstName} key={key} lastName ={connection.lastName}  job_title={connection.job_title}  image_url={connection.image_url} />
                           </Grid.Column>
                          ))}


                            <Grid.Column width={2} style={{padding: "5px"}} textAlign="center">
                            </Grid.Column>
                       
                   </Grid.Row>
               </Grid>


        </Segment>
)

export default Connections