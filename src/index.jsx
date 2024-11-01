/* eslint-disable linebreak-style */
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"
import "./styles.css"

ReactDOM.createRoot(document.getElementById("app")).render(
  <Router>
    <p>version 6</p>
    <App />
  </Router>
)
