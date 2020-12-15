import React from "react";
import ReactQueryApp from "./react-query/App";
import ReduxThunkApp from "./redux-thunk/App";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ padding: "20px", flex: 1 }}>
        <ReactQueryApp />
      </div>
      <div style={{ padding: "20px", flex: 1 }}>
        <ReduxThunkApp />
      </div>
    </div>
  );
}

export default App;
