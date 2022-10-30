import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Components
import NavList from "./NavList";
import BlogForm from "./BlogForm";
import Home from "./Home";
import ShowAllPosts from "./ShowAllPosts";
import SinglePost from "./SinglePost";

export default function App() {
  const [state, setState] = useState({
    authorValue: "",
    blogTitle: "",
    blogContent: "",
    allPosts: [],
    date: undefined,
    formSubmitted: false,
  });

  const changeField = (event) => {
    switch (event.target.getAttribute("identifier")) {
      case "author":
        setState({ ...state, authorValue: event.target.value });
        break;
      case "title":
        setState({ ...state, blogTitle: event.target.value });
        break;
      case "content":
        setState({ ...state, blogContent: event.target.value });
        break;
    }
  };

  const changeSubmitToFalse = () => {
    setState({ ...state, formSubmitted: false });
  };

  const createPost = (event) => {
    const currentDate = new Date();
    event.preventDefault();
    const tempPosts = [...state.allPosts];
    tempPosts.push({
      blogAuthor: state.authorValue,
      blogTitle: state.blogTitle,
      blogContent: state.blogContent,
      blogDate: currentDate,
    });

    setState({
      allPosts: tempPosts,
      authorValue: "",
      blogTitle: "",
      blogContent: "",
      date: currentDate,
      formSubmitted: true,
    });
  };

  return (
    <BrowserRouter>
      <NavList />
      <div className="container">
        <div className="jumbotron">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/create"
              element={
                <BlogForm
                  author={state.authorValue}
                  title={state.blogTitle}
                  content={state.blogContent}
                  createPost={createPost}
                  updateField={changeField}
                />
              }
            />
            <Route
              path="/show"
              element={
                <ShowAllPosts
                  changeSubmit={changeSubmitToFalse}
                  allPosts={state.allPosts}
                />
              }
            />
            <Route
              path="/singlepost/:postid"
              element={<SinglePost allPosts={state.allPosts} />}
            />
          </Routes>
          {state.formSubmitted ? <Navigate to="/show" /> : null}
        </div>
      </div>
    </BrowserRouter>
  );
}
