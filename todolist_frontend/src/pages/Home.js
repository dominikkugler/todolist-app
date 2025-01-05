import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all');

    const { id } = useParams();

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const result = await axios.get("http://localhost:8080/tasks");
        const sortedTasks = result.data.sort((a, b) => a.done - b.done);
        setTasks(sortedTasks);
    };

    const deleteTask = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
            await axios.delete(`http://localhost:8080/task/${id}`);
            loadTasks();
        }
    };

    const toggleTaskStatus = async (task) => {
        task.done = !task.done;
        await axios.put(`http://localhost:8080/task/${task.id}`, task);
        loadTasks();
    };

    const filteredTasks = tasks
        .filter(task =>
            task.name.toLowerCase().includes(search.toLowerCase())
        )
        .filter(task => {
            if (filter === 'completed') return task.done;
            if (filter === 'incomplete') return !task.done;
            return true; 
        });

        return (
            <div className="container">
                <div className="py-4">
                    {/* Search Bar */}
                    <div className="mb-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search tasks by name"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
        
                    {/* Filter Buttons */}
                    <div className="mb-4 d-flex justify-content-center">
                        <button
                            className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
                            onClick={() => setFilter('all')}
                        >
                            All
                        </button>
                        <button
                            className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
                            onClick={() => setFilter('completed')}
                        >
                            Done
                        </button>
                        <button
                            className={`btn ${filter === 'incomplete' ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setFilter('incomplete')}
                        >
                            Not done yet
                        </button>
                    </div>
        
                    {/* Task List or No Tasks Message */}
                    {filteredTasks.length > 0 ? (
                        <div className="list-group">
                            {filteredTasks.map((task, index) => (
                                <div
                                    key={index}
                                    className="list-group-item d-flex justify-content-between align-items-center shadow-sm mb-2"
                                >
                                    <div className="d-flex align-items-start w-100">
                                        <button
                                            className="btn btn-link p-0 me-3"
                                            onClick={() => toggleTaskStatus(task)}
                                            style={{ fontSize: "1.5rem" }}
                                        >
                                            <i
                                                className={
                                                    task.done
                                                        ? "fas fa-check-square text-success"
                                                        : "far fa-square text-secondary"
                                                }
                                            ></i>
                                        </button>
                                        <div className="flex-grow-1">
                                            <h5
                                                className={
                                                    task.done ? "text-decoration-line-through text-muted mb-1" : "mb-1"
                                                }
                                                style={{ lineHeight: "1.2" }}
                                            >
                                                {task.name}
                                            </h5>
                                            <p
                                                className="mb-0 text-muted"
                                                style={{ fontSize: "0.9rem", lineHeight: "1.2" }}
                                            >
                                                {task.description}
                                            </p>
                                        </div>
                                    </div>
        
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-light dropdown-toggle"
                                            type="button"
                                            id={`dropdownMenuButton${index}`}
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="fas fa-ellipsis-v"></i>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton${index}`}>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    to={`/edit/${task.id}`}
                                                >
                                                    Edit
                                                </Link>
                                            </li>
                                            <li>
                                                <button
                                                    className="dropdown-item text-danger"
                                                    onClick={() => deleteTask(task.id)}
                                                >
                                                    Delete
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center mt-4">
                            <p className="text-muted">There are no tasks. Add some!</p>
                        </div>
                    )}
        
                    {/* Add Task Button */}
                    <div className="text-center mt-4">
                        <Link className="btn btn-primary px-4" to="/add">
                            Add Task
                        </Link>
                    </div>
                </div>
            </div>
        );
        
}
