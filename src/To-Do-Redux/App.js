import React from 'react'
import { handlerchange, handlersubmit, handlerdelete, handleredit, handlerindex } from './TodoSlice'
import { useDispatch, useSelector } from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './ToDo.css'

function App() {
    const dispatch = useDispatch()
    const inputvalue = useSelector((state) => { return state.Todo.value })
    const task = useSelector((state) => { return state.Todo.tasks })
    function submission(e) {
        e.preventDefault()
        dispatch(handlersubmit())
    }
    function deletetask(e, element, index) {
        e.preventDefault()
        dispatch(handlerdelete(index))
    }
    function edittask(e, element, index) {
        e.preventDefault()
        dispatch(handlerindex(index))
        dispatch(handleredit(element))
    }
    return (
        <div className='wrapper'>
            <div className='head'>
                <form onSubmit={submission}>
                    <input
                        type="text"
                        placeholder='Enter Task'
                        value={inputvalue}
                        onChange={(e) => dispatch(handlerchange(e.target.value))}></input>
                    <button type='submit'>Add Task</button>
                </form>
            </div>
            <div className='todo'>
              <h1>Tasks</h1>
                <ul>
                    {
                        task.map((element, index) => {
                            return (
                                <li key={index}>{element}  <a onClick={(e) => { deletetask(e, element, index) }} ><DeleteIcon /></a>  <a onClick={(e) => { edittask(e, element, index) }}><EditIcon /></a></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>

    )
}

export default App