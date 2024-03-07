// import React from 'react'
import "../Projects/projects.css";
import { Tilt } from "react-tilt";
import project1 from "../../assets/bg.jpg"
import project2 from "../../assets/work2.jpg"
import project3 from "../../assets/work3.jpg"

export default function Projects() {
        const tiltOptions = {
            max: 45,
            scale:1,
            speed:750
        };

return (
    <section className="skills section" id="project">
    <h2 className="section-title">Projects</h2>
    <span className="section-subtitle">Projects I made</span>
    <div className="tilt-cards-container">
    <Tilt className="tilt-card" style={{backgroundImage:`url(${project1})`,backgroundSize:'cover',backgroundPosition: 'center'}} options={tiltOptions}>
        <div className="tilt-card-content">
        <h2>Civil Service Society</h2>
            <div className="button-container">
            <button className="custom-button"><a href="https://github.com/CSS-NITA/officialWebsite" target="_blank" rel="noreferrer">Github</a></button>
            <button className="custom-button"><a href="https://css-nita.netlify.app/" target="_blank" rel="noreferrer">Demo</a></button>
        </div>
        </div>
    </Tilt>

    <Tilt className="tilt-card" style={{backgroundImage:`url(${project2})`,backgroundSize:'cover',
        backgroundPosition: 'center',}} options={tiltOptions}>
        <div className="tilt-card-content">
        <h2>E-Commerce</h2>
            <div className="button-container">
            <button className="custom-button"><a href="https://github.com/lalitjangir2002/CARA-E-Commerce.github.io" target="_blank" rel="noreferrer">Github</a></button>
            <button className="custom-button"><a href="https://lalitjangir2002.github.io/CARA-E-Commerce.github.io/" target="_blank" rel="noreferrer">Demo</a></button>
            </div>
        </div>
    </Tilt>

    <Tilt className="tilt-card" style={{backgroundImage:`url(${project3})`,backgroundSize:'cover',backgroundPosition: 'center'}} options={tiltOptions}>
        <div className="tilt-card-content">
        <h2>React Food App</h2>
            <div className="button-container">
            <button className="custom-button"><a href="https://github.com/lalitjangir2002/ReactFoodApp" target="_blank" rel="noreferrer">Github</a></button>
            <button className="custom-button"><a href="https://65058317e988627b26e70973--reactfoodcart-56742.netlify.app/" target="_blank" rel="noreferrer">Demo</a></button>
            </div>
        </div>
    </Tilt>
    </div>
</section>
)
}
