import React from 'react'

const Total = ({parts}) => {
    return (
        <div>
           <p>Number of exercises: {parts.reduce((cv,acc)=>cv + acc.exercises,0)}</p>
        </div>
    )
}

export default Total
