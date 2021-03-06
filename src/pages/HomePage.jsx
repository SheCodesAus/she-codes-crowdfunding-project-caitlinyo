import React from "react";

// Data
import { allProjects } from "../data";

function HomePage() {
    return (
        <div>
            {allProjects.map(projectData, key) => {
                return <div key={key}>{projectData.title}</div>;
            })}
        </div>>
    );
}

export default HomePage;