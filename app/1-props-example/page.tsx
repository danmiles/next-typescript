import React from 'react';
import PostCard from '@/components/PostCard';
import styles from './post.module.css'
import { PostProps } from '@/types/types';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!res.ok) {
    throw new Error('Something went wrong fetching data from `jsonplaceholder');
  }
  return res.json();
}

const page = async () => {
  const data = await getData();
  return (
    <div className="container">
      <h1>Posts</h1>
      <div className={styles.posts}>
        {data.map((post: PostProps) => (
          <PostCard id={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
};

export default page;
