// Import dari library react
import { createBrowserRouter } from "react-router";
import { lazy } from "react";

// Import layout dan protected routes
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoutes from "./ProtectedRoutes";

// Import halaman tanpa lazy loaded
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

// Import halaman dengan lazy loaded
const Overview = lazy(() => import("../pages/dashboard/Overview"));
const Settings = lazy(() => import("../pages/dashboard/Settings"));
const UserDetail = lazy(() => import("../pages/dashboard/UserDetail"));

// createBrowserRouter
const router = createBrowserRouter([
  // Nested Route
  {path: '/', element: <MainLayout/>, children: [
    // Basic + Index Route
    { index: true, element: <Home/>},
    { path: 'about', element: <About/>},
    { path: 'contact', element: <Contact/>},

    // Protected Route
    { element: <ProtectedRoutes/>, children: [
      // Nested route inside nested route
      { path: 'dashboard', element: <DashboardLayout/>, children: [
        // another index route
        { index: true, element: <Overview/>},
        { path: 'settings', element: <Settings/>},
        // Dynamic Route
        { path: 'users/:userID', element: <UserDetail/>}]
      }
    ]},
  ]},
  // Basic Route
  { path: 'login', element: <Login/>},
  { path: '*', element: <NotFound/> }
]);

export default router;