import React from 'react'
import { Link } from "react-router-dom"
import './Main.scss'
import ProgressDone from '../ProgressDone/ProgressDone'

const Main = () => {
  const getMonday = JSON.parse(localStorage.getItem("Monday")) || [];
  const getMondayCount = JSON.parse(localStorage.getItem("MondayCompleted")) || [];
  const getThuesday = JSON.parse(localStorage.getItem("Thuesday")) || [];
  const getThuesdayCount = JSON.parse(localStorage.getItem("ThuesdayCompleted")) || [];
  const getWednesday = JSON.parse(localStorage.getItem("Wednesday")) || [];
  const getWednesdayCount = JSON.parse(localStorage.getItem("WednesdayCompleted")) || [];
  const getThursday = JSON.parse(localStorage.getItem("Thursday")) || [];
  const getThursdayCount = JSON.parse(localStorage.getItem("ThursdayCompleted")) || [];
  const getFriday = JSON.parse(localStorage.getItem("Friday")) || [];
  const getFridayCount = JSON.parse(localStorage.getItem("FridayCompleted")) || [];
  const getSaturday = JSON.parse(localStorage.getItem("Saturday")) || [];
  const getSaturdayCount = JSON.parse(localStorage.getItem("SaturdayCompleted")) || [];
  return (
    <div className='main'>
      <h1>Todo-List</h1>
      <div>
        <Link to="/monday" className='day_link'>
          <h4>MONDAY</h4>
          <ProgressDone done={getMondayCount / getMonday.length * 100} />
        </Link>
        <Link to="/thuesday" className='day_link'>
          <h4>Thuesday</h4>
          <ProgressDone done={getThuesdayCount / getThuesday.length * 100} />
        </Link>
        <Link to="/wednesday" className='day_link'>
          <h4>Wednesday</h4>
          <ProgressDone done={getWednesdayCount / getWednesday.length * 100} />
        </Link>
        <Link to="/thursday" className='day_link'>
          <h4>Thursday</h4>
          <ProgressDone done={getThursdayCount / getThursday.length * 100} />
        </Link>
        <Link to="/friday" className='day_link'>
          <h4>Friday</h4>
          <ProgressDone done={getFridayCount /  getFriday.length * 100} />
        </Link>
        <Link to="/saturday" className='day_link'>
          <h4>Saturday</h4>
          <ProgressDone done={getSaturdayCount / getSaturday.length * 100} />
        </Link>
      </div>
    </div>
  )
}

export default Main