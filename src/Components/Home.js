import React from "react";
import './Home.css';

const Home = () => {
    return(
        <>
        <div className="home">

            <div className="about">
                <h2>Hi, My name is Debnarayan</h2>
                <div className="sentence">
                    <p>A software developer with a passion for learning & creating</p>
                </div>

                <div className="icons">
                    <span><a href="https://github.com/DebnarayanDutta"><img className="about-social-media" src="https://cdn-icons-png.flaticon.com/512/733/733609.png"/></a></span>
                    <span><a href="https://twitter.com/Debnarayan663?t=UobaYwh-eo9EAqWqEKtOLw&s=09"><img className="about-social-media" src="https://cdn-icons-png.flaticon.com/512/733/733579.png"></img></a></span>
                    <span><a href="https://www.linkedin.com/in/debnarayan-dutta-5137a51b5/"><img className="about-social-media" src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"></img></a></span>
                    <span><a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRspXMFnspzffskLpDSQHWMdMvCTmRCmJCWwHkBblzJNlLBLRfGxNWPFSkbdqDKhVWbchVL"><img className="about-social-media" src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png"></img></a></span>    
                </div>

            </div>
            <div className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                </ul>
            </div>
        </div>

        </>
    )
}

export default Home;