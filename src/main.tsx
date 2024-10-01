import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import CurrentWeatherPage from './pages/CurrentWeatherPage/CurrentWeatherPage.tsx'
import client from './data/ApolloClient.ts'


import './index.css'
import 'leaflet/dist/leaflet.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ForecastPage from './pages/ForecastPage/ForecastPage.tsx'
import Layout from './layouts/Layout.tsx'

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
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ApolloProvider>
  </StrictMode>,
)
