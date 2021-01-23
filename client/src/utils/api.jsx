import axios from 'axios';

export function getDates() {
    return axios.get("/api/randomdate", data => {
           return data
        }
    )
}

export const getBlogs = () => {
    return axios.get("/api/blogs", data => {
           return data
        }
    )
}

export const postBlogs = (x) => {
    return axios.post("/api/blogs", x)
}