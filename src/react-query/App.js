/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import PostWrapper from "./PostWrapper";
import PostsWrapper from "./PostsWrapper";

const queryClient = new QueryClient();

function App() {
  const [postId, setPostId] = React.useState(-1);

  return (
    <QueryClientProvider client={queryClient}>
      <h1>React Query</h1>
      <p>
        As you visit the posts below, you will notice them in a loading state
        the first time you load them. However, after you return to this list and
        click on any posts you have already visited again, you will see them
        load instantly and background refresh right before your eyes!{" "}
      </p>
      <p>
        <strong>
          You may need to throttle your network speed to simulate longer loading
          sequences and see the difference between isLoading and isFetching (in
          background)
        </strong>
      </p>
      {postId > -1 ? (
        <div>
          <div>
            <a onClick={() => setPostId(-1)} href="#">
              Back
            </a>
          </div>
          <PostWrapper postId={postId} />
        </div>
      ) : (
        <PostsWrapper setPostId={setPostId} />
      )}
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
