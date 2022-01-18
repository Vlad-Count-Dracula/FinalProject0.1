import axios from "axios";


const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '6abdf669-bff9-4565-b1ba-212bed9248c9',
    },

})


export const usersApi = (currentPage, pageSize) => {
    return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
};

export const unfollowApi = (userId) => {
    return instanse.delete(`follow/${userId}`)
};

export const followApi = (userId) => {
    return instanse.post(`follow/${userId}`)
};

export const login = () => {
    return instanse.get(`auth/me`)
};

export const setUserProfileApi = (userID) => {
    return instanse.get(`profile/` + userID)
};

export const getStatusApi = (userId) => {
    return instanse.get(`profile/status/${userId}`)
};

export const updateStatusApi = (status) => {
    return instanse.put(`profile/status`, {status});
};

export const sendFormLoginData = (email, password, rememberMy) => {
    return instanse.post(`auth/login` , {email, password, rememberMy})
};

export const deleteFormLoginData = () => {
    return instanse.delete(`auth/login`)
};