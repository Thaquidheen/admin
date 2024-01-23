import Devicedata from "../../components/datatable/devicedata/Devicedata"
import Navbar from "../../components/navbar/Navbar"
import './device.scss'

const Device = () => {
  return (
    <div className="devices">
              <Navbar/>
              <div className="deviceinfo">
            <h1>Devices</h1>
            <div>
            <button>Add new User </button>
            <button>Bulk Upload </button>
            </div>
        </div>
        <Devicedata/>
    </div>
  
  )
}

export default Device