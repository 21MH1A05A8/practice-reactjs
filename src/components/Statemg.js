import React, { useState ,useEffect} from "react";
const Statemg=()=>{
    // const[name,setName]=useState("")
    // const Handle=(e)=>{
    //    setName( e.target.value);
    // }
    // const Sub=()=>{
    //     <h1>{name}</h1>
    // }
    // return(
    //     <>
    //     <input placeholder="enter the cityname" onChange={Handle}></input>
    //     <br/>
    //     <button onClick={Sub}>submit</button>
    //     </>
    // )

// ---------------------------------------------------------------------------------------------------- task2
    // const [count, setCount] = useState(0);

    // // useEffect hook to update document title when count changes
    // useEffect(() => {
    //   document.title = `Count: ${count}`;
    // }, [count]); // dependency array ensures the effect runs only when count changes
  
    // return (
    //   <div>
    //     <h1>Counter</h1>
    //     <p>Count: {count}</p>
    //     <button onClick={() => setCount(count + 1)}>Increment</button>
    //   </div>
    // );
// ---------------------------------------------------------------------------------- task3
// const [seconds, setSeconds] = useState(0);
// const [isActive, setIsActive] = useState(false);

// useEffect(() => {
//   let interval = null;
//   if (isActive) {
//     interval = setInterval(() => {
//       setSeconds(seconds => seconds + 1);
//     }, 1000);
//   } else if (!isActive && seconds !== 0) {
//     clearInterval(interval);
//   }
//   return () => clearInterval(interval);
// }, [isActive, seconds]);

// const handleStartStop = () => {
//   setIsActive(!isActive);
// };

// const handleReset = () => {
//   setSeconds(0);
//   setIsActive(false);
// };

// return (
//   <div>
//     <h1>Timer: {seconds}s</h1>
//     <button onClick={handleStartStop}>{isActive ? 'Pause' : 'Start'}</button>
//     <button onClick={handleReset}>Reset</button>
//   </div>
// );
// --------------------------------------------task4
const [tasks, setTasks] = useState([]);
const [newTask, setNewTask] = useState('');

const handleChange = (event) => {
  setNewTask(event.target.value);
};

const handleSubmit = (event) => {
  event.preventDefault();
  if (newTask.trim() !== '') {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  }
};

const toggleComplete = (id) => {
  setTasks(tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  ));
};

const removeTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
};

return (
  <div>
    <h2>To-Do List</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new task"
        value={newTask}
        onChange={handleChange}
      />
      <button type="submit">Add Task</button>
    </form>
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => toggleComplete(task.id)}
          >
            {task.text}
          </span>
          <button onClick={() => removeTask(task.id)}>Remove</button>
        </li>
      ))}
    </ul>
  </div>
);
};

export default Statemg;