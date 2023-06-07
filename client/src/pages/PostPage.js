import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

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
      <h1>{postInfo.title}</h1>
      <time>{format(new Date(postInfo.createdAt), "MMM d yyyy HH:mm")}</time>
      <div className="author">by @{postInfo.author.userName}</div>
      <div className="image">
        <img src={`http://localhost:7000/${postInfo.cover}`} />
      </div>

      
      <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}}></div>
    </div>
  );
};

export default PostPage;
