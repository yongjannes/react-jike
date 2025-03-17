import { BarChart } from "./components/BarChart"


const Home = () => {
 
  return (
    <div>
     <BarChart
        title="前端框架热度"
        xData={['Vue', 'React', 'Angular']}
        sData={[2000, 5000, 1000]} />

      <BarChart
        title="后端框架热度"
        xData={['Vue', 'React', 'Angular']}
        sData={[200, 500, 100]}
        style={{ width: '500px', height: '400px' }} />
    </div >
  )
}

export default Home