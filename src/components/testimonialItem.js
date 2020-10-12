import React from 'react'

const TestimonialItem = ({image, content, author, www}) => {
  return (
    <article className="testimonial">

      <div className="testimonial-image">
      <img src={image} alt={www}/>
      </div>

      <div className="testimonial-content">
        <p>{content}</p>

        <div className="testimonial-footer">
          <p>{author}</p>
          <a href={`https://${www}`}>{www}</a>
        </div>
      </div>


    </article>
  )
}

export default TestimonialItem