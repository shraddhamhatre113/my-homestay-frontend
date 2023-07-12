import "bootstrap/dist/css/bootstrap.css";

import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import "bootstrap-slider/dist/css/bootstrap-slider.min.css";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";

import PropertiesList from "./pages/properties/properties";

import Footer from "./components/footer/Footer";
import Signin from "./pages/signin/Signin";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile.jsx";
import { ProfileProvider } from "./contexts";
import Transactions from "./pages/transactions/Transactions";
import Reservation from "./pages/reservation/Reservation";
import BookingRequest from "./pages/booking_request/BookingRequest";
import ViewProperty from "./pages/viewProperty/viewProperty";
import Payment from './pages/payments/payments';



function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signin",
          element: <Signin />,
        },
        {
          path: "/register",
          element: <Register />,
        },

        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/reservations",
          element: <Reservation />,
        },
        {
          path: "/transactions",
          element: <Transactions />,
        },
        {
          path: "/booking-requests",
          element: <BookingRequest />,
        },
        {
          path: "/properties",
          element: <PropertiesList />,
        },
        {
          path: "/properties/:propertyId",
          element: <ViewProperty/>,
        },
        {
          path:"/payments",
          element:<Payment/>
        },
      ],
    },
  ]);
  return (
    <ProfileProvider>
      <RouterProvider router={router} />
    </ProfileProvider>
  );
}

export default App;
