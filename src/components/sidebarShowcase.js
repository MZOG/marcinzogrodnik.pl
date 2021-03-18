import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const SidebarShowcase = () => {
  const sidebarShowcase = useStaticQuery(graphql`
    {
      allDatoCmsShowcase(sort: { order: DESC, fields: meta___publishedAt }) {
        nodes {
          id
          slug
          title
        }
      }
    }
  `)

  return (
    <div className="article__sidebar_box">
      <div className="article__sidebar_box-item">
        <p className="article__sidebar_box-item-title">Ostatnie realizacje</p>
        <ul>
          {sidebarShowcase.allDatoCmsShowcase.nodes.map(item => (
            <li key={item.id}>
              <Link to={`/realizacje/${item.slug}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SidebarShowcase
