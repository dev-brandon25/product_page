import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme"; // Import the custom theme
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider> 
    </BrowserRouter>
  </StrictMode>,
)
