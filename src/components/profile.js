import { Link } from "react-router-dom";
import { NavLayout } from "./navbar";

function Profile() {
    return <>
        <h1>User Profile</h1>
        <div>Click to <Link to={'/login'}>Logout</Link></div>
    </>
}

export default function () {
    return <NavLayout>
        <Profile />
    </NavLayout>;
}