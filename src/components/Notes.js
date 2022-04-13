import React, { useContext } from 'react'
import Notesitem from './Notesitem';
import notecontext from '../context/Notes/notecontext'

function Notes() {
    let note=useContext(notecontext);
  return (
      <>
    <h3 className='my-3'>Your Notes</h3>
    <hr />
    <div id="showarea" className="notes row container-fluid">
        {note.state.map((element=>{
            if (element) {
                return (
                    <div  className="noteCard card mx-2 my-2" style={{width: "18rem"}} key={element.id}>
          <Notesitem  title={element.title} description={element.description} id={element.id} tag={element.tags}/>
          </div>
          )
        }
    }))}
      </div>
    </>
  )
}

export default Notes
