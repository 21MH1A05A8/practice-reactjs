// import React ,{Component}from "react";
// import Firstcomp from "./components/Firstcomp";
// let a="lucky";
// export default class App extends Component{
//     state={
//         rollno:"123"
//     }
//     render(){
//         return (
//             <div>
//              <h1>hello {this.state.rollno}</h1>
//              <Firstcomp name="kavya"/>
//             </div>
//         )
//     }
// }
import React from "react";
// import Firstcomp from "./components/Firstcomp";
// import Hookscomp from "./components/Hookscomp";
// import Statemg from "./components/Statemg";
// import Practicecomp from "./components/Practicecomp";
// import Objectivecomp from "./components/Objectcomp";
import Navbar from "./components/Navbar";
import {Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Signupform from "./components/Signupform";
// let a="lucky";
// const student={
//     name:"sri",
//     rollno:1,
//     branch:"cse"
// }
const App=()=>{
        return (
             <center>
            <div>
             {/* <h1>hello {a}</h1>
             <Firstcomp name="kavya"  obj={student}/> */}
             {/* <Hookscomp/> */}
             {/* <Statemg/> */}
             {/* <Practicecomp/>
             <Objectivecomp/> */}
             <Navbar/>
             <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
             </Routes>
             <Signupform/>
            </div>
             </center>
        )
}
export default App;