import React from "react";
import ReactQueryApp from "./react-query/App";
import ReduxThunkApp from "./react-query/App";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ padding: "20px" }}>
        <ReactQueryApp />
      </div>
      <div style={{ padding: "20px" }}>
        <ReduxThunkApp />
      </div>
    </div>
  );
}

export default App;
