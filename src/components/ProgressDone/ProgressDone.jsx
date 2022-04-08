import React, { useState } from 'react'
import './ProgressDone.scss'

const ProgressDone = ({ done }) => {
    const [style, setStyle] = useState({})

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }
        setStyle(newStyle);
    }, 1000)

    return (
        <div className='progress'>
            <div className='days' style={style}>{done}%</div>
        </div>
    )
}

export default ProgressDone