import React from 'react'
import { Link } from "react-router-dom"
import './Main.scss'

const Main = () => {
  return (
    <div className='main'>
      <h1>Todo-List</h1>
      <div>
        <Link to="/monday" className='day_link'>
          <div className='day'>Monday</div>
        </Link>
        <Link to="/thuesday" className='day_link'>
          <div className='day'>Thuesday</div>
        </Link>
        <Link to="/wednesday" className='day_link'>
          <div className='day'>Wednesday</div>
        </Link>
        <Link to="/thursday" className='day_link'>
          <div className='day'>Thursday</div>
        </Link>
        <Link to="/friday" className='day_link'>
          <div className='day'>Friday</div>
        </Link>
        <Link to="/saturday" className='day_link'>
          <div className='day'>Saturday</div>
        </Link>
      </div>
    </div>
  )
}

export default Main