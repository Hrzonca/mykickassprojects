import React from "react";

function ProjectCards(props) {
    return (
        <div className="card">
            <div className="img-container">
                <image alt={props.name} src={props.image}></image>
            </div>
        </div>
    )
}

export default ProjectCards;