// You do not need to do anything in this file
import React, { useState } from "react";

const CommentInput = (props) => {
  console.log("add comment", props);
  return (
    <form className="comment-form" onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.addcomment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentInput;
