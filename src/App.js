import React, { useContext } from "react";
// Pages
import Blog from "./Pages";
import PostDetailsPage from "./Pages/PostDetailsPage/postDetailsPage";
import LoginPage from "./Pages/LoginPage/index";
// component
import Header from "./components/Header/header";
// import Footer from "./components/Footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Hook
import LoginContext from "./context/loginContext";
import { PostProvider } from "./context/postContext";
// Styles
import "./app.module.css";
import Error from "./Pages/ErrorPage/errorPage";

const App = () => {
  const { login } = useContext(LoginContext);
  return (
    <BrowserRouter>
      <PostProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/post-details/:postId"
            element={login ? <PostDetailsPage /> : <Error typeError={"403"} />}
          />
          <Route path="/*" element={<Error typeError={"404"} />} />
        </Routes>
        {/* <Footer /> */}
      </PostProvider>
    </BrowserRouter>
  );
};

export default App;
