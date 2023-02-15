import React from 'react'

const TaskCard = (props) => {
  return (
    <div>
            <h1>{props.task.title}</h1>
            <p>{props.task.description}</p>
        </div>
  )
}

export default TaskCard