import React, {useState} from 'react';


const Resume = () => {
    const [frontend] = useState([
        "HTML",
        "CSS",
        "Javascript",
        "React"
    ])

    const [backend] = useState([
        "Node",
        "Express",
        "Golang",
        "Java",
        "C# - ASP.Net Core",
        "Postgres/Mysql",
        "MongoDB"
        
    ])


    return (
        <div style={{margin: "1rem", width: "100%"}}>
            <h1>Frontend</h1>
            <ul>
                {frontend.map(f => <li>{f}</li>)}
            </ul>
            <h1>Backend</h1>
            <ul>
                {backend.map(b => <li>{b}</li>)}
            </ul>
        </div>
    )
}

export default Resume;