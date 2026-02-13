import React, { Component } from 'react';

class ProjectList extends Component {
  constructor(props) {
    super(props);
    // Initializing state in a class component
    this.state = {
      projects: [
        { id: 1, title: "E-commerce App", tech: "React & Node" },
        { id: 2, title: "AI Dashboard", tech: "Python & React" },
        { id: 3, title: "Social Media Tool", tech: "Firebase" }
      ]
    };
  }

  render() {
    return (
      <div className="project-grid">
        {this.state.projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>Built with: {project.tech}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectList;