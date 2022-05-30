// import * as React from "react";
import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import style from "./card.module.css";
import LoginContext from "../../context/loginContext";
import PostContext from "../../context/postContext";

export default function BasicCard({ userId, postId, title, body }) {
  const { login } = useContext(LoginContext);
  const { posts, setPosts } = useContext(PostContext);
  const { pathname } = useLocation();

  // Post Delete
  const onDelete = async (postId) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "DELETE",
    })
      .then((resp) => {
        if (resp.status !== 200) {
          return;
        } else {
          setPosts(
            posts.filter((post) => {
              return (post.postId || post.id) !== postId;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlerDelete = () => {
    onDelete(postId);
  };
  return (
    <Card className={style.container}>
      <CardContent>
        <h1 className={style.title}>{title}</h1>
        <Typography className={style.body}>{body}</Typography>
      </CardContent>
      <div className={style.buttons}>
        {login ? (
          <>
            {pathname === "/" ? (
              <Link to={`/post-details/${postId}`}>
                <Button className={style.button} size="small">
                  Ver Post
                </Button>
              </Link>
            ) : null}
            <Button
              onClick={handlerDelete}
              className={style.button}
              size="small"
            >
              Eliminar Post
            </Button>
          </>
        ) : null}
      </div>
    </Card>
  );
}
