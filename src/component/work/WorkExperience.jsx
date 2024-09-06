import React from "react";
import ExperienceCard from "./ExperienceCard";


const WorkExperience = () =>{
    return (
        <section className="work section" id="experience">
        <h2 className="section-title">WORK Experience</h2>
        <span className="section-subtitle">A Quick recap of where I've worked</span>

        <div className="experience_card">
            <ExperienceCard/>
        </div>
    </section>
    )
}

export default WorkExperience;