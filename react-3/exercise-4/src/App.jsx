/* eslint-disable react/prop-types */
import { useState } from 'react';
import usePost from "./hook/usePost";
import { getUser } from "./hook/me";
import "./App.css";

function App() {
  const { get, remove, update, create } = usePost();
  const posts = get();

  const createPost = (content, image) => {
    let id = `id-${Math.floor(Math.random() * 10000)}`; // generate id here by Math.random() (please use integer)
    let time = new Date().toDateString(); // generate timestamp here by (new Date().toDateString())
    const user = getUser();

    if (!content) {
      alert("Please add some content.")
      return;
    } else if (!image) {
      alert("Please add image URL.")
      return;
    }

    let data = {
      id: id,
      author: user.author,
      avatar: user.avatar,
      time: time,
      content: content,
      image: image,
    };
    create(data);
  };

  return (
    <div id="app">
      <h1>Enter Data</h1>
      <PostContainer createPost={createPost} />
      <FeedSection posts={posts} removeHandler={remove} />
    </div>
  );
}

const PostContainer = ({ createPost }) => {
  const [content, setContent] = useState();
  const [image, setImage] = useState();

  const createPostInContainer = () => {
    createPost(content, image);
  }

  return (
    <div className="post-container">
      <div className="post-header">
        <img className="post-avatar" src="http://placekitten.com/50" alt="Your Avatar" />
        <div className="post-author">You</div>
      </div>
      <div className="post-content">
        <textarea
          className="post-input"
          placeholder="What's on your mind?"
          onChange={({ target }) => setContent(target.value)}
        ></textarea>
        <input
          className="post-input"
          type="text"
          placeholder="Image"
          onChange={({ target }) => setImage(target.value)}
        ></input>
      </div>
      <div className="post-actions">
        <button 
          className="post-button"
          onClick={createPostInContainer}
        >Post</button>
      </div>
    </div>
  );
};

const FeedSection = ({ posts, removeHandler }) => {
  return (
    <div className="feed">
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          author={post.author}
          avatar={post.avatar}
          time={post.time}
          content={post.content}
          image={post.image}
          removeHandler={removeHandler}
        />
      ))}
    </div>
  );
};

const Post = ({ id, author, avatar, time, content, image, removeHandler }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img className="post-avatar" src={avatar} alt="User 3" />
        <div>
          <div className="post-author">{author}</div>
          <div className="post-time">{time}</div>
        </div>
      </div>
      <div className="post-content">{content}</div>
      <img className="post-image" src={image} alt="Post 3" />
      <button onClick={() => removeHandler(id)}>DELETE</button>
    </div>
  );
};

export default App;
