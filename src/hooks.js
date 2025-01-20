import { useDispatch } from "react-redux";
import { setCartItems } from "./slices/cartSlice";
import axios from "axios";

export function usePatchCall() {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    const makePatchRequest = (url, body) => {
        axios.patch(url, body, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            const items = response?.data?.cart || [];
            dispatch(setCartItems(items));
        }).catch(err => console.error(err));
    }
    return makePatchRequest;
}
