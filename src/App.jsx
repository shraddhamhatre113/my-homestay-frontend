import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home"
import Hotels from "./pages/hotels/Hotels"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Account from "./pages/account/Account"
import Reservations from "./pages/reservations/Reservations"
import Notifications from "./pages/notifications/Notifications"
import "./App.css"







import Footer from "./components/footer/Footer"
function App() {

  const Layout = ()=>{
    return(
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
        path:"/hotels",
        element:<Hotels/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/account",
        element:<Account/>
      },
      {
        path:"/reservations",
        element:<Reservations/>
      },
      {
        path:"/notifications",
        element:<Notifications/>
      },
    ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
