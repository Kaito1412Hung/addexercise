import React from "react";
import "./App.css";
import StateHook from "./components/useStateHook";
import EffectHook from "./components/useEffectHook";
import ReducerHook from "./components/useReducerHook";
import RefHook from "./components/useRefHook";
import MemoHook from "./components/useMemoHook";
import CallbackHook from "./components/useCallBackHook";

function App() {
  return (
    <div className="container">
      <h1 className="title">Ice Cream</h1>
      <div className="grid">
        <StateHook />
        <EffectHook />
        <ReducerHook />
        <RefHook />
        <MemoHook />
        <CallbackHook />
      </div>
    </div>
  );
}

export default App;
