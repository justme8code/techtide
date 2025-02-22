
import axios from 'axios';
import {TECH_TIDE_BASE_URL} from "@/app/api_urls";



export const axiosInstance = axios.create({
    baseURL: `${TECH_TIDE_BASE_URL}`,
    withCredentials: true,
    headers : {
        "Content-Type": "application/json",
    },
    
});
/*// Add a request interceptor to include the token
axiosInstance.interceptors.request.use((config) => {

    /!*const token = getCookie("tech-tide-auth-cookie"); // Your cookie name
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }*!/
    console.log(config);
    return config;
}, (error) => {
    return Promise.reject(error);
});*/



/*axiosInstance.interceptors.response.use(
    (response) => {
        console.log(response);
        return response
    },
    (error) => {
        if (error.message === 'Network Error') {
            return Promise.resolve();
        }

    }
);*/



export const getCookie = (name: string): string | null => {
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
        const [key, value] = cookie.split('=');
        acc[key] = value;
        return acc;
    }, {} as Record<string, string>);

    return cookies[name] || null;
};


