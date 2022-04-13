import { useState } from "react";
import modelcontext from "./Modelcontext";

let ModelState=(props)=>{

    let [title,settitle]=useState("");
    let [description,setdescription]=useState("");
    let [tags,settags]=useState("");
    let [id,setid]=useState("")

    let updatemodel=(note)=>{
        setid(note._id);
        setdescription(note.description);
        settags(note.tags)
        settitle(note.title);
    }

    return (
        <modelcontext.Provider value={{title,settitle,description,setdescription,tags,settags,id,updatemodel}}>
        {props.children}
        </modelcontext.Provider>
    )
}

export default ModelState