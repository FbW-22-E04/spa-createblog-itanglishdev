import React from "react";

export default function BlogForm({
  createPost,
  updateField,
  author,
  title,
  content,
}) {
  return (
    <form onSubmit={createPost}>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Username:</span>
        </div>
        <input
          identifier="author"
          onChange={updateField}
          type="text"
          className="form-control"
          value={author}
        />
      </div>

      <div className="input-group mb-3">
        <div className="input-group-append">
          <span className="input-group-text">Title:</span>
        </div>
        <input
          identifier="title"
          onChange={updateField}
          type="text"
          className="form-control"
          value={title}
        />
      </div>

      <div className="input-group mb-3">
        <div className="input-group-append">
          <span className="input-group-text">Content:</span>
        </div>
        <textarea
          identifier="content"
          onChange={updateField}
          className="form-control"
          value={content}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-success">
        Create a post
      </button>
    </form>
  );
}
