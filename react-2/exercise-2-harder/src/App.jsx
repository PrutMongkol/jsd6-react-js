import "./App.css";

function App() {

  const posts = [
    {
      author: "User 1",
      avatar: "https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_640.png",
      time: "2 hours ago",
      content: "This is my first post! 🎉",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
    },
    {
      author: "User 2",
      avatar: "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png",
      time: "4 hours ago",
      content: "Enjoying a beautiful day outdoors! ☀️",
      image: "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png"
    },
    {
      author: "User 3",
      avatar: "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png",
      time: "1 day ago",
      content: "Exploring new places and cultures. 🌍✈️",
      image: "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png"
    }
  ];

  return (
    <div id="app">
      <h1>Enter Data</h1>
      <PostContainer />
      <FeedSection feedData={posts} />
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

const FeedSection = ({ feedData }) => {
  return (
    <div className='feed'>
      <Post post={feedData[0]} />
      <Post post={feedData[1]} />
      <Post post={feedData[2]} />
    </div>
  );
};

const Post = ({ post }) => {
  return (
    <div className="post">
        <div className="post-header">
          <img
            className="post-avatar"
            src={post.avatar}
            alt={post.author}
          />
          <div>
            <div className="post-author">{post.author}</div>
            <div className="post-time">{post.time}</div>
          </div>
        </div>
      <div className="post-content">{post.content}</div>
      <img
          className="post-image"
          src={post.image}
          alt="Post 1"
        />
      <button>DELETE</button>
    </div>
  );
}

export default App;
