import React from 'react'

import Notes from './Notes';


function Home() {
  return (
    <div className="container my-3">
      <h1>
        Add a Note
      </h1>
      <form action="">

        <div className="card" >
          <div className="card-body">
            <h5 className="card-title">Add Title</h5>
            <div className="mb-3">
              <textarea className="form-control" id="addtitle" rows="1"></textarea>
            </div>
            <h5 className="card-title">Add a Description</h5>
            <div className="mb-3">
              <textarea className="form-control" id="addtxt" rows="3"></textarea>
            </div>
            <h5 className="card-title">Add a Tag</h5>
            <div className="mb-3">
              <textarea className="form-control" id="addtag" rows="1"></textarea>
            </div>
            <button id="addbtn" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
      <hr />
      <Notes/>
    </div>

  )
}

export default Home
