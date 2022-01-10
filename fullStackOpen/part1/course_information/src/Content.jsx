import React from 'react';
import Part from './Part'

const Content = ({ parts }) => {
    return (
        <div>
           {parts.map((part)=>{
               return( <Part part={part.name} exercises={part.exercises}/>)
           })}
        </div>
    )
}

export default Content
