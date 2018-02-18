import React from 'react'
import { Message } from 'semantic-ui-react'


const Languages = (props) => (
  <div style={{marginBottom:"5px", fontSize: "1rem"}} textAlign="center"> 


             <Message info textAlign="center">{props.language}</Message>
    
  </div>
)

export default Languages;