import React from 'react'
import AddNote from './AddNote';

import Model from './Model';
import Notes from './Notes';
function Home() {
  return (
    <div className="container my-3">
      <Model/>
      <AddNote />
      <hr />
      <Notes />
    </div>

  )
}

export default Home
