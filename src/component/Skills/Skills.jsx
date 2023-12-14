// import React from 'react';
import "../Skills/skills.css"
import Backend from "./Backend";
import Frontend from "./Frontend";

export default function Skills() {
return (
    <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>
        <span className="section-subtitle">Skills I worked On</span>

        <div className="skills-container container grid">
            <Frontend/>

            <Backend/>
        </div>
    </section>
)
}
