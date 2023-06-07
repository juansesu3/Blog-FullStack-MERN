import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:7000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";

  return (
    <div className="post-page">
      <div className="image">
        <img src={`http://localhost:7000/${postInfo.cover}`} />
      </div>
      <h1>{postInfo.title}</h1>
      <div dangerouslySetInnerHTML={{__html:postInfo.content}}></div>
    </div>
  );
};

export default PostPage;
