import React from "react";

const PageHero = ({ title, lead }) => {
    return (
        <div className="page-hero">
            <h1>{title}</h1>
            <p className="lead">{lead}</p>
        </div>
    );
};

export default PageHero;
