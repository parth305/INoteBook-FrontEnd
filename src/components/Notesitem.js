import React from 'react'

function Notesitem(props) {
    console.log("hey")
  return (
    
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <h6 className="card-title">{props.tag}</h6>
      <p className="card-text">{props.description}</p>
      <button id={props.id} className="btn btn-primary mx-1">delete</button>
      <button  className="btn btn-primary mx-1">Edit</button>
    </div>
  )
}

export default Notesitem
