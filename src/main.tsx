import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/routes.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// create new QueryClient
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} /> 
      </QueryClientProvider>
  </React.StrictMode>,
)
