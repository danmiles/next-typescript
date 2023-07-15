'use client';
import React, { useState } from 'react';
import styles from './useState.module.css';

type UserType = {
  sessionId: number;
  name: string;
};

const UseStateExample = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<UserType | null>(null);
  // OR
  // const [user, setUser] = useState<UserType>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({
      name: username,
      sessionId: Math.random(),
    });
  };

  
  return (
    <div className={styles.useStateExample}>
      <div className="container">
        {user ? (
          `${user.name} logged in`
        ) : (
          <form>
            <input type="text" placeholder="Username" onChange={handleChange} />
            <button onClick={handleClick}>Login</button>
          </form>
        )}
        {/* BE AWARE */}
        {user?.name}
      </div>
    </div>
  );
};

export default UseStateExample;
