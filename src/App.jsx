//Components Import
import Home from "./pages/Home";
import RegisterPerjadin from "./containers/RegisterPerjadin";
import NavigationBar from "./components/NavigationBar";
//Dependencies
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//Styling
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
    return (
        <div>
            <Router>
                <NavigationBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/register" element={<RegisterPerjadin/>}/>
                </Routes>
            </Router>
            <Home/>
        </div>
    )
}
export default App;