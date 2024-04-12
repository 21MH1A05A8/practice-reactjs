import React,{useState} from "react";
const Hookscomp=()=>{
    const [number,setNumber]=useState(0);
    // if(number===0){
    //     setNumber(1);
    // }
    const increment=()=>{
        setNumber(number+1);
        console.log(number)
    }
    const decrement=()=>{
        setNumber(number-1);
        console.log(number)
    }
    return(
   <>
     <h1>{number}</h1>
     <button onClick={increment}>incre</button>
     <button onClick={decrement}> decre</button>
   </>
    )
}
export default Hookscomp;