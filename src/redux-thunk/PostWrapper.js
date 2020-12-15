import React from "react";
import { useSelector } from "react-redux";
import Post from "../base/Post";
import { FETCH_STATUS } from "./Reducer";

function PostWrapper({ postId }) {
  const currentPost = useSelector((state) => state.currentPost);
  const currentPostFetchStatus = useSelector(
    (state) => state.currentPostFetchStatus
  );

  /**
   *  PostId is not needed because the thunk is dispatched from Posts component, on elem click
   *  Thus, the way data is fetched and the component wich display it are separated
   */

  return (
    <Post
      data={currentPost}
      error={{ message: "ERROR HANDLING NOT IMPLEMENTED" }}
      isLoading={currentPostFetchStatus === FETCH_STATUS.PENDING}
      isError={currentPostFetchStatus === FETCH_STATUS.REJECTED}
      isFetching={false}
    />
  );
}

export default PostWrapper;
