import React from 'react'
import { Header, Segment, Container } from 'semantic-ui-react'

const About = (props) => (
  <div style={{marginBottom: "10px"}}>
      <Container>
        <Header as='h1' attached='top' textAlign="center"  style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/always_grey.png')", backgroundPositionX: 'center', color:"white" }}>
        About Me
        </Header>
        <Segment attached>
            {props.about}
        </Segment>
    </Container>
  </div>
)

export default About