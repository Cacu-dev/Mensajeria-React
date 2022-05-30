import { Link } from "react-router-dom";
import Modal from "../../components/Modal/modal";

//Styles
import styles from "./postDetailsPage.module.css";
import Card from "../../components/Card/card";
import { useContext, useState } from "react";
import PostContext from "../../context/postContext";
import LoginContext from "../../context/loginContext";

const PostDetailsPage = () => {
  const { posts } = useContext(PostContext);
  const [isOpen, setIsOpen] = useState(false);
  const { login } = useContext(LoginContext);

  return (
    <>
      <h1 className={styles.post_title}>POSTS</h1>
      <div className={styles.main_container}>
        {posts.map((info) => (
          <>
            <Card
              key={info.id}
              login={login}
              userId={info.userId}
              postId={info.postId || info.id}
              title={info.title}
              body={info.body}
            />
          </>
        ))}
      </div>
      <Modal
        titleBox={"COMENTAR"}
        titleButton={"Hacer un comentario"}
        // save={save}
        open={isOpen}
        setOpen={setIsOpen}
      />
      <div className={styles.button_container}>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </>
  );
};

export default PostDetailsPage;
