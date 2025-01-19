import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "./slices/cartSlice";
import axios from "axios";

export function usePatchCall() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.currentUser?.token);

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
