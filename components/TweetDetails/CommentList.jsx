import React from "react";
import Comment from "./Comment";

function CommentList({ comments }) {
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;
