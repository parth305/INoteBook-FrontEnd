import React, { useContext, useState } from 'react'
import notecontext from '../context/Notes/notecontext'
import alertcontext from "../context/Alerts/alertcontext";

function AddNote() {
    let { showalert } = useContext(alertcontext);
    let {addnote}=useContext(notecontext);
    let [note,setNote]=useState({ title: "", description: "", tag: "" })

    let handleClick = (e) => {
        addnote(note);
        showalert("success", "Note Added successfully")
        e.preventDefault()
    }

    let Change = (event) => {
        setNote({...note,[event.target.name]:event.target.value})
    }
    return (
        <div>
            <h1>
                Add a Note
            </h1>
            <form action="">
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Add Title</h5>
                        <div className="mb-3">
                            <textarea className="form-control" id="addtitle" name="title" onChange={Change} rows="1"></textarea>
                        </div>
                        <h5 className="card-title">Add a Description</h5>
                        <div className="mb-3">
                            <textarea className="form-control" id="addtxt" name="description" onChange={Change} rows="3"></textarea>
                        </div>
                        <h5 className="card-title">Add a Tag</h5>
                        <div className="mb-3">
                            <textarea className="form-control" id="addtag" name="tag" onChange={Change} rows="1"></textarea>
                        </div>
                        <button id="addbtn" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddNote
