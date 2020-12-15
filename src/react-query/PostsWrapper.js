import React from "react";
import api from "../api";
import { useQuery, useQueryClient } from "react-query";
import Posts from "../base/Posts";

function PostsWrapper({ setPostId }) {
  const queryClient = useQueryClient();
  const { data, error, isLoading, isError, isFetching } = useQuery(
    "posts",
    api.getPosts,
    {
      select: (data) =>
        data.map((post) => ({
          post,
          onClick: () => setPostId(post.id),
          // We can access the query data here to show bold links for
          // ones that are cached
          cachedLink: queryClient.getQueryData(["post", post.id]),
        })),
    }
  );

  return (
    <Posts
      data={data}
      error={error}
      isLoading={isLoading}
      isError={isError}
      isFetching={isFetching}
    />
  );
}

export default PostsWrapper;
