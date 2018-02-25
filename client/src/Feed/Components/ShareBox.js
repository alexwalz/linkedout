import React , { Component } from 'react'
import { Container, Grid, Segment, Header, Icon, Form, TextArea, Card,  Button, Image, Select} from 'semantic-ui-react'
import PostButton from './PostButton'

let messageStyles={
border: "1px solid transparent",
  padding: "1%",
  // borderImage: "linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%)",
  // borderImageSlice: "1",
  marginBottom: "5px",
  backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/always_grey.png')",
  color: "white"
}

class ShareBox extends Component {
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
      let postOptions =[
        {key: 'news', value: 'news', text: 'News Feed'},
        {key: 'job', value: 'job', text: 'Job Posting'},
        {key: 'recruitment', value: 'recruitment', text: 'Recruitment'},
        {key: 'thought', value: 'thought', text: 'Thought'}
      ]
      return(

    <Card fluid style={{boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.2)"}} style={messageStyles} >
    {console.log(this.props)}
      <Card.Content>
        <Card.Header style={{color: "white"}}><Image src={this.props.loggedInUser.userData.image_url} avatar /> {this.props.loggedInUser.userData.firstName + " " + this.props.loggedInUser.userData.lastName}</Card.Header>
        <Card.Description>
           <Form>
           <Select placeholder='Select the type of post' options={postOptions} style={messageStyles} />
            <TextArea autoHeight style={messageStyles} placeholder='Add comment here' />
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
          <Card fluid onClick={()=> this.edit()} style={{boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.2)", border: "none"}} style={messageStyles} >
            <Card.Content style={{textAlign: "center"}}>
              <Card.Description><h3 style={{ marginTop: "5%", color:"white"}}> <Icon circular name='plus' />Create New Post</h3></Card.Description>
            </Card.Content>
             <Card.Content extra>
              <Grid>
                <Grid.Row>

                  <Grid.Column width={9}>
                  </Grid.Column>

                  <Grid.Column width={3}>
            
                  </Grid.Column>

                  <Grid.Column width={3}>
                  </Grid.Column>

                </Grid.Row>
                
              </Grid>
            </Card.Content>
          </Card>
        )
    }

    render() { 
        return ( <Container>
          {(this.state.editing) ? this.renderForm() : this.renderDisplay()}
          </Container>
         )
    }
}



export default ShareBox;