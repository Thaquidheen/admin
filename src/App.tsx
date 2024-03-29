import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import User from "./pages/users/User";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import './styles/global.scss';

function App() {

  const Layout =()=>{
    return(
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/user",
          element:<User/>
        },
      ]
    },
    {
      path:"/login",
      element:<Login/>
    }
  ]);

  return   <RouterProvider router={router} />
}

export default App
