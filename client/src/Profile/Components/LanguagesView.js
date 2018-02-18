import React from 'react'
import Languages from './Languages'
import { Message, Grid, Segment, Divider , Icon, Modal, Button, Image, Header} from 'semantic-ui-react'
import DragSortableList from 'react-drag-sortable'

const LanguagesView = (props) => (

  <div>
    
    <Segment>
        <Grid.Row style={{marginBottom: "10px"}}>
        <Modal trigger={<Icon name='pencil' size='small' />}>
          <Modal.Header>My Languages</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header></Header>
              
              <DragSortableList items={props.languagesDrag} dropBackTransitionDuration={0.3} type="vertical"/>
            </Modal.Description>
          </Modal.Content>
        </Modal>
          <Grid.Column textAlign="center">
          <Divider horizontal><h3  textAlign="center" style={{color: "grey"}}>My Languages</h3></Divider>
          </Grid.Column>
        </Grid.Row>

                {props.languages.map(language => (
                  <Languages language={language} />
                ))}

    </Segment>
  </div>
)

export default LanguagesView;