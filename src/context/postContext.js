import React, { useState } from "react";

const PostContext = React.createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState();
  const [inputs, setInputs] = useState({ title: "", comment: "" });

  const value = {
    posts,
    setPosts,
    comment,
    setComment,
    inputs,
    setInputs,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export default PostContext;
