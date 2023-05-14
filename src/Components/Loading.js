import React from 'react'
import loading from '../loading.gif';

function Loading() {
    return (
      <div className="text-center">
        <img src={loading} alt="Loading" style={{height:"100px", width:"100px"}}/>
      </div>
    )
  
}

export default Loading
