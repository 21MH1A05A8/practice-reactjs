import React, { useState } from "react";
const Signupform=()=>{
    const[data,setData]=useState({
        username:'',
        rollno:'',
        password:'',
        confirmpassword:'',

    })
    const { username,rollno, password,confirmpassword}=data
    const Handler=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
    }
    const Handlesubmit=(e)=>{
         e.preventDefault()
         if(password===confirmpassword){
            console.log(data)
         }
         else{
            console.log("password mismatching")
         }
    }
    return(
        <div>
        <form onSubmit={Handlesubmit}> 
            {"Name"}<input type="text" name="username" placeholder="Enter your Name" value={username} onChange={Handler}/><br/>
            {"Id"}<input type="text" name="rollno" placeholder="Enter your ID" value={rollno} onChange={Handler}/><br/>
            {"Password"}<input type="password" name="password" placeholder="Password" value={password} onChange={Handler}/><br/>
            {"Confirm Password"}<input type="password" name="confirmpassword" placeholder="Confirm Password" value={confirmpassword} onChange={Handler}/><br/>
            <input type="submit" name="submit" />
        </form>
        </div>
    )
}
export default Signupform;