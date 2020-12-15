import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Posts from "../base/Posts";
import { FETCH_STATUS, fetchPosts, fetchPostById } from "./Reducer";

function PostsWrapper({ setPostId }) {
  const posts = useSelector((state) => state.posts);
  const postsFetchStatus = useSelector((state) => state.postsFetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const data = posts.map((post) => ({
    post,
    onClick: () => {
      dispatch(fetchPostById(post.id));
      setPostId(post.id);
    },
  }));

  return (
    <Posts
      data={data}
      error={{ message: "ERROR HANDLING NOT IMPLEMENTED" }}
      isLoading={postsFetchStatus === FETCH_STATUS.PENDING}
      isError={postsFetchStatus === FETCH_STATUS.REJECTED}
      isFetching={false}
    />
  );
}

export default PostsWrapper;
