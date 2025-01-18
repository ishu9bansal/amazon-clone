import { Link } from "react-router-dom";
import { NavLayout } from "./navbar";
import { useSelector } from "react-redux";

function Profile() {
    const username = useSelector(state => state.auth.currentUser?.username);
    return <>
        <h1>User Profile</h1>
        <h2>Hi {username}</h2>
        <div>Click to <Link to={'/login'}>Logout</Link></div>
    </>
}

export default function () {
    return <NavLayout>
        <Profile />
    </NavLayout>;
}