import React from 'react';
import './App.css'
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='listitem list-group-item grid g-col-5'>
          <div className="row">
          <div className="cname col-sm-">{post.company.name}</div>
          <div className="name col-sm-"><h4>Contact</h4><p>{post.name}</p></div>
          <div className="city col-sm-"><h4>City</h4>{post.address.city}</div>
          <div className="street col-sm-"><h4>Street</h4>{post.address.street}</div>
          <div className="button col-sm-"><button>view details</button></div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Posts;