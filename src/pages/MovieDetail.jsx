import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function MovieDetail() {
  const { state } = useLocation();
  const { title } = useParams();

  return(
    <div
    style={{
      display: "flex",
      margin: "100px",
    }}
  >
    <img
      src={state.url["url"] + state.poster_path["poster_path"]}
      alt={title}
      style={{
        width: " 300px",
      }}
    />
    <h2>{title}</h2>
  </div>
  )}