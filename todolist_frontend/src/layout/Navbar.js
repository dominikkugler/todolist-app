import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-2">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Todo App</a>
                <Link className="btn btn-outline-light" to="/add">
                  Add Task
              </Link>
            </div>
        </nav>
    </div>
  )
}
