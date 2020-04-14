// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = (props) => {
  const [comments, setComments] = useState(props.comments);
  const [addcomment, setAddcomment] = useState();
  console.log("propes comments", props);
  // Add state for the comments
  const submitComment = (event) => {
    event.preventDefault();
    // props.comments.push(addcomment);
    setComments([...comments, { username: "sandra", text: addcomment }]);
    console.log("submit event", event);
    setAddcomment("");
  };
  const changeComment = (e) => {
    console.log("changeComment", e.target.value);
    setAddcomment(e.target.value);
  };

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map((comment, index) => {
        return <Comment key={index} comment={comment} />;
      })}

      <CommentInput
        addcomment={addcomment}
        comments={props.comments}
        submitComment={submitComment}
        changeComment={changeComment}
      />
    </div>
  );
};

export default CommentSection;
