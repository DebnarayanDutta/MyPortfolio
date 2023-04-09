import React from "react";
import './Projects.css';
import ProjectItems from "./project-items";
import { MyProjects} from "./MyProjects";

const Projects = () => {
    console.log(MyProjects)
    return(
        <>
        <div className="projects">
        {
          MyProjects.map((elem) => {
            return <ProjectItems
                  
                  list={elem}
                />
          })
        
        
       
        }
        </div>

        </>
    )
}

export default Projects;