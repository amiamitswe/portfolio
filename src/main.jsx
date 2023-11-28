import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactGA from "react-ga4";
import App from './App.jsx'
import './index.css'

ReactGA.initialize("G-M37Q9V0F6G");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-M37Q9V0F6G"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-M37Q9V0F6G');
// </script>