import React from 'react'
import Languages from './Languages'
import { Message, Grid, Segment, Divider } from 'semantic-ui-react'
import DragSortableList from 'react-drag-sortable'

var list = [
  {content: (<Languages language="JavaScript">test1</Languages>)},
  {content: (<Languages language="Java">test2</Languages>)},
  {content: (<Languages language="SQL">test3</Languages>)},
  {content: (<Languages language="Node.js">test4</Languages>)}
];

const LanguagesView = (props) => (
  <div>
    
    <Segment>
        <Grid.Row style={{marginBottom: "10px"}}>
          <Grid.Column textAlign="center">
          <Divider horizontal><h3  textAlign="center" style={{color: "grey"}}>My Languages</h3></Divider>
          </Grid.Column>
        </Grid.Row>

               
                <DragSortableList items={list}
                 moveTransitionDuration={0.3} type="vertical"/>

    </Segment>
  </div>
)

export default LanguagesView;