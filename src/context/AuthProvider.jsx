import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState([])
    const [isInitialized, setIsInitialized] = useState(false)

    // Load employee data when application starts
 useEffect(() => {

    const storedData = getLocalStorage()

    if (!storedData.employees || storedData.employees.length === 0) {

        setLocalStorage()

        const initialData = getLocalStorage()

        const employeesWithIds = (initialData.employees || []).map(employee => ({
            ...employee,
            tasks: (employee.tasks || []).map(task => ({
                ...task,
                id: task.id ?? crypto.randomUUID()
            }))
        }))

        setUserData(employeesWithIds)

    } else {

        const employeesWithIds = storedData.employees.map(employee => ({
            ...employee,
            tasks: (employee.tasks || []).map(task => ({
                ...task,
                id: task.id ?? crypto.randomUUID()
            }))
        }))

        setUserData(employeesWithIds)
    }

    setIsInitialized(true)

}, [])

    // Save employee data whenever it changes
    useEffect(() => {

        if (isInitialized) {
            localStorage.setItem(
                'employees',
                JSON.stringify(userData)
            )
        }

    }, [userData, isInitialized])

    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider