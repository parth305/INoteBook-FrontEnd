import React, { useContext, useEffect } from 'react'
import Notesitem from './Notesitem';
import notecontext from '../context/Notes/notecontext'

function Notes() {
    let {note,getnotes} = useContext(notecontext);
    useEffect(()=>{
        getnotes();
    },[])
    return (
        <>
            <h3 className='my-3'>Your Notes</h3>
            <hr />
            {note.length===0 && <h5>No Notes to show</h5>}
            <div id="showarea" className="notes row container-fluid">
                {note.map((element => {
                    if (element) {
                        return (
                            <div className="noteCard card mx-2 my-2"  style={{ width: "18rem" }} key={element._id}>
                                <Notesitem note={element}  />
                            </div>
                        )
                    }
                }))}
            </div>
        </>
    )
}

export default Notes
