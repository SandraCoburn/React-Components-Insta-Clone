// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = (props) => {
  console.log("propes comments", props);
  // Add state for the comments
  const [comments, seetComments] = useState();
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {props.comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}

      <CommentInput />
    </div>
  );
};

export default CommentSection;
