import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import NavBar from './components/navBar/Navbar.tsx'
import client from './data/ApolloClient.ts'
import App from './App.tsx'

import './index.css'
import 'leaflet/dist/leaflet.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <NavBar />
      <App />
    </ApolloProvider>
  </StrictMode>,
)
