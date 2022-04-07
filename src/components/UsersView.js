import React from "react"
import {  List, ListInlineItem} from "reactstrap";


function UsersView() {
    return(<div  color="light"
    className="navbar shadow-sm p-3 mb-5 bg-white rounded"
    expand="md">
      <List type="inline">
    <ListInlineItem>
      jayesh
    </ListInlineItem>
    <ListInlineItem>
      ayesh
    </ListInlineItem>
    <ListInlineItem>
      yesh
    </ListInlineItem>
  </List>
      
      
       </div> );
  }

  
  export default UsersView;