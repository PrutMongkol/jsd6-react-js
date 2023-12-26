import "./App.css";

const App = (props) => {
  return (
    <>
      <PostContainer />
      <FeedSection />
    </>
  );
};

const PostContainer = (props) => {
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

const FeedSection = (props) => {
  return (
    <div class="feed">
      <div class="post">
        <div class="post-header">
          <img
            class="post-avatar"
            src="https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_640.png"
            alt="User 1"
          />
          <div>
            <div class="post-author">User 1</div>
            <div class="post-time">2 hours ago</div>
          </div>
        </div>
        <div class="post-content">This is my first post! 🎉</div>
        <img
          class="post-image"
          src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
          alt="Post 1"
        />
        <button>DELETE</button>
      </div>

      <div class="post">
        <div class="post-header">
          <img
            class="post-avatar"
            src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png"
            alt="User 2"
          />
          <div>
            <div class="post-author">User 2</div>
            <div class="post-time">4 hours ago</div>
          </div>
        </div>
        <div class="post-content">Enjoying a beautiful day outdoors! ☀️</div>
        <img
          class="post-image"
          src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png"
          alt="Post 2"
        />
        <button>DELETE</button>
      </div>

      <div class="post">
        <div class="post-header">
          <img
            class="post-avatar"
            src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png"
            alt="User 3"
          />
          <div>
            <div class="post-author">User 3</div>
            <div class="post-time">1 day ago</div>
          </div>
        </div>
        <div class="post-content">Exploring new places and cultures. 🌍✈️</div>
        <img
          class="post-image"
          src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png"
          alt="Post 3"
        />
        <button>DELETE</button>
      </div>
    </div>
  );
};


// const PostHeader = (props) => {
//   return (
//     <>
//       <img className="post-avatar" src={props.src} alt={props.alt} />
//       <div className="post-author">{props.author}</div>
//       (
//         props.postTime || (<div className='post-time'>{props.postTime}</div>)
//       )
//     </>
//   );
// };

// const PostContent = (props) => {
//   return (
//     <textarea
//       class="post-input"
//       placeholder="What's on your mind?"
//     >
//       {props.content}
//     </textarea>
//   );
// };

// const PostActions = (props) => {
//   return <button class="post-button">{props.action}</button>;
// }


// const Post = (props) => {
//   return (
//     <>
//       <PostHeader />
//       <PostContent />
//     </>
//   );
// };

export default App;