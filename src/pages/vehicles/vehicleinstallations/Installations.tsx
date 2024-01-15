import Installationdata from '../../../components/datatable/installationdata/Installationdata';
import Navbar from '../../../components/navbar/Navbar';
import './installation.scss';

const Installations = () => {
  return (
    <div className="installations">
    <Navbar/>
    <div className="installationhead">
            <h1>Installations</h1>
         
        </div>
        <Installationdata/>
    </div>
  )
}

export default Installations