import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme"; // Import the custom theme

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider> 
  </StrictMode>,
)
