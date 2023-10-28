import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  return <div>SinglePost</div>;
}
export default SinglePost;