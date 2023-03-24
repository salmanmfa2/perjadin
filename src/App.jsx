import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Home from "./pages/Home";
import RegisterPerjadin from "./containers/RegisterPerjadin";
import NavigationBar from "./containers/NavigationBar";
import Footer from "./containers/Footer.jsx";


const App = () => {
    return (
        <div>
            <Router>
                <NavigationBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/register" element={<RegisterPerjadin/>}/>
                </Routes>
                <Footer/>
                
            </Router>
        </div>
    )
}

export default App;
