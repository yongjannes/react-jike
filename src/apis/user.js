//用户相关的所有请求

const { http } = require("@/utils");


//1. 登录

export function loginApi(formData) {
    return http({
        url: '/authorizations',
        method: 'POST',
        data: formData
    })
}

// 2. 获取用户信息

export function getProfileAPI() {
    return http({
        url: '/user/profile',
        method: 'GET'
    })
}
