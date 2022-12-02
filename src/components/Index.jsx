import React from "react";
import "../styles/index.css";
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import {useState} from "react";

const Index = () => {
    const user = "sam";
    const currPage = ""
    const [highlight, setHighlight] = useState("");

    return (
        <div className="index">
            <p>The url for this page: http://ieee.utoronto.ca/{currPage}</p>
            <h1>{user}'s personal website</h1>

            <h2>Hello! Welcome to {user}'s home, please select your action:</h2>

            <div>
                <Link to="/intro" onClick={() => setHighlight("intro")}
                      className={highlight === "intro" ? highlight : ""}>1. My introduction </Link>
            </div>
            <div>
                <Link to="/contact" onClick={() => setHighlight("contact")}
                      className={highlight === "contact" ? highlight : ""}>2. My contact </Link>
            </div>
            <div>
                <Link to="/message" onClick={() => setHighlight("message")}
                      className={highlight === "message" ? highlight : ""}>3. Send a message </Link>
            </div>
        </div>
    )
}

export default Index;
