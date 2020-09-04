import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const postItem = (props) => {
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
        <article className="blog-articles_post" key={props.post.node.id}>
            <div className="blog-articles__image">
                <Link to={`/blog/${props.post.node.slug}`}>
                    <Img fluid={props.post.node.postImage.fluid} />
                </Link>
            </div>

            <div className="blog-articles__content">
                {props.h3 ? ( // display H3 on homepage
                    <h3>
                        <Link to={`/blog/${props.post.node.slug}`}>
                            {props.h3}
                        </Link>
                    </h3>
                ) : (
                    // display H2 on blog page
                    <h2>
                        <Link to={`/blog/${props.post.node.slug}`}>
                            {props.post.node.title}
                        </Link>
                    </h2>
                )}
                <p>{props.post.node.excerpt}</p>

                <div className="blog-articles__footer">
                    <p className="created-at">
                        {convertDate(props.post.node.meta.createdAt)}
                    </p>
                    <Link to={`/blog/${props.post.node.slug}`} className="btn btn-primary">
                        Więcej
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default postItem;
