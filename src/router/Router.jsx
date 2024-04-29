import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllTouristSpot from "../pages/AllTouristSpot";
import AddTouristSpot from "../pages/AddTouristSpot";
import MyList from "../pages/MyList";
import TouristSpotDetails from "../components/TouristSpotDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateTouristSpot from "../pages/UpdateTouristSpot";
import AddCountry from "../pages/AddCountry";
import SpecificCountryCards from "../components/SpecificCountryCards";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("https://assignment-10-server-rho-drab.vercel.app/touristSpots")
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/allTouristSpot",
                element: <AllTouristSpot />
            },
            {
                path: "/addTouristSpot",
                element: <PrivateRoute>
                    <AddTouristSpot />
                </PrivateRoute>
                
            },
            {
                path: "/myList",
                element: <PrivateRoute>
                    <MyList />
                </PrivateRoute>
            },
            {
                path: "/touristSpots/:id",
                element: <PrivateRoute>
                    <TouristSpotDetails />
                </PrivateRoute>,
                loader: () => fetch(`https://assignment-10-server-rho-drab.vercel.app/touristSpots`)
            },
            {
                path: "/updateTouristSpot/:id",
                element: <PrivateRoute>
                    <UpdateTouristSpot />
                </PrivateRoute>,
                loader: () => fetch(`https://assignment-10-server-rho-drab.vercel.app/touristSpots`)
            },
            {
                path: "/addCountry",
                element: <PrivateRoute>
                    <AddCountry />
                </PrivateRoute>
                
            },
            {
                path: "/country/:countryName",
                element: <SpecificCountryCards />,
                loader: () => fetch(`https://assignment-10-server-rho-drab.vercel.app/touristSpots`)
            },
        ]
    }
])