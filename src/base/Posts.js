import React from "react";

function Posts({ isLoading, isError, isFetching, error, data }) {
  console.log(isLoading, isError);
  return (
    <div>
      <h1>Posts</h1>
      <div>
        {isLoading ? (
          "Loading..."
        ) : isError ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div>
              {data.map(({ post, onClick, cachedLink }) => {
                return (
                  <p key={post.id}>
                    <a
                      onClick={onClick}
                      href="#"
                      style={
                        cachedLink
                          ? {
                              fontWeight: "bold",
                              color: "green",
                            }
                          : {}
                      }
                    >
                      {post.title}
                    </a>
                  </p>
                );
              })}
            </div>
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Posts;
