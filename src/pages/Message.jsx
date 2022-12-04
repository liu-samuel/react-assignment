import React from "react";
import "../styles/message.css";
import {BrowserRouter as Router, Link} from "react-router-dom"
import { useState } from "react";
import axios from "axios";

const Message = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    let handleSubmit = async (e) => {
        // debugger;
        e.preventDefault();
        try {
            let res = await axios.post("https://dry-shelf-88643.herokuapp.com/http://cloudsking.com/react_api.php",
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "POST"
                    },
                    body: {
                        name: name,
                        phone_number: phone,
                        message: message,
                    },

                }
            );

            // let resJson = res.json();
            //console.log(resJson);
            if (res.status === 200) {
                setName("");
                setPhone("");
                setMessage("");
                setResponse("Message sent");
                console.log(res.data);
            } else {
                setResponse("Error, try again")
            }
        } catch (err) {
            console.log(err);
        }
    };

    // let handleSubmit = (e) => {
    //     let res = axios.post("https://dry-shelf-88643.herokuapp.com/http://cloudsking.com/react_api.php", {
    //         name: name,
    //         phone_number: phone,
    //         message: message,
    //     })
    //         .then(function(response) {
    //             console.log(response)
    //         })
    //         .catch(function(error) {
    //             console.log(error);
    //         })
    // }


    return (
        <div>
            <h1>Hey, this is "send message" page</h1>
            <form>
                <label>Name:</label>
                <input type="text" placeholder="tell me your name"
                value={name} onChange={(e) => setName(e.target.value)}/>

                <label>Phone number:</label>
                <input type="text" placeholder="tell me your phone number"
                value={phone} onChange={(e) => setPhone(e.target.value)}/>

                <label>Message:</label>
                <input type="text" placeholder="tell me your message"
                value={message} onChange={(e) => setMessage(e.target.value)}/>

                <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>


            </form>
            {/*<h3>[IEEE UofT] Your message has been sent to lih!</h3>*/}
            <div className="response">
                    {response ? <p>{response}</p> : null}
                </div>
            <h3>
                <Link to="/">back</Link>
            </h3>
        </div>
    )
}

export default Message;
