import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  return (
    <div className='p-5 md:p-10 bg-[#1C1C1C] min-h-screen overflow-hidden'>
        
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumbers data={props.data} />
        <TaskList 
          data={props.data} 
          onTaskStatusChange={props.onTaskStatusChange}
        />
    </div>
  )
}

export default EmployeeDashboard