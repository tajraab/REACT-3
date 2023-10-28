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
    }).catch((error)=>
    console.error("Eror fetching data",error));
  });
   } ,[] );
  return <div className="container2">
    <ul className="glava">
      {data.map((el)=>(

      
      <div key={el.id}
      className="key"
      onClick={()=>navigate(`/posts/${el.id}`)}>
        <h4>{el.title}</h4>
        <p>{el.body}</p>
      </div>
       ) ) }
      
    </ul>
  </div>;
   );

}
export default PostPage;