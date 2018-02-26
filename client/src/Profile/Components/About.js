import React, {Component} from 'react'
import { Header, Segment, Container, Card, Form, Grid, Button, Icon, Divider } from 'semantic-ui-react'
import PostButton from '../../Feed/Components/PostButton'



class About extends Component {
  constructor(props) {
      super(props);
      this.state = { 
        editing: false
       }
  }

  edit(){
    this.setState({editing: true})
  }

  cancel(){
    this.setState({editing: false})
  }

  postComment(){
    //this funciton will be passed to the PostButton when editing is true 
  }

  renderForm(){

    return(

      <Card fluid style={{boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.2)"}} style={{marginBottom: "10px"}}>
        <Card.Content>
          <Card.Description>
            <Form>
            <Form.TextArea label='About' placeholder='Tell us about you...' />
            </Form>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Grid>
            <Grid.Row>

              <Grid.Column width={9}>
              </Grid.Column>

              <Grid.Column width={3}>
                <Button basic color='red' onClick={() => this.cancel()}>Cancel</Button>
              </Grid.Column>

              <Grid.Column width={3}>
                  <PostButton editing= {this.state.editing}/>
              </Grid.Column>

            </Grid.Row>
            
          </Grid>
        </Card.Content>
      </Card>

      )
  }

  renderDisplay(){
    return(

      <div style={{marginBottom:"10px"}} >

      <Segment  style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/always_grey.png')"}}>
      <Grid.Row style={{marginBottom: "10px", marginBottom: "10px"}}>

        {this.props.loggedInUserInfo.userId === this.props.url && this.props.loggedInUserInfo.loggedIn ? <Icon name='pencil' size='small' onClick={()=> this.edit()} /> : null } 
        <Grid.Column textAlign="center">
        </Grid.Column>
      </Grid.Row>
        <div style={{color: "white"}}>
            {this.props.userInfo.about}
        </div>
      </Segment>
</div>

      )
  }

  render() { 
      return ( <Container>
        {(this.state.editing) ? this.renderForm() : this.renderDisplay()}
        </Container>
       )
  }
}



export default About;