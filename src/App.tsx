import Home from "./pages/home/Home"
import {
 BrowserRouter,
  RouterProvider,
  Outlet,
  Link,
  Routes,
  Route,
} from "react-router-dom";
import User from "./pages/users/User";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
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

//   const Layout =()=>{
//     return(
//       <div className="main">
//         <Navbar/>
//         <Menu/>
//         {/* <div className="container">
//           <div className="menuContainer">
//             <Menu/>
//           </div>
//           <div className="contentContainer">
//             <Outlet/>
//           </div>
//         </div> */}
//         {/* <Footer/> */}
//       </div>
//     )
//   }

//   const router = createBrowserRouter([
//     {
//       path:"/",
//       element:<Layout/>,
//       children:[
//         {
//           path:"/",
//           element:<Home/>
//         },
//         {
//           path:"/user",
//           element:<User/>
//         },
//         {
//           path:"/allvehicles",
//           element:<AllVehicles/>
//         },
//       ]
//     },
//     {
//       path:"/login",
//       element:<Login/>
//     }
//   ]);

//   return   <RouterProvider router={router} />
// }

export default App
