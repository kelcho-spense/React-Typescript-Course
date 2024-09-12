import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Contact from './pages/Contact.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Layout from './pages/Layout/Layout.tsx';
import MainPanelItem_one from './components/dashboard/MainPanelItem_One.tsx';
import MainPanelItem_Two from './components/dashboard/MainPanelItem_Two.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Login from './pages/Login.tsx';
import Signup from './pages/Signup.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Use Layout for all pages
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'contact', element: <Contact /> },
      {
        path: 'login',
        element: <Login />,
        errorElement: <ErrorPage />
      },
      {
        path: 'signup',
        element: <Signup />,
        errorElement: <ErrorPage />
      }
    ]

  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      { path: '', element: <MainPanelItem_one /> },
      { path: 'item-1', element: <MainPanelItem_Two /> },
      { path: 'item-2', element: <MainPanelItem_one /> },
      { path: 'item-3', element: <MainPanelItem_Two /> },
    ]
  },
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
