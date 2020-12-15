import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./Reducer";
import PostWrapper from "./PostWrapper";
import PostsWrapper from "./PostsWrapper";

const store = configureStore({
  reducer,
});

function App() {
  const [postId, setPostId] = React.useState(-1);

  return (
    <Provider store={store}>
      <h1>Redux Toolkit</h1>
      <p>
        This implementation make use of Redux and Redux Thunks for fetching,
        synchronizing and updating server state.
      </p>
      <p>
        <strong>
          Despite the huge amount of boilerplate, this implementation miss Error
          Handling and Cache managment
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
    </Provider>
  );
}

export default App;
