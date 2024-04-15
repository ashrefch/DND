
import { useStore } from "../store"
import {shallow} from 'zustand/shallow'
import "./Column.css"
import Task from "./Task"
import { useState } from "react"


// eslint-disable-next-line react/prop-types
export default function Column( {state}){

    const [text,setText]= useState("")
    const [open,setOpen]= useState(false)

const addTask=useStore(store=>store.addTask)
const setDraggedTask = useStore((store) => store.setDraggedTask);
const moveTask = useStore((store) => store.moveTask);
const draggedTask = useStore((store) => store.draggedTask);

const tasks= useStore(store=>store.tasks.filter(task=>task.state ===state),shallow)

    return <div className="column" 
        onDragOver={e=>e.preventDefault()}
        onDrop={()=> {
            moveTask(draggedTask,state)
            setDraggedTask(null);
        }
        }
       
    >
        <div className="titleWrapper">
        <p>{state}</p>
        <button onClick={()=>setOpen(true)}> Add </button>

        </div>
        
        {tasks?.map(task=>  <Task key={task.title} title={task.title}/>)}
        {open&& <div className="Modal">
            <div className="modalContent"> 
                <input onChange={e=>setText(e.target.value)} value={text}/>
                <button onClick={()=>   {addTask(text,state);
                                        setText('');
                                        setOpen(false)}}>
                                            Submit</button>
            </div>
        </div>}
        </div>
}