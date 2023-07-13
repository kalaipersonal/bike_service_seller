import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import 'leaflet/dist/leaflet.css';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Provider } from "react-redux";
import store from "./Redux/stores/store";
import { AppContextProvider } from "./contextapi/Contextapi";
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
// import 'primeicons/primeicons.css';                                 // icons
// import 'primeflex/primeflex.css';  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ToastContainer></ToastContainer>

    <BrowserRouter>
      <AppContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContextProvider>
    </BrowserRouter>

  </>
);


reportWebVitals();
