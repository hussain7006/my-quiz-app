import React from 'react'
import "../../App.css"
function index(props) {
    let { score, reset } = props
    return (
        <div className='scoreDiv'>
            <h1>Your score is :  {score}</h1>
            <button onClick={reset}>Start Again</button>
        </div>
    )
}

export default index
