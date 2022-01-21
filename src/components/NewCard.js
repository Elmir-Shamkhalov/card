import React from "react";

const NewCard = ({ title, links }) => {
  return (
    <div>
      <h3>{title}</h3>
      {links.map((link, key) => (
        <p key={key}>{link}</p>
      ))}
    </div>
  );
};

export default NewCard;
