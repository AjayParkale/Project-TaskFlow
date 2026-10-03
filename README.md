# TaskFlow – Employee Task Management System

TaskFlow is a simple employee task management system developed using React.js. It is designed to help an admin create and assign tasks to employees and allow employees to view their assigned tasks and task progress.

The project is mainly focused on understanding React components, state management, Context API, conditional rendering and browser localStorage.

## Features

### Admin

* Admin login
* Create and assign tasks to employees
* Add task title, description, date and category
* View all employees
* View employee-wise task counts
* View new, active, completed and failed task counts
* Logout

### Employee

* Employee login
* View personal task statistics
* View assigned tasks
* See task category, date, title and description
* Logout

## Task Types

Tasks are displayed based on their current status:

* New Task
* Active/Accepted Task
* Completed Task
* Failed Task

## How the Project Works

The application has two main types of users:

```text
                    TaskFlow
                       |
              -------------------
              |                 |
            Admin            Employee
              |                 |
        Create Tasks       View Tasks
        Assign Tasks       View Counts
        View Employees     View Details
              |                 |
              ------ localStorage ------
```

The admin creates a task and assigns it to an employee. Employee information and task information are stored in the browser using `localStorage`.

## Technologies Used

* React.js
* JavaScript
* Vite
* Tailwind CSS
* React Context API
* Browser localStorage
* HTML5
* CSS3

## Project Structure

```text
TaskFlow/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Auth/
│   │   │   └── Login.jsx
│   │   │
│   │   ├── Dashboard/
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── EmployeeDashboard.jsx
│   │   │
│   │   ├── TaskList/
│   │   │   ├── AcceptTask.jsx
│   │   │   ├── CompleteTask.jsx
│   │   │   ├── FailedTask.jsx
│   │   │   ├── NewTask.jsx
│   │   │   └── TaskList.jsx
│   │   │
│   │   └── other/
│   │       ├── AllTask.jsx
│   │       ├── CreateTask.jsx
│   │       ├── Header.jsx
│   │       └── TaskListNumbers.jsx
│   │
│   ├── context/
│   │   └── AuthProvider.jsx
│   │
│   ├── utils/
│   │   └── localStorage.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Login Details

The project currently uses demo credentials stored in the application.

### Admin

```text
Email: admin@example.com
Password: 123
```

### Employee

Example employee:

```text
Email: e@e.com
Password: 123
```

Other employee accounts are also available in the sample data inside:

```text
src/utils/localStorage.jsx
```

## Running the Project

First, clone or download the project and open the project folder.

Install the required packages:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide a local URL, usually:

```text
http://localhost:5173
```

Open the URL in a browser to use the application.

## Data Storage

This project does not use a backend database.

The initial employee and task data is stored in:

```text
src/utils/localStorage.jsx
```

The application then stores the data in the browser using `localStorage`.

Because of this, the project is mainly intended as a frontend/student project and the data is limited to the browser where the application is running.

## Main React Concepts Used

While developing this project, I used several basic React concepts:

* Functional components
* `useState`
* `useEffect`
* `useContext`
* React Context API
* Props
* Conditional rendering
* Array mapping
* Form handling
* Local storage
* Component-based UI design

## Project Workflow

### Admin Workflow

```text
Admin Login
     ↓
Admin Dashboard
     ↓
Create Task
     ↓
Assign Task to Employee
     ↓
Employee Task List Updated
     ↓
View Employee Task Counts
```

### Employee Workflow

```text
Employee Login
      ↓
Employee Dashboard
      ↓
View Task Statistics
      ↓
View Assigned Tasks
      ↓
Logout
```

## Future Improvements

The current project is a basic version. Some features that can be added later are:

* Backend with Node.js or Spring Boot
* Database such as MongoDB or PostgreSQL
* Proper user authentication
* Password encryption
* JWT-based authentication
* Employee registration
* Working Accept/Complete/Failed task actions
* Task editing and deletion
* Task search and filtering
* Notifications
* Admin and employee profile management
* Responsive design improvements

## Project Status

This is a student project created to learn and demonstrate React.js and frontend application development.

The current version focuses on employee login, admin task creation, task assignment, task statistics and task display using browser localStorage.

## Author

Developed as a student project using React.js.

