import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils";
import PostCard from "../../components/Header/postsComponents/PostCard";
function PostsPage() {
  const [posts, setPosts] = useState([]);

  const getData = () =>
    axios.get(`${BASE_URL}/posts`).then((data) => setPosts(data.data.posts));

  useEffect(() => {
    getData();
  }, []);

  console.log(posts);
  return (
    <div
      style={{ backgroundColor: " rgba(107, 80, 80, 0.51)", minHeight: "90vh" }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {posts?.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </div>
  );
}

export default PostsPage;
