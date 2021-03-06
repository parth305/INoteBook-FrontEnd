import React, { useContext } from 'react'
import alertcontext from '../context/Alerts/alertcontext';
import modelcontext from '../context/Model/Modelcontext';
import notecontext from '../context/Notes/notecontext'
function Notesitem(props) {
  let {deletenote}=useContext(notecontext);
  let {showalert}=useContext(alertcontext);
  let {updatemodel}=useContext(modelcontext);
  return (
    
    <div className="card-body">
      <h5 className="card-title">{props.note.title}</h5>
      <h6 className="card-title">{props.note.tags}</h6>
      <p className="card-text">{props.note.description}</p>
      <i className="fa-solid fa-trash-can mx-2" onClick={()=>{
        if(deletenote(props.note._id)){
        showalert("success","successfully deleted the note");
      }
      else{
        showalert("danger","some error ocuured");
      }}}></i>
      <i className="fa-solid fa-pen-to-square mx-2 " onClick={()=>{
        updatemodel(props.note)}} data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
    </div>
  )
}

export default Notesitem
