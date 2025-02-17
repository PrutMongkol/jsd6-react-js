import usePost from "./hook/usePost";
import { getUser } from "./hook/me";
import "./App.css";
import { useState } from "react";

function App() {
  const { get, remove, update, create } = usePost();
  const posts = get();
  const postsId = posts.map((element) => element.id);

  const createPost = (content, image) => {
    let id = `id-${Math.floor(Math.random() * 10000)}`; // generate id here by Math.random() (please use integer)
    let time = new Date().toDateString(); // generate timestamp here by (new Date().toDateString())
    const user = getUser();
    const data = {
      id: id,
      author: user.author,
      avatar: user.avatar,
      time: time,
      content: content,
      image: image,
    };
    create(data);
  };

  const updatePost = (content, image, id) => {
    let time = new Date().toDateString();
    const user = getUser();
    const data = {
      id: id,
      author: user.author,
      avatar: user.avatar,
      time: time,
      content: content,
      image: image,
    };
    update(data);
  };

  return (
    <div id="app">
      <h1>Enter Data</h1>
      <PostContainer create={createPost} update={updatePost} postsId={postsId} />
      <FeedSection posts={posts} removeHandler={remove} />
    </div>
  );
}

const PostContainer = ({ create, update, postsId }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState("");
  const [action, setAction] = useState("create");

  const createPostInPostContainer = () => {
    create(content, image);
  };

  const updatePostInPostContatainer = () => {
    update(content, image, id)
  };

  

  return (
    <>
      <div className="post-container">
        <button 
          className="post-button"
          onClick={() => setAction('create')}
          >
          Create
        </button>
        <span> </span>
        <button 
          className="post-button"
          onClick={() => setAction('update')}
          >
          Edit
        </button>
        { action === 'create' && (
            <div className="post-header">
              <img className="post-avatar" src="avatar.jpg" alt="Your Avatar" />
              <div className="post-author">You</div>
            </div>
          )
        }        
        <div className="post-content">
          { action === 'update' && (
            <select 
              name="postsId" 
              id="id-select"
              style={{marginBottom: '2px'}}
              onChange={(ev) => setId(ev.target.value)}>
                {
                  postsId.map((element) => {
                    return (<option value={element}>{element}</option>)
                  })
                }
            </select>
            )
          }
          
          <textarea
            className="post-input"
            placeholder="What's on your mind?"
            onChange={(ev) => setContent(ev.target.value)}
          ></textarea>
          <input
            className="post-input"
            type="text"
            placeholder="image"
            onChange={(ev) => setImage(ev.target.value)}
          />
        </div>
        <div className="post-actions">
          <button 
            className="post-button" 
            onClick={ action === 'create' ? createPostInPostContainer : updatePostInPostContatainer }>
            { action === 'create' ? 'Post' : 'Edit'}
          </button>
        </div>
      </div>    
    </>
  );
};

const FeedSection = ({ posts, removeHandler }) => {
  return (
    <div className="feed">
      {posts.map((post) => (
        <Post
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
