import React from 'react'
import Crud from './components/Crud'
import { Outlet ,RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Body from './components/Body'
import SellProduct from './components/SellProduct'
import Home from './components/Home'
import { FirebaseContext } from './store/FirebaseContext'
import app from './firebase/config'



const addRouter = createBrowserRouter([

  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path:'/sellProduct',
        element:<SellProduct/>
      }

    ]
  }

])


const App = () => {
  return (
    <FirebaseContext.Provider value={{app}}>
    <RouterProvider router={addRouter}>
 
     <Body/>
    
    </RouterProvider>
    </FirebaseContext.Provider>
  )
}

export default App