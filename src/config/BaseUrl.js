
import axios from "axios";

import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

axios.interceptors.request.use(
    function (config) {
        if (config) {
            config.url = process.env.REACT_APP_API_URL + config.url;
            return config;
        }
        else {
            const token = localStorage.getItem("accesstoken");
            config.url = process.env.REACT_APP_API_URL + config.url;
            var decoded = jwt_decode(token);

            console.log("kalai",decoded)
            if (Date.now() >= decoded.exp * 1000) {
                console.log(decoded,"decoded")
                alert("kalai")
                localStorage.removeItem("accesstoken");
                localStorage.removeItem("id");
                window.location.assign("/");
            }

            config.headers = {
                ...config.headers,
                "Content-Type": "application/json",
                Authorization: JSON.parse(token)
            };
            config.withCredentials = true;
            return config;
        }

    },
    function (error) {
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        if (error.response.status === 401) {
            return <Navigate
                to={{
                    pathname: "/"
                }}
            />
        } else {
            return Promise.reject(error);
        }
    }
);

const axiosConfig = axios;

export default axiosConfig;





