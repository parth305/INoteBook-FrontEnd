import { useState } from "react";
import notecontext from "./notecontext";

const Notestate=(props)=>{

    let state=[
        {
          "_id": "6255596f01ddcd4a6be39d84",
          "user_id": "6254343e551e1f5f124ef781",
          "title": "regret709",
          "description": "my life parth 8",
          "tags": "Genral",
          "date": "2022-04-12T10:50:23.066Z",
          "__v": 0
        },
        {
          "_id": "62555e72fc05cc85d590d5c5",
          "user_id": "6254343e551e1f5f124ef781",
          "title": "bhyu",
          "description": "great",
          "tags": "Genral",
          "date": "2022-04-12T11:11:46.896Z",
          "__v": 0
        }
      ]

    // let [State,setState]=useState(s);

    return (
        <notecontext.Provider value={{state}}>
            {props.children}
        </notecontext.Provider>
    )
}

export default Notestate