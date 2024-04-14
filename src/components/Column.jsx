
import { useStore } from "../store"
import {shallow} from 'zustand/shallow'
import "./Column.css"
import Task from "./Task"


// eslint-disable-next-line react/prop-types
export default function Column( {state}){

const tasks= useStore(store=>store.tasks.filter(task=>task.state ===state),shallow)

    return <div className="column">
        <p>{state}</p>
        {tasks?.map(task=>  <Task key={task.title} title={task.title}/>)}
        </div>
}