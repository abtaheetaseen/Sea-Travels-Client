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

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("http://localhost:3000/touristSpots")
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
                element: <AddTouristSpot />
            },
            {
                path: "/myList",
                element: <MyList />
            },
            {
                path: "/touristSpots/:id",
                element: <TouristSpotDetails />,
                loader: () => fetch(`http://localhost:3000/touristSpots`)
            }
        ]
    }
])