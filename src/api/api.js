import axios from "axios"


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": '5edbe232-6099-4ee4-9271-b8f81afb7d19'
    }
})

export const usersAPI = {
    getUsers(curentPage, pageSize, isFollowed, searchInputValue) {
        return (
            instance.get(`users?page=${curentPage}&count=${pageSize}${isFollowed !== 'null' ? `&friend=${isFollowed}` : ''}${searchInputValue ? `&term=${searchInputValue}` : ''}`)
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
            .then(response => {
                return response.data
            })
    },
    getUsersStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    setUsersStatus(status) {
        return instance.put('profile/status', { status })
            .then(response => response.data)
    },
    setNewProfilePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put('profile/photo', formData)
            .then(response => response.data)
    },
    setNewUserInfo(data) {
        let { aboutMe, lookingForAJob, lookingForAJobDescription, website, github, twitter, instagram, userId, fullName } = data;
        return instance.put('profile', { fullName, aboutMe, userId, lookingForAJob, lookingForAJobDescription, Contacts: { github, website, twitter, instagram } })
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
    },
    loginingProces(data) {
        debugger
        return instance.post('auth/login', { password: data.password, email: data.email, rememberMe: data.rememberMe, captcha: data.captcha })
            .then(response => response.data)
    },
    logoutProces() {
        return instance.delete('auth/login')
            .then(response => response.data)
    },
    getChaptchaURL() {
        return instance.get('/security/get-captcha-url')
            .then(response => response.data)
    }
}
