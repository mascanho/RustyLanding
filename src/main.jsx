import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Help from "./Help.jsx";
import Docs from "./components/Docs.jsx";
import BlogList from "./components/BlogList.jsx";
import BlogPost from "./components/BlogPost.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<Help />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/docs/:slug" element={<Docs />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
