import classNames from 'classnames'
import './Task.css'
import { useStore } from '../store'


//const STATUS='PLANNED'
// eslint-disable-next-line react/prop-types
export default function Task({title}){

    const task = useStore(store=>store.tasks.find((task)=>task.title===title) )
    const deleteTask=useStore(store=>store.deleteTask)
    const setDraggedTask = useStore(store=>store.setDraggedTask)

    return (
    <div className="task"
        draggable
        onDragStart={()=>setDraggedTask(task.title)}

    >
        <div>{title}</div>
        <div className='bottomWrapper'> 
            <div onClick={()=>deleteTask(title)}>
                 <img src='src\assets\trash.svg'/>
                 </div>
            <div  className={classNames('status',task.state)}>{task?.state}</div>
        </div>
        </div>
)
}