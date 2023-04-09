import React from "react";
import './project-Item.css';

const ProjectItems = (props) => {

    const {projectImage,projectName,about,skills,link}= props.list;

    return(
        <>
        <div className="projectItem-mainDiv">
        <div className="image-div">
        <img className="image" src={projectImage} alt="project-image" />
        </div>
        <div className="projectInfo">
        <h1>{projectName}</h1>
        <p>{about}</p>
        <p>Skills: {skills}</p>
        <p><a href={link}>Link</a></p>

        </div>

        </div>

        </>
    )
}

export default ProjectItems;