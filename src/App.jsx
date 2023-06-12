import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home"
import Hotels from "./pages/hotels/Hotels";
import Footer from "./components/footer/Footer"
import Signin from "./pages/signin/Signin";
import Register from "./pages/register/Register"


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
        path:"/signin",
        element:<Signin/>

      },
      {
        path:"/register",
        element:<Register/>
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
