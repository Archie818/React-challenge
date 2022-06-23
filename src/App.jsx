import React, { Component} from "react";
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import Header from "./components/Header";
import Male from "./pages/Male";
import Female from "./pages/Female";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import "./global.css"

/**
 * The starting page for your App
 */

const  App = ()=> {
    return(
      <>
        <BrowserRouter>
          <Header />
                <Routes>
                    <Route path='/' element={<Navigate to="/male" />} /> 
                    <Route path="/male" element={<Male />} />
                    <Route path="/female" element={<Female />} />
                </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;