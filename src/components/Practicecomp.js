import React,{useState} from "react";
const Practicecomp=()=>{
    const[name,setName]=useState("")
    const[details,setDetails]=useState();
    // const[count,setCount]=useState(0)
     const fun=()=>{
        setDetails(name)
     }
    return(
        <>
        <h1>{details}</h1>
        <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
        <button onClick={fun}>submit</button>
        {/* <h1>{name} has been clicked by {count} times</h1> */}
        {/* <button onClick={()=>setCount(count+1)}>click</button> */}
        </>
    )
}
export default Practicecomp;
