import { Link, useNavigate } from "react-router-dom";
import { NavLayout } from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { removeCurrentUser } from "../slices/authSlice";

function Profile() {
    const username = useSelector(state => state.auth.currentUser?.username);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(removeCurrentUser());
        navigate('/login');
    }
    return <>
        <h1>User Profile</h1>
        <h2>Hi {username}</h2>
        <div>Click to <a onClick={handleLogout}>Logout</a></div>
    </>
}

export default function () {
    return <NavLayout>
        <Profile />
    </NavLayout>;
}