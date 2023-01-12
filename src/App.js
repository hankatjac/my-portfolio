import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Footer from "./components/Footer";



const Layout = () => {
  return (
    <>
      <Menu />
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },

]);

function App() {
  return (
    <div className="app">
    
        <RouterProvider router={router} />
   
    </div>
  );
}

export default App;
