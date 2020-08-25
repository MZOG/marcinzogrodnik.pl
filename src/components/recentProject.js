import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

const RecentProject = (props) => {
    return (
        <article className="recent-project-item">
            <Link to={`/realizacje/${props.slug}`}>
                <Img fluid={props.image} className="main-image" />
            </Link>
        </article>
    );
};

export default RecentProject;
