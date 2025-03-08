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


  const [editIndex, setEditIndex] = useState<number | null>(null); //store  the index ready for deletion
  const [showModal, setShowModal] = useState(false);
  // a modal is a pop up  and it takes  two values either its shown or not  --boolean  value
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);

  const addingTask=()=>{
    if(editIndex!==null){
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? { ...todo, name: task, dueDate } : todo//inital  value
      );
      
      setTodos(updatedTodos);
      setEditIndex(null);

    }else{
      const newTask:Activity={
        id:Date.now(),
        name:task,//firstinput
        dueDate:dueDate,//secondinput
      }
      setTodos([...todos,newTask]);
    }
    
    setTask("");
    setDueDate("");

    console.log(todos);

  }
  
  const handleEdit = (index: number) => {
    setEditIndex(index);
    // 1. setting index for deletion
    // 2.my inputs  are stored  in todo with a bluprint of activity --id --name --duedate
    // 3.I filter out 
    // michael=(a,b,c,d) .... to get value c ...kim[2]--I will get a single  objects---c
    // todos
    //  {/* {
    //    0 activity one ---name--id--dueDate--react
    //     1  activity two----name---id--duedate
    //     2 activity two----name---id--duedate
    // //   } */}  todos[index]....get a single  todo...gottentodo.name gottterntodo.id
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
      // remember  we are using immutable state
      // we cannot  change a  value directly  --we can only replace the value with  the new value 
      // benefits  of immutable state --speed complixty  and storage complexity
      // memory addresses  a ..b ..c  ..d 
      // if I was  to do some operations it means  I have to acclocate some space
      // a + b=c --
      // value of a  stored  in a different address in the memory ---abx
      // value of b  stored  in a different address in the memory ----aby
      // value of c  stored  in a different address in the memory----abz--results
      // delete and  moving --- but not changng the  memory address
      setTodos(updatedTodos);
      setTaskToDelete(null);//---state  that was holding the  index for deletion
      setShowModal(false);//deletion modal  will disaapear .
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
      {/* for  a in todos 
      do something  ntil  some condition is met  */}
      {/* {a,b,c,d}
      a b c d */}

      {/* {
       0 activity one ---name--id--dueDate--react
        1  activity two----name---id--duedate
        2 activity two----name---id--duedate
    //   } */}
    // mapping you are taking all elements in an array  one by one just like using  the lopps like the for loop
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