import React, { Component } from 'react'
import Languages from './Languages'
import { Message, Grid, Segment, Divider , Icon, Modal, Button, Image, Header, Container, Form, Loader} from 'semantic-ui-react'
import DragSortableList from 'react-drag-sortable'
import API from "../../utils/API";
import axios from "axios";


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
          editing: false,
          newLanguage: ""
         }
    }

    edit(){
      this.setState({editing: true})
    }

    cancel(){
      this.setState({editing: false})
    }

    save(){
      this.state.languages.push(this.state.newLanguage)
      console.log(this.state.languages)
    }


  handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };
     

    handleFormSubmit = ()=> {
     console.log(this.props.loggedInUserInfo.userId)
      axios
        .put(
            `/api/users/${this.props.loggedInUserInfo.userId}/languages`, 
            {language: this.state.newLanguage}
            
        )
        .then(r => {console.log(r.status)
          this.setState({editing: false})

        })
        .catch(e => console.log(e));


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
                  <Form.Input fluid placeholder="Add another language" onChange={this.handleInputChange} name="newLanguage"/>
                  <Button icon='check' size="large" circular color='teal' onClick={()=>this.handleFormSubmit()}/>
              </Form>

              {this.props.userInfo.languages.map(language => (
                        <Languages language={language} editing={true}/>
                      ))}
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