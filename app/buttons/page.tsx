'use client'
import React from 'react';
import styles from './buttons.module.css';

export default function page() {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('clicked');
  };


  return (
    <div className="container">
      <h1>Buttons</h1>
      <div className={styles.buttons}>
        <button onClick={handleClick} className="button-main">Button</button>
        <button className="button-main">Button</button>
        <button className="button-main">Button</button>
      </div>
    </div>
  );
}
