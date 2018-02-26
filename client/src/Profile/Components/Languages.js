import React from 'react'
import { Message } from 'semantic-ui-react'

let messageStyles={
  border: "2px solid grey",
  padding: "3%",
  borderImage: "linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%)",
  borderImageSlice: "1"
}

const Languages = (props) => (
  // <div style={{marginBottom:"5px", fontSize: "1rem"}} textAlign="center"> 
             <Message info textAlign="center" style={messageStyles}>{props.language}</Message>
    
  // </div>
)

export default Languages;