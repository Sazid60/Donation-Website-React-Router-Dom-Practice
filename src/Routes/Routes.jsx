
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement : <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/donation",
                element: <div>This Is Donation Page </div>,
            },
            {
                path: "/statistics",
                element: <div>This is Statistics Page</div>,
            },
            {
                path: "/donation-details/:id",
                element: <DonationDetails />
            },
        ]
    },

]);

export default router