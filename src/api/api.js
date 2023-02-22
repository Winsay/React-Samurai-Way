import axios from "axios"


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": '5edbe232-6099-4ee4-9271-b8f81afb7d19'
    }
})

export const usersAPI = {
    getUsers(curentPage, pageSize) {
        return (
            instance.get(`users?page=${curentPage}&count=${pageSize}`)
                .then(response => {
                    return (
                        response.data)
                })
        )
    },
    followChange: {
        followedCheck(id) {
            return instance.get(`follow/${id}`)
                .then(response => response.data)
        },
        following(id) {
            return instance.post(`follow/${id}`)
                .then(response => response.data)
        },
        unfollowing(id) {
            return instance.delete(`follow/${id}`)
                .then(response => response.data)
        }
    },
}


export const profileAPI = {
    setUsersProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getUsersStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    setUsersStatus(status) {
        return instance.put('profile/status', { status })
            .then(response => response.data)
    }

}

export const authAPI = {
    auth() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    }
}