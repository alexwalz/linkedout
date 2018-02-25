import React, { Component } from 'react'
import Languages from './Languages'
import { Message, Grid, Segment, Divider , Icon, Modal, Button, Image, Header, Container, Form, Loader} from 'semantic-ui-react'
import DragSortableList from 'react-drag-sortable'
import API from "../../utils/API";


let languageStyles={
  border: "2px solid grey",
  borderImage: "linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%)",
  borderImageSlice: "1",
  backgroundColor: "transparent"
}

class LanguagesView extends Component {

  constructor(props) {
        super(props);
        this.state = { 
          editing: false
         }
    }

    edit(){
      this.setState({editing: true})
    }

    save(){
      this.setState({editing: false})
    }

    cancel(){
      this.setState({editing: false})
    }


    componentDidMount(){
      
    }

    renderForm(){
    
      return(
          <div>
    
          <Segment >
              <Grid.Row style={{marginBottom: "10px"}}>
              <Icon name='cancel' size='small' onClick={()=> this.cancel()} />
              
                <Grid.Column textAlign="center">
                <Divider horizontal><h3  textAlign="center" style={{color: "grey"}}>My Languages</h3></Divider>
                </Grid.Column>
              </Grid.Row>
                <Form>
                  <Form.Input fluid placeholder="Add another language"/>
                  <Button icon='check' size="large" circular color='teal' onClick={()=> this.save()} />
              </Form>
          </Segment>
        </div>
        )
    }

    renderDisplay(){
      return(
           <div>
    
          <Segment  style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/always_grey.png')"}}>
              <Grid.Row style={{marginBottom: "10px"}}>

                <Icon name='pencil' size='small' onClick={()=> this.edit()} />
                <Grid.Column textAlign="center">
                <Divider horizontal><h3  textAlign="center" style={{color: "white"}}>My Languages</h3></Divider>
                </Grid.Column>
              </Grid.Row>

                      {this.props.userInfo.languages.map(language => (
                        <Languages language={language} />
                      ))}
              
          </Segment>
        </div>
        )
    }

   

  render() { 
    return(
    <Container>
    {(this.state.editing) ? this.renderForm() : this.renderDisplay()}
    </Container>)
  }
}

export default LanguagesView;