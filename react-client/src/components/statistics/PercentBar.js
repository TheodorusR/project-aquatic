import React from 'react'

const PercentBar = ({name, percentage}) => {
  return (
    <div className='bar-container mt-3'> 
      <p className='mb-2'>{name}</p>
      <div className='percent-bar' style={{width: `${percentage}%`}}>
        <div className='percent-stat'>{percentage}%</div>
      </div>
    </div>
  )
}

export default PercentBar
