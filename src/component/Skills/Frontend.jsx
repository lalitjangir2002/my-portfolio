// import React from 'react'
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/javascript.png"
import git from "../../assets/github.png"
import react from "../../assets/react.png"
import tailwind from "../../assets/tailwind.png"
import { Tilt } from "react-tilt"

const Frontend = () => {
    const tiltOptions = {
        max: 45,
        scale:1,
        speed:750
    };
return (
    <Tilt className="skills-content" options={tiltOptions}>
        <h3 className="skills-title">Frontend Developer</h3>

        <div className="skills-box">
            <div className="skills-group">
                <div className="skills-data">
                    {/* <i className="bx bx-badge-check"></i> */}
                    <div>
                        {/* <span className="skills-level">Basic</span> */}
                        <img src={html} alt="html" className="skills-img" />
                        <h3 className="skills-name">HTML</h3>
                    </div>
                </div>

                <div className="skills-data">
                    {/* <i className="bx bx-badge-check"></i> */}
                    <div>
                        <img src={css} alt="html" className="skills-img" />
                        <h3 className="skills-name">CSS</h3>
                        {/* <span className="skills-level">Intermediate</span> */}
                    </div>
                </div>

                <div className="skills-data">
                    {/* <i className="bx bx-badge-check"></i> */}
                    <div>
                    <img src={js} alt="html" className="skills-img" />
                        <h3 className="skills-name">JavaScript</h3>
                        {/* <span className="skills-level">Intermediate</span> */}
                    </div>
                </div>
            </div>

            <div className="skills-group">
                <div className="skills-data">
                    {/* <i className="bx bx-badge-check"></i> */}
                    <div>
                    <img src={git} alt="html" className="skills-img" />
                        <h3 className="skills-name">Git</h3>
                        {/* <span className="skills-level">Intermediate</span> */}
                    </div>
                </div>

                <div className="skills-data">
                    {/* <i className="bx bx-badge-check"></i> */}
                    <div>
                    <img src={react} alt="html" className="skills-img" />
                        <h3 className="skills-name">React</h3>
                        {/* <span className="skills-level">Intermediate</span> */}
                    </div>
                </div>

                <div className="skills-data">
                    {/* <i className="bx bx-badge-check"></i> */}
                    <div>
                    <img src={tailwind} alt="html" className="skills-img" />
                        <h3 className="skills-name">Tailwind</h3>
                        {/* <span className="skills-level">Intermediate</span> */}
                    </div>
                </div>
            </div>
        </div>
    </Tilt>
)
}

export default Frontend;