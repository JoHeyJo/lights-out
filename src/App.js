import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
      <div className="App">
        <Board nrows={9} ncols={9} chanceLightStartsOn={.75} />
      </div>
  );
}

export default App;
