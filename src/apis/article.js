// 封装和文章相关的接口函数

import { http } from "@/utils"

// 1. 获取频道列表
export function getChannelAPI () {
  return http({
    url: '/channels',
    method: 'GET'
  })
}
