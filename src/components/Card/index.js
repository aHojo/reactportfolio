import React, {useState} from 'react';


const Card = () => {
    const [projects] = useState([
        {
            name: "Project1",
            githubUrl: "#"
        },
        {
            name: "Project2",
            githubUrl: "#"
        },
        {
            name: "Project3",
            githubUrl: "#"
        },
        {
            name: "Project4",
            githubUrl: "#"
        },
        {
            name: "Project5",
            githubUrl: "#"
        }
    ])

    return (
        <div className="grid">
            {projects.map((project) => {
                return (
                <div key={project.name} className="card">
                    <a href={project.githubUrl}>
                        <img src={require(`../../assets/projects/${project.name}.jpg`).default}/>
                        <div>
                            <h1>{project.name}</h1>
                        </div>
                    </a>
                </div>
                )

            })}
        </div>
    )
}

export default Card;