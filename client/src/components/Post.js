
import { format } from 'date-fns'
//fotmatISO9075
const Post = ({title, summary, cover, content, createdAt, author}) => {
  return (
    <div className="post">
      <div className="image">
        <img src={'http://localhost:7000/'+cover} alt='image-post' />
      </div>

      <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <a href="/" className="author">@{author.userName}</a>
          <time>{format(new Date(createdAt), 'MMM d yyyy HH:mm')}</time>
        </p>
        <p className="summary">
         {summary}
        </p>
      </div>
    </div>
  );
};

export default Post;
