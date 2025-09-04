import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import AuthLayouts from './Components/AuthLayouts';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ErrorPage from './Pages/ErrorPage';
import DonationCampaign from './Pages/DonationCampaign';
import DonationDetails from './Pages/DonationDetails';
import DonationProvider from './Provider/DonationProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard';
import FAQ from './Components/FAQ';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "",
        element: <Navigate to="/"></Navigate>
      },

    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute>
      <Dashboard></Dashboard>
    </PrivateRoute>
  },
  {
    path: "/donationCampaigns",
    element: <DonationCampaign></DonationCampaign>
  },
  {
    path: "donationCard/:id",
    element: <PrivateRoute><DonationDetails></DonationDetails></PrivateRoute>,
    loader: () => fetch('data.json')
  },
  {
    path: "/auth",
    element: <AuthLayouts></AuthLayouts>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>
      },
      {
        path: "/auth/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <DonationProvider>
      <RouterProvider router={router} />
    </DonationProvider>

  </StrictMode>,
)
