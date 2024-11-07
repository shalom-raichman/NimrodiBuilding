import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Reception from "./pages/Reception/Reception";
import Floor from "./pages/Floor/Floor";
import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Forbidden from "./pages/Forbidden/Forbidden";

const router = createBrowserRouter([
 //FILL HERE
 {
   path: "/",
   element: <Layout/>,
   children: [
     {
      path: "/forbidden",
      element: <Forbidden/>
     },
     {
      path: "/floor/:index",
      element: <PrivateRoute component={<Floor/>}/>
     },
     {
      path: '/',
      element: <Reception/>
     }
   ]
 },
]);

function App() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
