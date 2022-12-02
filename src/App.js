import React from 'react'
import "./App.css"
import Index from "./components/Index"
import Intro from "./pages/Intro"
import Message from "./pages/Message"
import Contact from "./pages/Contact"
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"

function App() {
    return (
        <Router>
            <Index/>
            <Routes>
                <Route path="/intro" element={<Intro/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/message" element={<Message/>}/>
            </Routes>
        </Router>
    );
}

export default App;

