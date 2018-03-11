import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Grid } from 'semantic-ui-react'
import IndividualConnections from './IndividualConnections'

class ConnectionsModal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Modal dimmer="blurring" trigger={<Icon name='users' circular color="grey" size="large" />} basic >
            <Header icon='users' content='All Connections' />
            <Modal.Content style={{width: "135%", margin: "0 0 0 -14%"}}>

                    
                    <Grid>
                    <Grid.Row>

                        
                        {this.props.userInfo.connections.map((connection, key) => (
                            <Grid.Column width={3} style={{padding: "15px"}} textAlign="center">
                                        <IndividualConnections url={connection._id} firstName={connection.firstName} key={key} lastName ={connection.lastName}  job_title={connection.job_title}  image_url={connection.image_url} />
                           </Grid.Column>
                          ))}
                          
                       
                   </Grid.Row>
               </Grid>
           

            </Modal.Content>
          </Modal>
         )
    }
}
 
export default ConnectionsModal;