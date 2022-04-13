import { useState } from "react";
import notecontext from "./notecontext";

const Notestate = (props) => {

  let s =[];
  let [note, setnote] = useState(s);

  let getnotes = async () => {
    let response=await fetch("http://localhost:5055/api/notes/getnotes", {
      method: "GET",
      headers: {
        "Content-type": "application/json;",
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTQzNDNlNTUxZTFmNWYxMjRlZjc4MSIsImlhdCI6MTY0OTc1MDIxNn0.G-M-v448F1pihZ3Yc22BudYvA4fYlXwwW5iIDweocP8"
      }
    })

    let data=await response.json()
    setnote(data)
  }
  //Add note
  let addnote = async (n) => {
    let newnote = {
      "title": n.title,
      "description": n.description,
      "tags": n.tags
    }
    let response=await fetch("http://localhost:5055/api/notes/addnote", {
      method: "POST",
      body: JSON.stringify(newnote),
      headers: {
        "Content-type": "application/json",
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTQzNDNlNTUxZTFmNWYxMjRlZjc4MSIsImlhdCI6MTY0OTc1MDIxNn0.G-M-v448F1pihZ3Yc22BudYvA4fYlXwwW5iIDweocP8"
      }
    })

    let data=await response.json()
    getnotes();

  }

  //Delete note
  let deletenote = async (id) => {
    let response=await fetch(`http://localhost:5055/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTQzNDNlNTUxZTFmNWYxMjRlZjc4MSIsImlhdCI6MTY0OTc1MDIxNn0.G-M-v448F1pihZ3Yc22BudYvA4fYlXwwW5iIDweocP8"
      }
    })

    let data=await response.json()
    console.log(data);
    getnotes();
  }

  //Edit Note
  let editnote = (id) => {
    console.log(id)
  }

  return (
    <notecontext.Provider value={{ note, addnote, deletenote, editnote,getnotes }}>
      {props.children}
    </notecontext.Provider>
  )
}

export default Notestate