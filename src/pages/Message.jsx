import React from "react";
import "../styles/message.css";
import {BrowserRouter as Router, Link} from "react-router-dom"

const Message = () => {
    return (
        <div>
            <h1>Hey, this is "send message" page</h1>
            <form>
                <label>Name:</label>
                <input type="text" placeholder="tell me your name" />

                <label>Phone number:</label>
                <input type="text" placeholder="tell me your phone number" />

                <label>Message:</label>
                <input type="text" placeholder="tell me your message" />

                <button type="submit">Submit</button>

            </form>
            <h3>[IEEE UofT] Your message has been sent to lih!</h3>
            <h3>
                <Link to="/">back</Link>
            </h3>
        </div>
    )
}

export default Message;
