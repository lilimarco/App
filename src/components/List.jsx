import React from "react";

function List() {
  let fname = "Lilian";
  let lname = "Marco";
  let currentYear = new Date();
  let year = currentYear.getFullYear();
  let image = "https://picsum.photos/200/300";
  let customeStyle = {
    fontFamily: "monospace",
  };

  return (
    <div className="info">
      <h1>My Favourite foods</h1>
      <ul>
        <li>Bacon</li>
        <img className="image" src={require("../images/bacon.jpeg")} alt="bacon" />
        <li>Banana</li>
        <img className="image" src={require("../images/banana.jpeg")} alt="bacon" />
        <li>Noodles</li>
        <img className="image" src={require("../images/noodles.jpeg")} alt="bacon" />
      </ul>

      <p>Created by {fname + " " + lname}</p>
      <p>Copyright {year}</p>
      <h1 style={customeStyle}>Random Picture</h1>
      <p>
        An image from <a href="https://picsum.photos/">picsum.photos</a> with
        declaration
      </p>
      <img src={image} alt="randomimages" />
    </div>
  );
}

export default List;
