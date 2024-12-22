import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import { fetchPosts, createPost } from '../features/postSlice';
import './post.css'
const PostList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, error } = useSelector((state: RootState) => state.posts);

  // State for the new post form
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostBody, setNewPostBody] = useState('');

 

  // Fetch posts on component mount
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Handle form submission
  const handleCreatePost = () => {
    if (newPostTitle && newPostBody) {
      dispatch(createPost({ title: newPostTitle, body: newPostBody }));
      setNewPostTitle('');
      setNewPostBody('');
      alert("New post added");
      window.scrollTo(0, document.body.scrollHeight);
    }
  };

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='container'>
      <h1>Posts</h1>
      <div className='container-form'>
        <h2 className='form-heading'>Create a New Post</h2>
        <input
          className='form-input'
          type="text"
          placeholder="Title"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
        />
        <textarea
          placeholder="Body"
          value={newPostBody}
          onChange={(e) => setNewPostBody(e.target.value)}
        />
        <button onClick={handleCreatePost}>Create Post</button>
      </div>
      <ul>
        {posts.map((post) => (
          <div className='post-card'>
              <li key={post.id}>
              <h2 className='post-title'>{post.title}</h2>
              <p className='post-body'>{post.body}</p>
          </li>
          </div>
          
        ))}
      </ul>
     
    </div>
  );
};

export default PostList;
