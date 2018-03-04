import React from 'react'
import { Header, Segment, Container } from 'semantic-ui-react'


let backgroundStyles={
    background: "#4b79a1", /* fallback for old browsers */
    background: "-webkit-linear-gradient(to right, #4b79a1, #283e51)", /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to right, #4b79a1, #283e51)"
}


const ClassifiedsInfo = (props) => (
  <div style={{marginBottom: "10px"}}>
      <Container>
        <Segment style={backgroundStyles}>
            {props.info}
        </Segment>
    </Container>
  </div>
)

export default ClassifiedsInfo