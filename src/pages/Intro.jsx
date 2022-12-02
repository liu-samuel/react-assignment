import React from "react";
import "../styles/intro.css";
const Intro = () => {
    const user = "sam"
    const year = 2;
    return (
        <div>


            <h1>Hey, this is "my introduction" page</h1>
            <p>Hello my name is {user}, and I am a {year} year student at University of Toronto,
                currently I am the web associate at IEEE UofT....</p>

            {/* Record a short video, giving a brief introduction of yourself, and upload it to youtube.
            Then, paste the link to the video in the form below.
            (Please make sure that the video is public, otherwise we cannot access it.)
            And try to display it in the region below the form.  */}
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Rick Roll</a>
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />


        </div>
    )
}

export default Intro;
