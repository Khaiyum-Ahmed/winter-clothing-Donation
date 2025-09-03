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
    path: "/donationCampaigns",
    element: <DonationCampaign></DonationCampaign>
  },
  {
    path:"donationCard/:id",
    element:<DonationDetails></DonationDetails>,
    loader: ()=> fetch('data.json')
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
    <RouterProvider router={router} />
  </StrictMode>,
)
