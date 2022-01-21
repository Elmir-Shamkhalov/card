import React from "react";
import NewCard from "./NewCard";
import FooterData from "./FooterData";

const Card = () => {
  return (
    <div>
      {/* <div className="card-item">
        <img src={data.images}></img>
        <h2>{data.header}</h2>
        <p>{data.text}</p>
        <a href={data.link}>Learn More</a>
      </div> */}
      <div className="grid-card">
        {
          FooterData.map((el,key) =>(
            <NewCard title={el.title} links={el.links} key={key}/>
          ))
        }
      </div>
    </div>
  );
};

export default Card;
