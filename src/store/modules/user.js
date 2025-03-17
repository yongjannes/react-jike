//和用户相关的状态管理 

import { createSlice } from '@reduxjs/toolkit'
import { clearToken, getToken, http, setToken } from '@/utils'
const userStore = createSlice({
  name: 'user',
  // 数据状态
  initialState: {
    token: getToken() || '',
    userInfo: {}
  },
  // 同步修改方法
  reducers: {
    setUserToken(state, action) {
      state.token = action.payload
      // 存入本地
      setToken(state.token)
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
    clearUserInfo (state) {
      state.token = ''
      state.userInfo = {}
      clearToken()
    }

  }
})


// 解构出actionCreater
const { setUserToken, setUserInfo,clearUserInfo } = userStore.actions

// 获取reducer函数
const userReducer = userStore.reducer

// 异步方法封装
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    //1. 发送异步请求
    const res = await http.post('/authorizations', loginForm)
    //2. 提交同步action进行token的存入
    dispatch(setUserToken(res.data.token))
  }
}

const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await http.get('/user/profile')
    dispatch(setUserInfo(res.data))
  }
}


export { fetchLogin, fetchUserInfo,clearUserInfo }

export default userReducer