import React, { useEffect, useState } from "react";
import "./PostPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PostPage(posts) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://dummyjson.com/posts").then((res) => {
      setData(res.data.posts);
    }).catch;
  });
  return <div>PostPage</div>;
}
