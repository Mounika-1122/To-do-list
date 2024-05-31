import { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { GoCheck } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";

function App() {

  const [task,setTask]=useState("");

  const [tasks,setTasks] = useState([]);


  
  const handleSubmit=()=>{
    const newTask={
      "task":task,
      "status":"PENDING",
      "id":tasks.length
    }
    // localStorage.setItem(tasks.length,newTask)
    setTasks([...tasks,newTask]);
    setTask("");
  }

  const handleDone=(index)=>{
    const newArr = [...tasks];
    newArr[index].status="DONE";
    setTasks(newArr);
  } 

  const handleDelete=(index)=>{
    const newArr = [...tasks];
    newArr[index].status="DELETED";
    setTasks(newArr);
  } 

  useEffect(()=>{
     console.log(tasks);
  },[tasks]);

  return (
    <>
      <div className='bg-[#0D0714] min-h-screen flex justify-center items-center py-16 selection:bg-[#9e78cf7e]' >
          <div className="rounded-xl bg-[#1D1825] sm:p-12 py-10 px-6 flex flex-col gap-9 sm:w-[450px] w-full mx-[10px]">
              {/* section - 1 */}
              <div className='w-full flex flex-row'>
                 <input value={task} onChange={(e)=>{setTask(e.target.value)}} type="text" placeholder='Add a new task' className='flex-1 px-3 py-2 outline-none bg-[#1D1825] placeholder:text-[#777777] border-[#9E78CF] border-2 rounded-lg text-sm text-white' />
                 <button className='bg-[#9E78CF] text-white rounded-md ml-3 px-3 py-2' onClick={handleSubmit} ><FaPlus /></button>
              </div>
              {/* section - 2 */}
              <div className='w-full flex flex-col gap-3'>
                <p className='text-white'>Tasks to do - {tasks.filter((task)=>{return task.status==="PENDING"}).length}</p>
                {
                  tasks.filter((task)=>{return task.status==="PENDING"}).map((task,index)=>(
                    <div key={index} className='bg-[#15101C] rounded-md p-5 flex flex-row justify-between gap-3 item-center'>
                      <div>
                        <p className='text-[#9E78CF] text-sm break-all'>{task.task}</p>
                      </div>
                      <div className='flex flex-row gap-3 items-center'>
                          <GoCheck className='text-[#9E78CF] text-lg cursor-pointer' onClick={()=>handleDone(task.id)} />
                          <AiOutlineDelete className='text-[#9E78CF] text-lg cursor-pointer' onClick={()=>handleDelete(task.id)} />
                      </div>
                    </div>
                  ))
                }
              </div>
              {/* section - 3 */}
              <div className='flex flex-col gap-3'>
                <p className='text-white'>Done - {tasks.filter((task)=>{return task.status==="DONE"}).length}</p>
                {
                  tasks.filter((task)=>{return task.status==="DONE"}).map((task,index)=>(
                    <div key={index} className=' p-5 rounded-md bg-[#15101C]'>
                      <p className='text-[#78CFB0] text-sm line-through break-all'>{task.task}</p>
                    </div>
                  ))
                }
              </div>
          </div>
      </div>
    </>
  )
}

export default App
