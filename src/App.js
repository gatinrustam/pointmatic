import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Solutions from "./components/Solutions/Solutions";
import Tariffs from "./components/Tariffs/Tariffs";
import Company from "./components/Company/Company";

import "./common/css/vars.css";
import "./App.css";

export default function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/tariffs" element={<Tariffs />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </BrowserRouter>
    )
}
