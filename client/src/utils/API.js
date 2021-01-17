import axios from 'axios';

export default {
    registerUser: function (data) {
        return axios.get("/api/user/new", data)
    }
}