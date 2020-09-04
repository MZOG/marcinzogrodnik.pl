import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

const RecentProject = (props) => {
    return (
        <article className="recent-project-item">
            <Link to={`/realizacje/${props.slug}`}>
                <Img fluid={props.image} className="main-image" />
            </Link>

            <h3>{props.title}</h3>

            <div className="more">
            <Link to={`/realizacje/${props.slug}`} className="btn btn-primary">
                Więcej
            </Link>
            </div>
        </article>
    );
};

export default RecentProject;
