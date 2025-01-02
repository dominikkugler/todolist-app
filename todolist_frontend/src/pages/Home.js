import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState('');

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

    const checkTask = async (task) => {
        task.done = !task.done;
        await axios.put(`http://localhost:8080/task/${task.id}`, task);
        loadTasks();
    };

    const filteredTasks = tasks.filter(task =>
        task.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='container'>
            <div className='py-4'>
                <div className="mb-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search tasks by name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTasks.map((task, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{task.name}</td>
                                <td>{task.description}</td>
                                <td>
                                    <button className='btn btn-primary mx-1' onClick={() => checkTask(task)}>
                                        <i className={task.done ? "fas fa-check-circle" : "far fa-circle"}></i>
                                    </button>
                                    <Link 
                                        className="btn btn-outline-primary mx-1" 
                                        to={`/edit/${task.id}`}>
                                        <i className="fas fa-edit"></i>
                                    </Link>
                                    <button 
                                        className="btn btn-danger mx-1" 
                                        onClick={() => deleteTask(task.id)}>
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Link className='btn btn-primary px-4' to="/add">Add Task</Link>
            </div>
        </div>
    );
}
