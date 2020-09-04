import React from "react";
import RecentProject from "../components/recentProject";

const HomepageRecentProjects = ({ projects }) => {
    const recentProjects = projects.edges;
    return (
        <section className="recent-projects">
            <div className="container">
                <h2>Wybrane realizacje</h2>
                <div className="recent-projects-wrapper">
                    {recentProjects.map((project) => {
                        return (
                            <RecentProject
                                title={project.node.projectName}
                                image={project.node.projectImage.fluid}
                                excerpt={project.node.excerpt}
                                preview={project.node.projectUrl}
                                slug={project.node.slug}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HomepageRecentProjects;
