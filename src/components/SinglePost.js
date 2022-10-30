import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";

export default function SinglePost({ allPosts, postInfo, position }) {
  const params = useParams();
  const location = useLocation();

  let post = allPosts ? allPosts[params.postid] : postInfo;

  let shownBlog;
  let blogContent = post.blogContent;

  const isShowPage = location.pathname === "/show";

  console.log("is show page", isShowPage);

  if (isShowPage) {
    shownBlog =
      blogContent.length > 50 ? blogContent.substr(0, 50) + "..." : blogContent;
  } else {
    shownBlog = blogContent;
  }

  return (
    <div className="card my-2">
      <div className="card-header">
        <h3 className="title text-center">{post.blogTitle}</h3>
      </div>
      <div className="card-body">
        <p className="lead">
          {shownBlog} &nbsp;
          {isShowPage && (
            <NavLink to={"/singlepost/" + position}>
              Read the full article
            </NavLink>
          )}
        </p>
      </div>
      <div className="card-footer">
        <p className="lead">
          <strong>{post.blogAuthor} </strong>
          wrote at: {post.blogDate.getDate()}/{post.blogDate.getMonth() + 1}/
          {post.blogDate.getFullYear()} {post.blogDate.getHours()}:
          {post.blogDate.getMinutes()}
        </p>
      </div>
    </div>
  );
}
