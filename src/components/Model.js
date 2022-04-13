import React, { useContext } from 'react'
import modelcontext from '../context/Model/Modelcontext'
import notecontext from '../context/Notes/notecontext';

function Model() {
    let { title, settitle, description, setdescription, tags, settags, id } = useContext(modelcontext);
    let { editnote } = useContext(notecontext);
    let Changetitle = (event) => {
        settitle(event.target.value)
    }
    let Changedescription = (event) => {
        setdescription(event.target.value)
    }
    let Changetags = (event) => {
        settags(event.target.value)
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
                                    <textarea value={title} className="form-control" id="edittitle" name="edittitle" onChange={Changetitle} rows="1"></textarea>
                                </div>
                                <h5 className="card-title">Edit Description</h5>
                                <div className="mb-3">
                                    <textarea value={description} className="form-control" id="edittxt" name="editdescription" onChange={Changedescription} rows="3"></textarea>
                                </div>
                                <h5 className="card-title">Edit Tag</h5>
                                <div className="mb-3">
                                    <textarea value={tags} className="form-control" id="edittag" name="edittags" onChange={Changetags} rows="1"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => {
                            editnote(id)
                        }}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model
