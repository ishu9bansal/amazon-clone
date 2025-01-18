import { Link } from "react-router-dom"

export function Login() {
    return <>
        <h1>Login</h1>
        <div>Go to <Link to={'/register'}>Register</Link></div>
    </>
}

export function Register() {
    return <>
        <h1>Register</h1>
        <div>Go to <Link to={'/login'}>Login</Link></div>
    </>
}