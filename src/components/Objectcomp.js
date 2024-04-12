import React from "react";
import { Userdata } from "../data";
const Objectivecomp=()=>{
return(
    <>
    {Userdata.map((item)=>{
        return(
            <>
            <p>{item.name}</p>
            </>
        )
    })}
    </>
)
}
export default Objectivecomp;