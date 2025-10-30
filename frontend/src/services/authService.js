import axios from "axios";

export const register = async (credentials) => {
    const reigsterUrl = "http://localhost:3000/api/auth/register"
    const { email, password } = credentials

    const response = await axios.post(reigsterUrl, { email, password });
    return response

}

export const login = async (credentials) => {
    const loginUrl = "http://localhost:3000/api/auth/login"
    const { email, password } = credentials

    const response = await axios.post(loginUrl, { email, password });

    return response

}