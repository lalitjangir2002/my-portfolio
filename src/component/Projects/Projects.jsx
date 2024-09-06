import "../Projects/projects.css";
import React,{useEffect,useRef} from "react";
import { projects } from "../../constant";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const ref = useRef(null);

  useEffect(()=> {
    const containerRef = ref.current
    console.log(containerRef);

    const handleScrollHorizontally = () => {
      if(containerRef){
        const scrollTop = window.pageYOffset;
        const containerTop = containerRef.offsetTop ;
        const containerHeight = containerRef.offsetHeight;
        // console.log(scrollTop,containerTop,containerHeight)

        if (scrollTop >= containerTop && scrollTop < containerTop + containerHeight) {
          const scrollOffset = (scrollTop - containerTop) * (containerRef.scrollWidth / containerHeight);
          containerRef.scrollLeft = scrollOffset;
        }
      }
    }

    window.addEventListener('scroll', handleScrollHorizontally);
    return () => {
      window.removeEventListener('scroll', handleScrollHorizontally);
    };
  },[])

  return (
    <section className="skills section" id="project">
      <h2 className="section-title">Projects</h2>
      <span className="section-subtitle">Some Projects I made</span>
      <div className="tilt-cards-container" ref={ref}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}/>
        ))}
      </div>
    </section>
  );
}
