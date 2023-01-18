import React from 'react';
import ProjectCards from '../Portfolio';
import portfolio from '../../portfolio.json'

function Card(props) {
    return <div className='card'>{props.children}</div>;
}

function Project() {
    return (
        <section>
            <div>
                <h1 className='title'>Projects</h1>
            </div>


            <Card>
                {portfolio.map((project) => (
                    <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} />
                ))}
            </Card>
        </section>
    )
}
export default Project;