import React from "react";
import { useQuery } from "react-query";
import api from "../api";
import Post from "../base/Post";

function PostWrapper({ postId }) {
  const { data, error, isLoading, isError, isFetching } = useQuery(
    ["post", postId],
    () => api.getPostById(postId),
    {
      enabled: !!postId,
    }
  );

  return (
    <Post
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
      isFetching={isFetching}
    />
  );
}

export default PostWrapper;
