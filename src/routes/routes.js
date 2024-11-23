import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Information } from "../Pages/Information";
import { RootLayout } from "../Pages/RootLayout";

export const routes = createBrowserRouter([
  {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                },
    
            {
            path: "/information",
            element: <Information/>,
            },

        ]

      },

    

]);

