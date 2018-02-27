import React from 'react'
import { Message, Icon } from 'semantic-ui-react'

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
  // <div style={{marginBottom:"5px", fontSize: "1rem"}} textAlign="center"> 
             <Message info textAlign="center" style={messageStyles}>{(props.loggedUser)? <Icon name="delete" color='red' onClick={()=>props.deleteLanguage(props.language)} style={{opacity: 0.7}}/> : null }{props.language}</Message>
    
  // </div>
)

export default Languages;