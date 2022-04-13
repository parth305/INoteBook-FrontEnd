import { useState } from "react";
import modelcontext from "./Modelcontext";

let ModelState=(props)=>{

    let [model,setmodel]=useState({edittitle:"TODO",editdescription:"TODO",edittags:"TODO",id:""});

    let updatemodel=(note)=>{

        setmodel({edittitle:note.title,edittags:note.tags,editdescription:note.description,id:note._id})
        // console.log(model);
    }

    return (
        <modelcontext.Provider value={{model,updatemodel,setmodel}}>
        {props.children}
        </modelcontext.Provider>
    )
}

export default ModelState