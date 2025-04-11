{/* necessary imports such as react, react-dom, App component, BrowserRouter, ShopContextProvider and css file */}
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'

{/* ReactDOM is used to render the App component into the root element of the HTML file, App is wrapped by shop context*/}
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </BrowserRouter>,
)
 