import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages
import Home from './routes/Home.tsx'
import Repos from './routes/Repos.tsx'

const router = createBrowserRouter([ //configurando o router
  {
    path: "/",//primeiro coloca o componente principal que vai abarcar todas as outras
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/repos/:username",
        element: <Repos/>

      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
