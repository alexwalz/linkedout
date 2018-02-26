import React from 'react'
import { Segment, Divider, Grid } from 'semantic-ui-react'
import IndividualConnections from './IndividualConnections'
import ConnectionsModal from './ConnectionsModal'



const Connections = (props) => (

        <Segment style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/always_grey.png')"}}>
                <div style={{marginBottom: "10px"}} >
                   <ConnectionsModal />
                </div>


                <Grid>
                    <Grid.Row>

                        <Grid.Column width={1} textAlign="center">
                        </Grid.Column>

                            {/* WE WILL WANT TO THROW A .MAP DOWN HERE INSTEAD.  HARD CODED FOR UI PURPOSES ONLY */}
                          
                            <Grid.Column width={3} style={{padding: "5px"}} textAlign="center">
                                         <IndividualConnections firstName="Jordan" lastName ="Jacobson" job_title="Software Engineer" image_url="http://www.patriots.com/sites/patriots.com/files/styles/borealis_no_limit_respondsmall/public/embedded-photos/vzn_brian_mecum_headshot_004.jpg?itok=SzZfv98_"/>
                            </Grid.Column>

                            <Grid.Column width={3} style={{padding: "5px"}} textAlign="center">
                                         <IndividualConnections firstName="Ryan" lastName ="Adams" job_title="QA Engineer" image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9rhTy8DfbWcYiBOH_MRGTmGEChG8vJllA1DxSRuuSX1uYfrVTGw"/>
                            </Grid.Column>

                            <Grid.Column width={3} style={{padding: "5px"}} textAlign="center">
                                         <IndividualConnections firstName="Jordan" lastName ="Simmer" job_title="Web Developer" image_url="https://aboveaverage.com/wp-content/uploads/2015/10/kate-mckinnon.png"/>
                            </Grid.Column>

                            <Grid.Column width={3} style={{padding: "5px"}} textAlign="center">
                                         <IndividualConnections firstName="John" lastName ="Robert" job_title="Full Stack Engineer" image_url="https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/110/072/20f5c82.jpg"/>
                            </Grid.Column>

                            <Grid.Column width={3} style={{padding: "5px"}} textAlign="center">
                                         <IndividualConnections firstName="Jake" lastName ="Collins" job_title="Mobile Developer" image_url="https://2awesome4ya.files.wordpress.com/2012/06/old-man-n-white-mustache-2-big.jpg"/>
                            </Grid.Column>
                       
                   </Grid.Row>
               </Grid>


        </Segment>
)

export default Connections