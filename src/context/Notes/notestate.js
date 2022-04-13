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

    let [note,setnote]=useState(s);

    return (
        <notecontext.Provider value={{note,setnote}}>
            {props.children}
        </notecontext.Provider>
    )
}

export default Notestate