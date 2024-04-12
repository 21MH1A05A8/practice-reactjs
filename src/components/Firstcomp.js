import React from "react";
const Mango=()=>{   // nested component
    return(
        <>
        <h1>this is the nested component</h1>
        </>
    )
}
const Firstcomp=(props)=>{
    const {name,rollno,branch}=props.obj
    return(
        <>
        <h2>this is the first component {props.name} 
        name={name}</h2>
         <Mango/> 
         {/* import nested component */}
        </>
    )
}
export default Firstcomp;