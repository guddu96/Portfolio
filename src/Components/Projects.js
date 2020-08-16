import React, { Component } from 'react';
import PROJECTS from '../data/projects';


class Project extends Component {
    render() {
        const { title, image, description, link } = this.props.project;

        return (
        <div style={{display : 'inline-block', width : 300, margin : 10}} >
            <h4>{this.props.project.title}</h4>
            <img src={image} style={{width: 200, height : 120}} />
            <p>{description}</p>
            <a href={link}>{link}</a>
        </div>
        )
    }
}


class Projects extends Component {  
    render() {
        return(
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map(P => { 
                            return (
                                <Project key={P.id} project={P} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
};

export default Projects;