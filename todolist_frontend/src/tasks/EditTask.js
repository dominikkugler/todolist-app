import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function EditTask() {
    let navigate = useNavigate();

    const {id} = useParams();

    const [task, setTask] = useState({
        name: "",
        description:"",
        done: false
    })

    const {name, description} = task;

    const onInputChange = (e) => {
        setTask({...task, [e.target.name]: e.target.value})
    };

    useEffect(() => {
        LoadTask();
    },[]);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (name === "") {
            alert("Name is required");
            return;
        }
        await axios.put(`http://localhost:8080/task/${id}`, task);
        navigate("/");
    };

    const LoadTask = async () => {
        const result = await axios.get(`http://localhost:8080/task/${id}`);
        setTask(result.data);
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-2 mt-2 shadow'>
                    <h2 className='text-center m-4'>Edit a task</h2>
                    <form onSubmit={e => onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Name</label>
                        <input 
                            type={'text'} 
                            className='form-control' 
                            placeholder='Enter the name' 
                            id='name' 
                            name='name' 
                            value={name} 
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='description' className='form-label'>Description</label>
                        <input 
                            type={'text'} 
                            className='form-control' 
                            placeholder='Enter the description (optional)' 
                            id='description' 
                            name='description' 
                            value={description} 
                            onChange={(e)=>onInputChange(e)} 
                        />
                    </div>

                    <button type="submit" className='btn btn-primary'>Edit task</button>
                    <Link type="submit" className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                    </form>
                </div>
                
            </div>
        </div>
    )
}
