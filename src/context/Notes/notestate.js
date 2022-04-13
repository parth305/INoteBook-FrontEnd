import { useState } from "react";
import notecontext from "./notecontext";

const Notestate=(props)=>{
    let s=[
        {
          "_id": "16255596f01ddcd4a6be39d84",
          "user_id": "6254343e551e1f5f124ef781",
          "title": "regret709",
          "description": "my life parth 8",
          "tags": "Genral",
          "date": "2022-04-12T10:50:23.066Z",
          "__v": 0
        },
        {
          "_id": "26255596f01ddcd4a6be39d84",
          "user_id": "6254343e551e1f5f124ef781",
          "title": "regret709",
          "description": "my life parth 8",
          "tags": "Genral",
          "date": "2022-04-12T10:50:23.066Z",
          "__v": 0
        },
        {
          "_id": "36255596f01ddcd4a6be39d84",
          "user_id": "6254343e551e1f5f124ef781",
          "title": "regret709",
          "description": "my life parth 8",
          "tags": "Genral",
          "date": "2022-04-12T10:50:23.066Z",
          "__v": 0
        },
        {
          "_id": "46255596f01ddcd4a6be39d84",
          "user_id": "6254343e551e1f5f124ef781",
          "title": "regret709",
          "description": "my life parth 8",
          "tags": "Genral",
          "date": "2022-04-12T10:50:23.066Z",
          "__v": 0
        },
        {
          "_id": "56255596f01ddcd4a6be39d84",
          "user_id": "6254343e551e1f5f124ef781",
          "title": "regret709",
          "description": "my life parth 8",
          "tags": "Genral",
          "date": "2022-04-12T10:50:23.066Z",
          "__v": 0
        },
        {
          "_id": "66255596f01ddcd4a6be39d84",
          "user_id": "6254343e551e1f5f124ef781",
          "title": "regret709",
          "description": "my life parth 8",
          "tags": "Genral",
          "date": "2022-04-12T10:50:23.066Z",
          "__v": 0
        },
        {
          "_id": "76255596f01ddcd4a6be39d84",
          "user_id": "6254343e551e1f5f124ef781",
          "title": "regret709",
          "description": "my life parth 8",
          "tags": "Genral",
          "date": "2022-04-12T10:50:23.066Z",
          "__v": 0
        },
        {
          "_id": "862555e72fc05cc85d590d5c5",
          "user_id": "6254343e551e1f5f124ef781",
          "title": "bhyu",
          "description": "great",
          "tags": "Genral",
          "date": "2022-04-12T11:11:46.896Z",
          "__v": 0
        }
      ]
    let a=0;

    let [note,setnote]=useState(s);

    //Add note

    let addnote=(n)=>{
      let newnote={
        "_id":a,
        "user_id":"7236",
        "title":n.title,
        "description":n.description,
        "tags":n.tag
      }
      a=a+1;
      setnote(note.concat(newnote))
    }

    //Delete note
    let deletenote=(id)=>{
      let newnote=note.filter((note=>{return note._id!==id}))
      setnote(newnote)
      return false
    }
    //Edit Note
    let editnote=()=>{

    }

    return (
        <notecontext.Provider value={{note,addnote,deletenote,editnote}}>
            {props.children}
        </notecontext.Provider>
    )
}

export default Notestate