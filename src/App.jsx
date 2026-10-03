import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {

    const loggedInUser = localStorage.getItem('loggedInUser')

    if (!loggedInUser) {
        return
    }

    const session = JSON.parse(loggedInUser)

    setUser(session.role)

    if (session.role === 'employee' && userData.length > 0) {

        const currentEmployee = userData.find(
            employee => employee.id === session.data.id
        )

        setLoggedInUserData(currentEmployee || null)
    }

}, [userData])


const handleLogin = (email, password) => {

    if (email === 'admin@example.com' && password === '123') {

        setUser('admin')

        localStorage.setItem('loggedInUser',
            JSON.stringify({ role: 'admin' })
        )
        return
    }

    if (userData) {

        const employee = userData.find(
            (e) => e.email === email && e.password === password
        )

        if (employee) {

            setUser('employee')
            setLoggedInUserData(employee)

            localStorage.setItem('loggedInUser',
                JSON.stringify({
                    role: 'employee',
                    data: employee
                })
            )

            return
        }
    }

    alert('Invalid email or password')
}

const handleTaskStatusChange = (taskId, status) => {

    const updatedData = userData.map((employee) => {

        if (employee.id !== loggedInUserData.id) {
            return employee
        }

        const updatedTasks = employee.tasks.map((task) => {

            if (task.id !== taskId) {
                return task
            }

            return {
                ...task,

                active: status === 'active',
                newTask: status === 'new',
                completed: status === 'completed',
                failed: status === 'failed'
            }
        })

        const updatedCounts = {
            newTask: updatedTasks.filter(task => task.newTask).length,
            active: updatedTasks.filter(task => task.active).length,
            completed: updatedTasks.filter(task => task.completed).length,
            failed: updatedTasks.filter(task => task.failed).length
        }

        return {
            ...employee,
            tasks: updatedTasks,
            taskCounts: updatedCounts
        }
    })

    setUserData(updatedData)

    const updatedEmployee = updatedData.find(
        employee => employee.id === loggedInUserData.id
    )

    setLoggedInUserData(updatedEmployee)
}

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : 
      (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} onTaskStatusChange={handleTaskStatusChange} /> : null) }
    </>
  )
}

export default App