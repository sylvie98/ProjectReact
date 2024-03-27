import React from 'react'
import "../index.css"

function Card({ image,title,author}) {
  return (
    <>
        <div className="book">
            <img src={image} alt="computer" />
            <h3>{title}</h3>
            <h3>{author}</h3>
        </div>
    </>
  );
};

export default Card