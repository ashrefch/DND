import classNames from 'classnames'
import './Task.css'
import { useStore } from '../store'


//const STATUS='PLANNED'
// eslint-disable-next-line react/prop-types
export default function Task({title}){

    const task = useStore(store=>store.tasks.find((task)=>task.title===title) )

    return (
    <div className="task"
        
    >
        <div>{title}</div>
        <div className='bottomWrapper'> 
            <div></div>
            <div className={classNames(`${task.state}`)}>{task?.state}</div>
        </div>
        </div>
)
}