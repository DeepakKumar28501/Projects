import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Githhub from './components/Github/Githhub.jsx'

// it is first way to create router component 
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {path:'/',element:<Home/>},
//       {path:'about',element:<About/>},
//       {path:'contact',element:<Contact/>}
//     ]
//   }
// ])


// second way 
const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:id' element={<User/>}/> {/*here :id is read urlValue that i pass and that parameter is accesible entire components*/}
    <Route 
    // loader={} 
    // can fetch data on hover the cursur that is more faster then useeffect
    path='github' 
    element={<Githhub/>}/>
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
