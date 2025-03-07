import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

interface Activity {
  id: number;
  name: string;
  dueDate: string;
}

export const Homepage = function () {
  const [todos, setTodos] = useState<Activity[]>([]);
  // store  a,b,c,d  methods pop  
  //first  create  a copy  using the spread operator  ... a b c d, e.... abcde...set the state  as  abcde
  // todos-hold state 
  // setTodo-setstate
  const [task, setTask] = useState("");
  // ---mananging the  tsask


  const [dueDate, setDueDate] = useState("");
  // managing the   date

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);

  const addingTask=()=>{
    const newTask:Activity={
      id:Date.now(),
      name:task,
      dueDate:dueDate,
    }
    setTodos([...todos,newTask]);
    setTask("");
    setDueDate("");

  }
  const addOrUpdateTask = () => {
    if (editIndex !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? { ...todo, name: task, dueDate } : todo
      );
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      const newTask: Activity = {
        id: Date.now(),
        name: task,
        dueDate,
      };
      setTodos([...todos, newTask]);
    }
    setTask("");
    setDueDate("");
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setTask(todos[index].name);
    setDueDate(todos[index].dueDate);
  };

  const handleDelete = (index: number) => {
    setTaskToDelete(index);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (taskToDelete !== null) {
      const updatedTodos = todos.filter((_, index) => index !== taskToDelete);
      setTodos(updatedTodos);
      setTaskToDelete(null);
      setShowModal(false);
    }
  };
  function handleTaskchange(e){
    setTask(e.target.value);
  }

  return (
    <div className="flex flex-col items-center p-5"  style={{marginTop:0,marginBottom:700}}>
      {/* <h1 className="text-2xl font-bold mb-4">To-Do List</h1> */}
      <div className="flex gap-2">
        <input
          type="text"
          style={{background:'white',color:'black', fontWeight:'bold'}}
  
          placeholder="Task"
          value={task}
          onChange={
           (e)=>{
            handleTaskchange(e);
           }
          }
          className="border p-2 rounded"
        />
        <input
          type="text"
          style={{background:'white',color:'black', fontWeight:'bold'}}
          placeholder="Due Date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={addingTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li key={todo.id} className="border p-2 rounded mt-2 flex justify-between items-center">
            <span>
              {todo.name} - {todo.dueDate}
            </span>
            <div>
              <button onClick={() => handleEdit(index)} className="text-yellow-500 mx-2">
                <FaEdit />
              </button>
              <button onClick={() => handleDelete(index)} className="text-red-500">
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded shadow-lg">
            <h2 className="text-lg mb-4">Are you sure you want to delete this task?</h2>
            <div className="flex justify-between">
              <button onClick={confirmDelete} className="bg-red-500 text-white px-4 py-2 rounded">
                Yes
              </button>
              <button onClick={() => setShowModal(false)} className="bg-gray-300 px-4 py-2 rounded">
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};