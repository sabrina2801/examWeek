import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout'
import Services from './page/Services'
import CaseStudies from './page/CaseStudies'
import AboutUs from './page/AboutUs'
import Blog from './page/Blog'
import UserDetail from './page/UserDetail';


const router = createBrowserRouter ([
  {
    path:'/',
    element:<Layout/>,
    children: [
      {
        index:true,
        element:<Services/>
      },
      {
        path:"CaseStudies",
        element:<CaseStudies/>
      },
       {
        path:"AboutUs",
        element:<AboutUs/>
      },
       {
        path:"Blog",
        element:<Blog/>
      },
      { path: "user/:id",
       element: <UserDetail /> 
      },
    ]
  }
])





const App = () => {
  return (
    <div >
        <RouterProvider router={router} />
    
    </div>
  )
}

export default App