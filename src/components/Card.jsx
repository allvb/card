import React from 'react'

function Card({children ,...props}) {
  const { title, text, button} = props;
  return (
    <div className="card">
      {children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#." className="btn">{button}</a>
      </div>
    </div>
  )
}

export default Card