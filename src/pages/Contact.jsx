import React from "react";
import "../styles/contact.css";
import {Link} from "react-router-dom";
import {FaLinkedinIn, FaGithub} from "react-icons/fa"

const Contact = () => {
    return (
        <div>


            <h1>Hey, this is "my contact" page</h1>
            <p>phone number: 1234567</p>
            <p>my Instagram QR code: Please insert an image here> </p>
            <a href="https://www.linkedin.com/in/liusamuelt2003/"><FaLinkedinIn/></a>
            <a href="https://github.com/liu-samuel"><FaGithub/></a>

            <h3>
                <Link to="/">back</Link>
            </h3>
        </div>
    )
}

export default Contact;
