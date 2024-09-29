import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import CurrentWeatherPage from './pages/CurrentWeatherPage/CurrentWeatherPage.tsx'
import NavBar from './components/NavBar/Navbar.tsx'
import client from './data/ApolloClient.ts'


import './index.css'
import 'leaflet/dist/leaflet.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ForecastPage from './pages/ForecastPage/ForecastPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <CurrentWeatherPage />,
  },
  {
    path: "/forecast",
    element: <ForecastPage />,
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <NavBar />
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>,
)
