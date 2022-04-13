import React from 'react'
import AddNote from './AddNote';

import Notes from './Notes';
function Home() {
  return (
    <div className="container my-3">
      <AddNote/>
      <hr />
      <Notes/>
    </div>

  )
}

export default Home
