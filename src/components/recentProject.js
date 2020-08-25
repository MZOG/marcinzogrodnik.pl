import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

const RecentProject = (props) => {
    return (
        <article className="recent-project-item">
            <Link to={`/realizacje/${props.slug}`}>
                <Img fluid={props.image} className="main-image" />
            </Link>
            <div className="title">
            <Link to={`/realizacje/${props.slug}`}><h3>{props.title}</h3></Link> <span>→</span>
            </div>
            <p>{props.excerpt}</p>
        </article>
    );
};

export default RecentProject;
