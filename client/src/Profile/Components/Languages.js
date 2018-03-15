import React from 'react'
import { Message, Icon, Button, List } from 'semantic-ui-react'

let messageStyles={
  border: "1px solid grey",
  padding: "3%",
  borderImage: "linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%)",
  borderImageSlice: "1",
  background: "#4b79a1", /* fallback for old browsers */
  background: "-webkit-linear-gradient(to right, #283e51, #4b79a1)", /* Chrome 10-25, Safari 5.1-6 */
  background: "linear-gradient(to right, #283e51, #4b79a1)",
  color: "white"
}

const Languages = (props) => (
            //  <Message info textAlign="center" style={messageStyles}>{(props.loggedUser)? <Icon name="delete" color='red' onClick={()=>props.deleteLanguage(props.language)} style={{opacity: 0.7}}/> : null }{props.language}</Message>
            <List.Item key={props.language}>
            {(props.loggedUser)? <Icon name="close" onClick={()=>props.deleteLanguage(props.language)} style={{opacity: 0.7}}/> : null }
            <List.Content style={{color: "#5CC1CD"}} header={props.language} />
          </List.Item>
)

export default Languages;