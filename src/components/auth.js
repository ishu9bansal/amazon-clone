import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { setCurrentUser } from "../slices/authSlice";

export function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(setCurrentUser({ username: "fake-user" }));
        navigate('/profile');
    }
    return (
        <>
            <form className="form-container" onSubmit={handleLogin}>
                <h1 className="form-heading">Login</h1>
                <div className="input-container">
                    <label className="input-label">Username</label>
                    <input type="text" className="input-field" />
                </div>
                <div className="input-container">
                    <label className="input-label">Password</label>
                    <input type="password" className="input-field" />
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
