import React from "react";

export default function Item(props) {
  const style1 = {
    margin: "10px",
    height: "250px",
    fontWeight: "200",

    borderRadius: "10px",
    color: "black",
  };
  const style2 = {
    boxShadow:
      " rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  };
  return (
    <div style={{ ...style1, ...style2 }}>
      <img
        src={props.url}
        alt={props.name}
        style={{
          height: "80%",
          width: "100%",
          marginTop: "10px",
          marginBottom: "-60px",
          borderRadius: "10px",
        }}
      />
      <h2 style={{ color: "black", marginTop: "50px", marginLeft: "50px" }}>
        {props.name}
      </h2>
    </div>
  );
}
