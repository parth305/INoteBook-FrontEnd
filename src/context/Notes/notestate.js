import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import alertcontext from "../Alerts/alertcontext";
import modelcontext from "../Model/Modelcontext";
import notecontext from "./notecontext";

const Notestate = (props) => {

  let s = [];
  let [note, setnote] = useState(s);
  let { model } = useContext(modelcontext);
  let { showalert } = useContext(alertcontext);
  let token = localStorage.getItem("token");
  let nevigate=useNavigate();
  // console.log(token)
  let getnotes = async () => {
    try {
      let response = await fetch("http://localhost:5055/api/notes/getnotes", {
        method: "GET",
        headers: {
          "Content-type": "application/json;",
          "token": token
        }
      })

      let data = await response.json()
      if (!data.success) {
        props.showalert("danger", data.error);
        // setnote([])
        nevigate("/login")
      }
      else{
      console.log("data",data);
      setnote(data.note)
      
      }
    } catch (exeption) {
      // setnote([])
      console.log(exeption)
    }
  }
  //Add note
  let addnote = async (n) => {
    let newnote = {
      "title": n.title,
      "description": n.description,
      "tags": n.tags
    }
    let response = await fetch("http://localhost:5055/api/notes/addnote", {
      method: "POST",
      body: JSON.stringify(newnote),
      headers: {
        "Content-type": "application/json",
        "token": token
      }
    })

    let data = await response.json();
    // console.log(data);
    if (!data.success) {
      props.showalert("danger", data.error)
    }
    else {
      props.showalert("success", "Note Added successfully")
    }
    getnotes();
    return data.success
  }

  //Delete note
  let deletenote = async (id) => {
    let response = await fetch(`http://localhost:5055/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "token": token
      }
    })

    let data = await response.json()
    if (!data.success) {
      props.showalert("danger", data.error)
    }
    else {
      showalert("success", "Deleted successfully")
    }
    // console.log(data);
    getnotes();
  }

  //Edit Note
  let editnote = async (id) => {

    let newnote = {
      "title": model.edittitle,
      "description": model.editdescription,
      "tags": model.edittags
    }
    let response = await fetch(`http://localhost:5055/api/notes/updatenote/${id}`, {
      method: "PUT",
      body: JSON.stringify(newnote),
      headers: {
        "Content-type": "application/json",
        "token": token
      }
    })

    let data = await response.json();
    if (!data.success) {
      props.showalert("danger", data.error)
    }
    else {
      showalert("success", "Edited successfully")
    }
    // console.log(data);
    getnotes();

  }

  return (
    <notecontext.Provider value={{ note, addnote, deletenote, editnote, getnotes }}>
      {props.children}
    </notecontext.Provider>
  )
}

export default Notestate