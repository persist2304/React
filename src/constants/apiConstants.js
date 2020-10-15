import axios from 'axios';
// User 相關的 api
const userRequest = axios.create({
    baseURL: 'http://localhost:8888'
})
// User 相關的 api
export const apiUserRegister = data => userRequest.post('/adduser', data);
export const ACCESS_TOKEN_NAME = 'login_access_token';
