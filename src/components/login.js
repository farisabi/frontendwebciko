import React, { useState, Fragment } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const [username, setUsername]   = useState('');
    const [password, setPassword]   = useState('');
    const [redirect, setRedirect]   = useState(false);
    const [error, setError]         = useState('');

    const changeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
        setError('')
    }

    const changePassword = (e) => {
        const value = e.target.value
        setPassword(value)
        setError('')
    }

    const kliklogin = () => {
        const data = {
            username : username,
            password : password
        }
        axios.post('http://localhost:3001/login', data)
        .then(result => {
            if(result){
                localStorage.setItem('tkn', result.data.token)
                setRedirect(true)
            }
        })
        .catch(e => {
            setError(e.response.data.message)
        })
    }

    return (
        <Fragment>
            {
                redirect && (
                    <Navigate to='/dashboard' />
                )

            }
            <div style={{marginTop: "200px"}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card p-4">
                                {
                                    error &&(
                                        <div className = "alert alert-danger">
                                            <p>{error}</p>
                                        </div>
                                    )
                                }
                                <div className="card-body">
                                    <h2>LOGIN</h2>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" placeholder="Username" className="form-control" value={username} onChange={changeUsername} />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label>Password</label>
                                        <input type="password" placeholder="Password" className="form-control" value={password} onChange={changePassword} />
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-12 col-md-8">
                                            <button className="btn btn-primary" onClick={kliklogin}>Login</button>
                                            <Link to='/'>
                                                <button className="btn btn-danger mx-3">Back</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Login