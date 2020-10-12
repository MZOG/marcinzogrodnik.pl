import React from 'react'
import {Link} from 'gatsby'

const PageHero = ({hero, lead, articleInfo, type, slug}) => {

  let formatter = new Intl.DateTimeFormat( 'pl', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  } );

  let pageSlug = ""

  switch (type) {
    case "DatoCmsPost":
      pageSlug = "blog"
      break;

    case "DatoCmsPortfolio":
      pageSlug = "realizacje"
      break;

    default:
      pageSlug = ""
  }

  return (
    <div className={`page-hero ${pageSlug ? 'article-hero' : ''}`}>
      {articleInfo &&
        <div className="article-info">
          <ul className="breadcrumbs">
            <li><Link to="/">Strona główna</Link></li>
            <li><Link to={`/${pageSlug}`}>{pageSlug}</Link></li>
            <li><Link to={`/${pageSlug}/${slug}`}>{hero}</Link></li>
          </ul>
          <p>{formatter.format( new Date(articleInfo) )}</p>
        </div>
      }
      <h1>{hero}</h1>
      {lead && <p>{lead}</p>}

    </div>
  )
}

export default PageHero