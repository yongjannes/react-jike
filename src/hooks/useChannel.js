//封装获取频道列表的逻辑

import { getChannelAPI } from "@/apis/article"
import { useState,useEffect} from "react"

function useChannel(){
    // 1. 获取频道列表所有的逻辑
      // 频道列表
      const [channels, setChannels] = useState([])

      // 调用接口
      useEffect(() => {
          async function fetchChannels() {
              const res = await getChannelAPI()
              setChannels(res.data.channels)
          }
          fetchChannels()
      }, [])
    // 2. 将组件中要用到的数据return出去
      return {
          channels
      }
     
}

export  {useChannel};