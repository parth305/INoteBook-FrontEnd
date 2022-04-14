import { useState } from "react";
import modelcontext from "./Modelcontext";

let ModelState=(props)=>{

    let [model,setmodel]=useState({edittitle:"",editpassword:"",edittags:"",_id:""})

    let updatemodel=(note)=>{
        setmodel({edittitle:note.title,editdescription:note.description,edittags:note.tags,_id:note._id})
    }

    return (
        <modelcontext.Provider value={{model,setmodel,updatemodel}}>
        {props.children}
        </modelcontext.Provider>
    )
}

export default ModelState