import './Task.css'
import checkIconDark from '../../../public/icons/check-dark.svg'
import trashIconDark from '../../../public/icons/trash-dark.svg'

function Task ({key = 0, task = {id: '', text:'',datetime:''}}) {

    return (
      <li key={key} className='card'>
          <div className='side-left'>
            <p className='text'>{task.text}</p>
            <span className='datetime'>{task.datetime}</span>
          </div>
          <div className='box-icon'>
            <img className='icon' src={checkIconDark} alt="checkButton" />
          </div>
          <div className='box-icon'>
            <img className='icon' src={trashIconDark} alt="trashButton" />
          </div>
      </li>
    )
}

export default Task;