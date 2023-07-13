import React from 'react';
import styles from '@/styles/components/PostCard.module.css';
import { PostProps } from '@/types/types';

const PostCard = ( props: PostProps ) => {
  return (
    <div key={props.id} className={styles.postCard}>
      <h1 className={styles.title} >{props.title}</h1>
      <p className={styles.body}>{props.body}</p>
    </div>
  );
};

export default PostCard;
