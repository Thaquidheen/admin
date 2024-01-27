import './home.scss';
import { LineChart } from '@mui/x-charts/LineChart';
const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <h4>All Users</h4>
        <div className='users'></div>
      </div>
      <div className="box box2">
        <h4 >Total Active Subscription  </h4>
        <div className='tasub'>
          <div className="cardmain">
            <h3>53</h3>
          </div>
          <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />
        </div>
     
      </div>
      <div className="box box3">
        <h4>Total Active Vehicles</h4>
      </div>
      <div className="box box4">
        
      </div>
      <div className="box box5">
      <h4>Total Active devices</h4>
      <div className='tasub'>
          <div className="cardmain">
            <h3>53</h3>
          </div>
          <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />
        </div>

      </div>
      <div className="box box6">
      <h4>Total Active Accounts</h4>
      </div>
      <div className="box box7">Box7</div>
      <div className="box box8">Box8</div>
    </div>
  )
}

export default Home