import React, { useContext, useRef } from 'react'
import modelcontext from '../context/Model/Modelcontext'
import notecontext from '../context/Notes/notecontext';

function Model() {
    let { model,setmodel } = useContext(modelcontext);
    let { editnote } = useContext(notecontext);
    let refclose=useRef(null);
    let Change = (event) => {
        setmodel({...model,[event.target.name]:event.target.value})
    }
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">Edit Title</h5>
                                <div className="mb-3">
                                    <textarea value={model.edittitle} className="form-control" id="edittitle" name="edittitle" onChange={Change} rows="1"></textarea>
                                </div>
                                <h5 className="card-title">Edit Description</h5>
                                <div className="mb-3">
                                    <textarea value={model.editdescription} className="form-control" id="edittxt" name="editdescription" onChange={Change} rows="3"></textarea>
                                </div>
                                <h5 className="card-title">Edit Tag</h5>
                                <div className="mb-3">
                                    <textarea value={model.edittags} className="form-control" id="edittag" name="edittags" onChange={Change} rows="1"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" ref={refclose}className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => {
                            refclose.current.click();
                            editnote(model._id)
                        }}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model
