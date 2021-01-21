import axios from 'axios';

export default {
    registerUser: function (data) {
        return axios.post("/api/data/new", data)
    }
}