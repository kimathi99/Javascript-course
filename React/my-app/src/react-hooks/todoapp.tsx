// import { useState, useEffect } from "react";

// export default function App() {
//   // Load tasks from localStorage on component mount
//   const [tasks, setTasks] = useState(() => {
//     return JSON.parse(localStorage.getItem("tasks")) || [];
//   });

//   const [task, setTask] = useState("");
//   const [dueDate, setDueDate] = useState("");

//   // Save tasks to localStorage whenever tasks state changes
//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = () => {
//     if (task.trim() === "" || dueDate.trim() === "") return;
//     setTasks([...tasks, { task, dueDate }]);
//     setTask(""); // Reset input
//     setDueDate(""); // Reset date input
//   };

//   return (
//     <div className="flex flex-col items-center p-5">
//       <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
//       <div className="flex gap-2">
//         <input
//           type="text"
//           placeholder="Task"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           className="border p-2 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Due Date"
//           value={dueDate}
//           onChange={(e) => setDueDate(e.target.value)}
//           className="border p-2 rounded"
//         />
//         <button
//           onClick={addTask}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Add
//         </button>
//       </div>
//       <ul className="mt-4">
//         {tasks.map((t, index) => (
//           <li key={index} className="border p-2 rounded mt-2">
//             {t.task} - {t.dueDate}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
