import { RouterProvider } from 'react-router-dom'
import './App.css'
import './assets/fonts.css'
import router from './router/AppRouter'

function App() {

  return (
    <>
    <RouterProvider router={router} /> 
    </>
  )
}

export default App
