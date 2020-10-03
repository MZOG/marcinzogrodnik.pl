import React from "react"
import { Link } from "gatsby"

const HomepageProjects = () => (
  <section className="homepage-projects">
    <div className="container">
      <h2>Realizacje</h2>
      <p className="projects-lead">
        Zobacz na żywo jak wyglądają ostatnie realizacje dla klientów, oraz moje
        prywante projekty.
      </p>

      <div className="projects-container">
        <article className="project-item">
          <div className="project-left">
            <h3>Luxestate</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              dolores ducimus enim harum inventore iste molestiae quasi quos
              similique? Ab accusamus earum excepturi exercitationem hic illo
              porro, quidem reprehenderit voluptate.
            </p>
            <div className="project-more">
              <Link to="/">
                Więcej
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="project-right">
            <img src="https://via.placeholder.com/500x300" alt="project" />
          </div>
        </article>

        <article className="project-item">
          <div className="project-left">
            <h3>Project Name</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              dolores ducimus enim harum inventore iste molestiae quasi quos
              similique? Ab accusamus earum excepturi exercitationem hic illo
              porro, quidem reprehenderit voluptate.
            </p>
            <div className="project-more">
              <Link to="/">
                Więcej
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="project-right">
            <img src="https://via.placeholder.com/500x300" alt="project" />
          </div>
        </article>
      </div>
    </div>
  </section>
)

export default HomepageProjects