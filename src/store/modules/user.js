//和用户相关的状态管理 

import { createSlice } from '@reduxjs/toolkit'
import { getToken, http, setToken } from '@/utils'
const userStore = createSlice({
  name: 'user',
  // 数据状态
  initialState: {
    token: getToken() || ''
  },
  // 同步修改方法
  reducers: {
    setUserInfo (state, action) {
      state.token = action.payload
       // 存入本地
       setToken(state.token)
    }
  }
})


// 解构出actionCreater
const { setUserInfo } = userStore.actions

// 获取reducer函数
const userReducer = userStore.reducer

// 异步方法封装
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        //1. 发送异步请求
      const res = await http.post('/authorizations', loginForm)
      //2. 提交同步action进行token的存入
      dispatch(setUserInfo(res.data.token))
    }
  }



export { setUserInfo,fetchLogin }

export default userReducer