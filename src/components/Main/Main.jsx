import React from 'react'
import { Link } from "react-router-dom"
import './Main.scss'
import ProgressDone from '../ProgressDone/ProgressDone'

const Main = () => {
  const getMonday = JSON.parse(localStorage.getItem("Monday")) || [];
  const getThuesday = JSON.parse(localStorage.getItem("Thuesday")) || [];
  const getWednesday = JSON.parse(localStorage.getItem("Wednesday")) || [];
  const getThursday = JSON.parse(localStorage.getItem("Thursday")) || [];
  const getFriday = JSON.parse(localStorage.getItem("Friday")) || [];
  const getSaturday = JSON.parse(localStorage.getItem("Saturday")) || [];
  return (
    <div className='main'>
      <h1>Todo-List</h1>
      <div>
        <Link to="/monday" className='day_link'>
          <h4>MONDAY</h4>
          <ProgressDone done={getMonday.length} />
        </Link>
        <Link to="/thuesday" className='day_link'>
          <h4>Thuesday</h4>
          <ProgressDone done={getThuesday.length} />
        </Link>
        <Link to="/wednesday" className='day_link'>
          <h4>Wednesday</h4>
          <ProgressDone done={getWednesday.length} />
        </Link>
        <Link to="/thursday" className='day_link'>
          <h4>Thursday</h4>
          <ProgressDone done={getThursday.length} />
        </Link>
        <Link to="/friday" className='day_link'>
          <h4>Friday</h4>
          <ProgressDone done={getFriday.length} />
        </Link>
        <Link to="/saturday" className='day_link'>
          <h4>Saturday</h4>
          <ProgressDone done={getSaturday.length} />
        </Link>
      </div>
    </div>
  )
}

export default Main