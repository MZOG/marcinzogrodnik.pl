import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const ShowcasePost = (props) => {
    console.log(props);

    const convertDate = (date) => {
        date = new Date(date);
        const args = [
            "pl",
            { day: "numeric", month: "long", year: "numeric" },
        ].filter(Boolean);
        return date.toLocaleDateString(...args);
    };
    return (
        <article className="blog-articles_post" key={props.project.node.id}>
            <div className="blog-articles__image">
                <Link to={`/realizacje/${props.project.node.slug}`}>
                    <Img fluid={props.project.node.projectImage.fluid} />
                </Link>
            </div>

            <div className="blog-articles__content">
                <h2>
                    <Link to={`/realizacje/${props.project.node.slug}`}>
                        {props.project.node.projectName}
                    </Link>
                </h2>

                <div className="blog-articles__footer">
                    <p className="created-at">
                        {convertDate(props.project.node.meta.createdAt)}
                    </p>
                    <Link
                        to={`/realizacje/${props.project.node.slug}`}
                        className="btn"
                    >
                        Więcej →
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default ShowcasePost;
