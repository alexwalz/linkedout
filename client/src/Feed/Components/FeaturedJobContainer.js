import React, { Component } from 'react'
import {Container, Divider, Icon} from 'semantic-ui-react'
import FeaturedJob from './FeaturedJob'

class FeaturedJobsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Container>
                    <Divider horizontal><h3 textAlign="center" style={{ color: "white" }}><Icon circular name='info' />Featured Job Posting</h3></Divider>
                    <FeaturedJob/>
            </Container>
         )
    }
}
 
export default FeaturedJobsContainer;