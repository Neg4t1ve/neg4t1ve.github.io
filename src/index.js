import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyDSNFEDy9eURk2vzikuIvo8mW6Z0G9Xi6k",
  authDomain: "petp-c4287.firebaseapp.com",
  projectId: "petp-c4287",
  storageBucket: "petp-c4287.appspot.com",
  messagingSenderId: "625612148260",
  appId: "1:625612148260:web:dda2c7182de640e49392b1",
});
const db = getFirestore(app);
export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Context.Provider value={db}>
      <App />
    </Context.Provider>
  </BrowserRouter>
);
