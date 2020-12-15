import React from "react";

function Post({ data, isLoading, isError, error, isFetching }) {
  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : isError ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <>
            <h1>{data.title}</h1>
            <div>
              <p>{data.body}</p>
            </div>
          </>
          <div>{isFetching ? "Background Updating..." : " "}</div>
        </>
      )}
    </>
  );
}

export default Post;
