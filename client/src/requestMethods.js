import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/";
const BASE_URL = 'http://https://wejk.herokuapp.com/api'


// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzA2NmM3ZTc3NTI1ZmJjMDA1ODk4NCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDg4NzM2ODYsImV4cCI6MTY0OTEzMjg4Nn0.1vxIrT3N0CDzjksmlUuYXfXb3J9JLdzSga6CtYmohj0"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
