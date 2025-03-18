// 封装和文章相关的接口函数

import { http } from "@/utils"

// 1. 获取频道列表
export function getChannelAPI () {
  return http({
    url: '/channels',
    method: 'GET'
  })
}

// 2. 提交文章表单

export function createArticleAPI (data) {
    return http({
      url: '/mp/articles?draft=false',
      method: 'POST',
      data
    })
  }

  // 获取文章列表

export function getArticleListAPI (params) {
    return http({
      url: "/mp/articles",
      method: 'GET',
      params
    })
  }