import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './tailwind.css';

import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage.jsx';
import FormsPage from './pages/FormsPage.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/signup',
        element:<SignUpPage/>
      },
      {
        path:'/forms',
        element:<FormsPage/>
      }
    ]
  } 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
</React.StrictMode>
)
