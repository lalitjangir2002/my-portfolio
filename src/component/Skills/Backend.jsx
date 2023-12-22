// import React from 'react';
import node from "../../assets/node.png"
import firebase from "../../assets/firebase.png"
import java from "../../assets/java.png";
import mysql from "../../assets/mysql.png";
import springboot from "../../assets/springboot.png";
import mongodb from "../../assets/mongodb.png";
import { Tilt } from "react-tilt";


const Backend = () => {
    const tiltOptions = {
        max: 45,
        scale:1,
        speed:750
    };
return (
    <Tilt className="skills-content" options={tiltOptions}>
    <h3 className="skills-title">Backened</h3>

    <div className="skills-box">
        <div className="skills-group">
            <div className="skills-data">
                <div>
                <img src={node} alt="html" className="skills-img" />
                    <h3 className="skills-name">Nodejs</h3>
                </div>
            </div>

            <div className="skills-data">
                <div>
                <img src={java} alt="html" className="skills-img" />
                    <h3 className="skills-name">Java</h3>
                </div>
            </div>

            <div className="skills-data">
                <div>
                <img src={firebase} alt="html" className="skills-img" />
                    <h3 className="skills-name">Firebase</h3>
                </div>
            </div>
        </div>

        <div className="skills-group">
            <div className="skills-data">
                <div>
                <img src={mysql} alt="html" className="skills-img" />
                    <h3 className="skills-name">MySQL</h3>
                </div>
            </div>

            <div className="skills-data">
                <div>
                <img src={springboot} alt="html" className="skills-img" />
                    <h3 className="skills-name">Spring Boot</h3>
                </div>
            </div>

            <div className="skills-data">
                <div>
                <img src={mongodb} alt="html" className="skills-img" />
                    <h3 className="skills-name">MongoDB</h3>
                </div>
            </div>
        </div>
    </div>
</Tilt>
)
}

export default Backend