import React, { useState, useEffect } from "react";

export default function Projects({ API_URL }) {
  const [projects, setProjects] = useState(null);

  const getProjectsData = async () => {
    const response = await fetch(`${API_URL}/projects`);
    const data = await response.json();

    setProjects(data);
  };

  useEffect(() => getProjectsData(), []);

  return !projects ? (
    <h1>Loading...</h1>
  ) : (
    projects.map((project) => (
      <div>
        <h1>{project.name}</h1>
        <img src={project.image} alt="" />
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>live site</button>
        </a>
      </div>
    ))
  );
}
