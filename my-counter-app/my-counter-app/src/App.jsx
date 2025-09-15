// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([
//     { text: 'Sample Task 1', completed: false },
//     { text: 'Sample Task 2', completed: false },
//   ]);
//   const [newTask, setNewTask] = useState('');

//   const addTask = () => {
//     if (newTask.trim() === '') return;
//     setTasks([...tasks, { text: newTask, completed: false }]);
//     setNewTask('');
//   };

//   const toggleComplete = (index) => {
//     const updatedTasks = tasks.map((task, i) =>
//       i === index ? { ...task, completed: !task.completed } : task
//     );
//     setTasks(updatedTasks);
//   };

//   const deleteTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="container">
//       <h1>To Do List</h1>
//       <h2>These are your tasks to complete</h2>
//       <ul>
//         {tasks.map((task, index) => (
//           <li
//             key={index}
//             style={{ backgroundColor: task.completed ? 'yellow' : 'white' }}
//           >
//             {task.text}
//             <button onClick={() => toggleComplete(index)}>Complete</button>
//             <button onClick={() => deleteTask(index)} className="delete">
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//         placeholder="Enter new task"
//       />
//       <button onClick={addTask}>Add Task</button>


import { useState } from "react";
import "./App.css";

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      
    </div>
  );
}

export default Count;

  
