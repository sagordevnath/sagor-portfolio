import React, { useState, useEffect } from 'react';

const CareViewDetails = () => {
    const [projects, setProjects] = useState([]);

    useEffect(()=> {

        fetch('projects3.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[]);
    return (
        <div>
            {
                projects.map(project => {
                    return (
                        <div className="">
                            <div className="details-img project__box__img">
                                <img width='25px' src={project.image1} alt="" className="project__img" />
                                <img width='25px' src={project.image2} alt="" className="project__img" />
                                <img width='25px' src={project.image3} alt="" className="project__img" />
                            </div>
                            <div className="project__meta">
                                <h5 className="project__text">Name: {project.name}</h5>
                                <h4 className="project__text">Description: {project.description}</h4>
                                <h4 className="project__text">Usage: {project.usage}</h4>
                                <div className='link'>
                                    <a href={project.githubClient} className="project__btn">Client</a>
                                    <a href={project.liveLink} className="project__btn">Live</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default CareViewDetails;