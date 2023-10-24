import React from "react";
import { useParams } from "react-router-dom";

function SinglePosts() {
  const { tajra } = useParams();
  console.log(tajra);
  return <div>{tajra}</div>;
}
export default SinglePosts;
