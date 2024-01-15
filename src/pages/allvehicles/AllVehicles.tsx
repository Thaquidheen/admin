
import Allvehiclesdata from '../../components/datatable/Allvehiclesdata';
import Navbar from '../../components/navbar/Navbar';
import './allvehicles.scss';

const AllVehicles = () => {
  return (
    <div className="allvehicles">
      <Navbar/>
        <div className="info">
            <h1>All Vehicles</h1>
            <div>
            <button>Add new User </button>
            <button>Bulk Upload </button>
            </div>
           
        </div>
        <Allvehiclesdata/>
    </div>
  )
}

export default AllVehicles