// import React from 'react';
import "../Qualification/education.css";
import {motion} from "framer-motion";

export default function Education() {
return (
    <motion.section
    variants={{
        hidden : {opacity:0,y:60},
        visible : {opacity:1,y:0}
    }}
    initial="hidden"
    animate="visible"
    transition={{duration:1}}
    className="education section" id="qualification">
        <h2 className="section-title">Qualification</h2>
        <span className="section-subtitle">My journey</span>

        <div className="education-container container">
            <div className="education-tabs">
                <div className="education-button button-flex">
                    <i className="uil uil-graduation-cap education-active education-icon"></i>{" "}Education
                </div>
            </div>

            <div className="education-sections">
                <div className="education-content">
                    <div className="education-data">
                        <div>
                            <span className="education-rounder"></span>
                            <span className="education-line"></span>
                        </div>
                        <div>
                            <h3 className="education-title">10th</h3>
                            <span className="education-subtitle">Kerala Public School</span>
                            <div className="education-calender">
                                <i className="uil uil-calendar-alt"></i>2017-2018
                            </div>
                        </div>
                    </div>

                    <div className="education-data">
                        <div>
                            <span className="education-rounder"></span>
                            <span className="education-line"></span>
                        </div>

                        <div>
                            <h3 className="education-title">12th</h3>
                            <span className="education-subtitle">Kerala Public School</span>
                            <div className="education-calender">
                                <i className="uil uil-calendar-alt"></i>2019-2020
                            </div>
                        </div>
                    </div>

                    <div className="education-data">
                        <div>
                            <span className="education-rounder"></span>
                            <span className="education-line"></span>
                        </div>

                        <div>
                            <h3 className="education-title">Bachelors in Technology</h3>
                            <span className="education-subtitle">National Institute of Technology Agartala</span>
                            <div className="education-calender">
                                <i className="uil uil-calendar-alt"></i>2021-Present
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.section>
)
}
