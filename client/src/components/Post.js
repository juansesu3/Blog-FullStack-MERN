
import { format } from 'date-fns'
//fotmatISO9075
const Post = ({title, summary, cover, content, createdAt, author}) => {
  return (
    <div className="post">
      <div className="image">
        <img src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?w=990&crop=1" />
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
