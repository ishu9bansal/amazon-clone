import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setCurrentUser } from '../slices/authSlice';
import { useState } from 'react';

export function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(setCurrentUser({ username }));
        navigate('/profile');
    };
    return (
        <>
            <form className="form-container" onSubmit={handleLogin}>
                <h1 className="form-heading">Login</h1>
                <div className="input-container">
                    <label className="input-label">Username</label>
                    <input type="text" className="input-field" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input-container">
                    <label className="input-label">Password</label>
                    <input type="password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type="submit" value="Login" className="submit-button" />
            </form>

            <div className="auth-footer">
                Don't have an account? <Link to="/register">Register</Link>
            </div>
        </>
    );
}

export function Register() {
    return (
        <>
            <form className="form-container">
                <h1 className="form-heading">Register</h1>
                <div className="input-container">
                    <label className="input-label">Username</label>
                    <input type="text" className="input-field" />
                </div>
                <div className="input-container">
                    <label className="input-label">Password</label>
                    <input type="password" className="input-field" />
                </div>
                <div className="input-container">
                    <label className="input-label">Confirm Password</label>
                    <input type="password" className="input-field" />
                </div>
                <input type="submit" value="Register" className="submit-button" />
            </form>

            <div className="auth-footer">
                Already have an account? <Link to="/login">Login</Link>
            </div>
        </>
    );
}