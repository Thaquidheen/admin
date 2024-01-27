import Home from "./pages/home/Home"
import {
 BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Menu from "./components/menu/Menu";

import './styles/global.scss';
import AllVehicles from "./pages/allvehicles/AllVehicles";
import './app.scss'
import Installations from "./pages/vehicles/vehicleinstallations/Installations";
import Device from "./pages/devices/Device";
import ManageSubscription from "./pages/subscriptions/managesubscription/ManageSubscription";
import Ordersubscription from "./pages/subscriptions/ordersubscription/Ordersubscription";
function App() {
  return(
    <BrowserRouter>
    <div className="App" >
      <Routes>
        <Route
          path="/*"
          element={
            <div>
              <Menu />
  
              <div className="main-content">
                <Routes>
                <Route path="/" element={<Home/>} />
                  <Route path="/allvehicles" element={<AllVehicles/>} />
                  <Route path="/installations" element={<Installations/>} />
                  <Route path="/devices" element={<Device/>} />
                  <Route path="/managesubscription" element={<ManageSubscription/>} />
                  <Route path="/ordersubscription" element={<Ordersubscription/>} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  </BrowserRouter>
  );

        }



export default App
