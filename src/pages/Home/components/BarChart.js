import { useRef, useEffect } from 'react'
import * as echarts from 'echarts'

const BarChart = ({ title,xData, sData, style = { width: '400px', height: '300px' } }) => {
  const chartRef = useRef(null)
  useEffect(() => {
    // 1. 生成实例
    const myChart = echarts.init(chartRef.current)
    // 2. 准备图表参数
    const option = {
        title: {
          text: title
        },
      xAxis: {
        type: 'category',
        data: xData
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: sData,
          type: 'bar'
        }
      ]
    }
    // 3. 渲染参数
    myChart.setOption(option)
  }, [title, sData, xData])
  return <div ref={chartRef} style={style}></div>
}

export { BarChart }