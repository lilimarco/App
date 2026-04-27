import React from "react";
import Avatar from "../components/Avatar";
import Details from "../components/Details";

function Contacts(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar image={props.image} />
        </div>
        <div className="bottom">
          <Details detailInfo={props.telephone} />
          <Details detailInfo={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
