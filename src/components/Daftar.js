import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


const Daftar = () => {

    const [username, setUsername]       = useState('');
    const [email, setEmail]             = useState('');
    const [password, setPassword]       = useState('');
    const [alert, setAlert]             = useState('');
    const [error, setError]             = useState('');

    const changeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
        setError('')
    }

    const changeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
        setError('')
    }

    const changePassword = (e) => {
        const value = e.target.value
        setPassword(value)
        setError('')
    }

    const klikdaftar = () => {
        const data = {
            username : username,
            email : email,
            password : password
        }
        axios.post('http://localhost:3001/daftar', data)
        .then(result => {
            if(result){
                if(result.data){
                    setUsername('')
                    setEmail('')
                    setPassword('')
                    setAlert(result.data.message)
                    setTimeout(()=>{
                        setAlert('')
                    }, 3000)
                }
            }
        })
        .catch(e => {
           setError(e.response.data.message) 
        })
    }

    return(
        <div style={{marginTop: "200px"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <div className="card-body">
                                {
                                    error && (
                                    <div className="alert alert-danger">
                                        <p>{error}</p>
                                    </div>
                                    )
                                }
                                {
                                    alert&&(
                                    <div className="alert alert-primary">
                                        <p>{alert}</p>
                                    </div>
                                    )
                                }
                                <h2>Daftar Akun</h2>
                                <div className="form-group mt-3">
                                    <label>Username</label>
                                    <input type="text" placeholder="Username" className="form-control" value={username} onChange={changeUsername} />
                                </div>

                                <div className="form-group mt-3">
                                    <label>Email</label>
                                    <input type="text" placeholder="Email" className="form-control" value={email} onChange={changeEmail} />
                                </div>

                                <div className="form-group mt-3">
                                    <label>Password</label>
                                    <input type="password" placeholder="Password" className="form-control" value={password} onChange={changePassword} />
                                </div>

                                <div className="row mt-3">
                                    <div className="col-12 col-md-8">
                                        <button className="btn btn-primary" onClick={klikdaftar}>Daftar</button>
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
    )
}

export default Daftar;