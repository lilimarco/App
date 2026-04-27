import React from "react";

function List() {
  let fname = "Lilian";
  let lname = "Marco";
  let currentYear = new Date();
  let year = currentYear.getFullYear();
  let image = "https://picsum.photos/200/300";

  return (
    <div className="section info">
      <p className="section-title">Favourite Foods</p>
      <ul className="food-list">
        <li className="food-item">
          <img className="image" src={require("../images/bacon.jpeg")} alt="bacon" />
          Bacon
        </li>
        <li className="food-item">
          <img className="image" src={require("../images/banana.jpeg")} alt="banana" />
          Banana
        </li>
        <li className="food-item">
          <img className="image" src={require("../images/noodles.jpeg")} alt="noodles" />
          Noodles
        </li>
      </ul>

      <p>Created by {fname + " " + lname} &mdash; &copy; {year}</p>

      <h1 style={{ fontSize: "1rem", marginTop: "20px", fontWeight: "500", color: "#64748b" }}>Random Picture</h1>
      <p>
        An image from <a href="https://picsum.photos/">picsum.photos</a> with
        declaration
      </p>
      <img src={image} alt="random" style={{ width: "200px", height: "200px", borderRadius: "12px", objectFit: "cover", marginTop: "10px", display: "block", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }} />
    </div>
  );
}

export default List;
