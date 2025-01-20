import { useDispatch } from "react-redux";
import { setCartItems } from "./slices/cartSlice";
import axios from "axios";
import { useState } from "react";

function axiosAuthConfig(method, token, url, body) {
    return {
        method: method,
        url: url,
        data: body,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
}

export function useRetryCall(method) {
    const [loading, setLoading] = useState(false);
    const call = async (url, body) => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            return await axios.request(axiosAuthConfig(method, token, url, body));
        } catch (err) {
            const errorMessage = err?.response?.data?.error;
            if (errorMessage !== 'jwt expired') {
                throw err;
            }
            const refreshToken = localStorage.getItem('refreshToken');
            const response = await axios.post('http://localhost:5001/token', { token: refreshToken });
            const { token: newToken } = response.data;
            localStorage.setItem('token', newToken);
            return await axios.request(axiosAuthConfig(method, newToken, url, body));
        } finally {
            setLoading(false);
        }
    }
    return [loading, call];
}

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
        }).catch(err => {
            const errorMessage = err?.response?.data?.error;
            if (errorMessage !== 'jwt expired') {
                console.error(err);
            } else {
                const refreshToken = localStorage.getItem('refreshToken');
                axios.post('http://localhost:5001/token', { token: refreshToken })
                    .then(response => {
                        const { token: newToken } = response.data;
                        localStorage.setItem('token', newToken);
                        axios.patch(url, body, {
                            headers: {
                                Authorization: `Bearer ${newToken}`
                            }
                        }).then(response => {
                            const items = response?.data?.cart || [];
                            dispatch(setCartItems(items));
                        }).catch(err => console.error(err));
                    }).catch(err => console.error(err));
            }
        });
    }
    return makePatchRequest;
}
