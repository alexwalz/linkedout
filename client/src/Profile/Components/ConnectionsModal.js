import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import IndividualConnections from './IndividualConnections'

class ConnectionsModal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Modal dimmer="blurring" trigger={<Icon name='users' circular color="teal" size="large" />} basic size='small'>
            <Header icon='users' content='All Connections' />
            <Modal.Content>


                    {/* Map through all the connections for that user here: */}
                    <IndividualConnections firstName="Jordan" lastName ="Jacobson" job_title="Software Engineer" image_url="http://www.patriots.com/sites/patriots.com/files/styles/borealis_no_limit_respondsmall/public/embedded-photos/vzn_brian_mecum_headshot_004.jpg?itok=SzZfv98_"/>
           

            </Modal.Content>
          </Modal>
         )
    }
}
 
export default ConnectionsModal;