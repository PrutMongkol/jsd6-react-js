import usePost from "./hook/usePost";
import "./App.css";

function App() {
  const { get, remove } = usePost();
  const posts = get();

  return (
    <div id="app">
      <h1>Enter Data</h1>
      <PostContainer />
      <FeedSection feedData={posts} remove={remove} />
    </div>
  );
}

const PostContainer = () => {
  return (
    <div className="post-container">
      <div className="post-header">
        <img className="post-avatar" src="avatar.jpg" alt="Your Avatar" />
        <div className="post-author">You</div>
      </div>
      <div className="post-content">
        <textarea
          className="post-input"
          placeholder="What's on your mind?"
        ></textarea>
      </div>
      <div className="post-actions">
        <button className="post-button">Post</button>
      </div>
    </div>
  );
};

const FeedSection = ({ feedData, remove }) => {
  return (
    <div className='feed'>
      {feedData.map( (e, i) => {
        return <Post author={e.author} avatar={e.avatar} time={e.time} content={e.content} image={e.image} postNumber={i + 1} id={e.id} remove={remove} key={e.id} />
      })}
    </div>
  );
};

const Post = ({ author, avatar, time, content, image, postNumber, id, remove }) => {
  return (
    <div className="post">
        <div className="post-header">
          <img
            className="post-avatar"
            src={avatar}
            alt={author}
          />
          <div>
            <div className="post-author">{author}</div>
            <div className="post-time">{time}</div>
          </div>
        </div>
      <div className="post-content">{content}</div>
      <img
          className="post-image"
          src={image}
          alt={'Post ' + postNumber }
        />
      <button onClick={() => remove(id)}>DELETE</button>
    </div>
  );
}

export default App;
