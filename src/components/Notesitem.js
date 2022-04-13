import React from 'react'
// import FontAwesomeIcon from "font-awesome";
function Notesitem(props) {
    // console.log("hey")
  return (
    
    <div className="card-body">
      <h5 className="card-title">{props.note.title}</h5>
      <h6 className="card-title">{props.note.tag}</h6>
      <p className="card-text">{props.note.description}</p>
      <i className="fa-solid fa-trash-can mx-2"></i>
      <i className="fa-solid fa-pen-to-square mx-2"></i>
    </div>
  )
}

export default Notesitem
