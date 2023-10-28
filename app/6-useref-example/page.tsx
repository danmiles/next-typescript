"use client";
import React, { useEffect, useRef } from "react";
import styles from "./useRef.module.css";

const UseRefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleClick = () => {
    console.log("username is: " + usernameInputRef.current?.value);
  };

  return (
  <div className={styles.useRefExample}>
      <input ref={inputRef} type="text" placeholder="focus here" />
      <label className={styles.label} htmlFor="user-name">User name show in console</label>
      <input id="user-name" ref={usernameInputRef} type="text" placeholder="username show in console" />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};

export default UseRefExample;
