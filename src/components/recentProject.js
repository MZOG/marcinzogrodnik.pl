import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

const RecentProject = (props) => {
    return (
        <article className="recent-project-item">
            <Link to={`/realizacje/${props.slug}`}>
                <Img fluid={props.image} className="main-image" />
                <div className="more">Więcej →</div>
            </Link>
            <h3>{props.title}</h3>
            <p>{props.excerpt}</p>
        </article>
    );
};

export default RecentProject;
