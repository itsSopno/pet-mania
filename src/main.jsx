import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
  import Router from './Router/Router.jsx'
import Authprobider from './Authprobider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprobider>
    <RouterProvider router={Router}></RouterProvider>
    </Authprobider>
  </StrictMode>,
)
