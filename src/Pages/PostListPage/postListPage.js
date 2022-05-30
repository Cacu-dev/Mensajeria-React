import Card from "../../components/Card/card";
import styles from "./postListPage.module.css";
import Modal from "../../components/Modal/modal";
import { useContext, useEffect, useState } from "react";
import LoginContext from "../../context/loginContext";
import PostContext from "../../context/postContext";

const PostListPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(1);
  const { inputs, posts, setPosts } = useContext(PostContext);
  const { login, user } = useContext(LoginContext);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 2)));
  }, []);

  // Un post contiene la siguiente estructura
  // { userId: string;   id: number;   title: string;   body: string;}

  // Función para capturar valores de los inputs
  const save = async () => {
    setId(id + 1);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        userId: user.id,
        postId: id,
        title: inputs.title,
        body: inputs.comment,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => json);
    setPosts([...posts, response]);
    setIsOpen(false);
  };
  console.log(posts);

  return (
    <>
      <div className={styles.main_container}>
        {posts.map((info) => (
          <>
            <Card
              key={info.id}
              userId={info.userId}
              postId={info.postId || info.id}
              title={info.title}
              body={info.body}
            />
          </>
        ))}
      </div>

      {login ? (
        <Modal
          titleBox={"POST"}
          titleButton={"Crear Post"}
          save={save}
          open={isOpen}
          setOpen={setIsOpen}
        />
      ) : null}
    </>
  );
};
export default PostListPage;
