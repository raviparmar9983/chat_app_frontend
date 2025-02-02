import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLayout from './Layouts/AuthLayout/AuthLayout.jsx';
import AppLayout from './Layouts/AppLayout/AppLayout.jsx';
import Chat from './components/Chat/Chat.jsx';
import Login from './components/Login/Login.jsx'
import SignUp from './components/SignUp/SignUp.jsx';
const route = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      }
    ]
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/chat',
        element: <Chat />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={route} >
    <App />
  </RouterProvider>
)
