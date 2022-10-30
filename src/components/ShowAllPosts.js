import React, { useEffect } from "react";

// Components
import SinglePost from "./SinglePost";

export default function ShowAllPosts({ changeSubmit, allPosts }) {
  useEffect(() => {
    changeSubmit();
  }, []);

  return (
    <>
      {allPosts.map((post, index) => (
        <SinglePost postInfo={post} position={index} key={index} />
      ))}
    </>
  );
}
