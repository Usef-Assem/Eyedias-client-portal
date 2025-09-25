import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import { Router } from 'lucide-react'
import OverviewScreen from './Pages/OverviewScreen'
import CompetitionsScreen from './Pages/CompetitionScreen'
import ResultScreen from './Pages/ResultScreen'
import CompetitionDetailsScreen from './Pages/CompetitionDetailsScreen'
import LoginScreen from './Pages/LoginScreen'

function App() {
  const routers = createHashRouter([
    {path: '/' , element: <Layout /> , children: [
    {index: true , element: <OverviewScreen /> },
    {path: 'Competitions' , element: <CompetitionsScreen /> },
    {path: 'Results' , element: <ResultScreen /> },
    {path: 'CompetitionDetails' , element: <CompetitionDetailsScreen /> },
  ]
},
{path: 'Login' , element: <LoginScreen /> }
  ])
  return (
    <RouterProvider router={routers}></RouterProvider>
  )
}

export default App
