import { useReducer } from "react";
import "./useReducerHook.css";

const initialState = { flavor: "Vani", price: 10 };
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_VANI":
      return { flavor: "Vani", price: 10 };
    case "CHANGE_CHOCO":
      return { flavor: "Chocolate", price: 15 };
    default:
      return state;
  }
}

function ReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="hook-item">
      <h3>3. useReducer: Chọn vị kem</h3>
      <p>
        Vị: {state.flavor} - Giá: {state.price}$
      </p>

      <div className="button-group">
        <button onClick={() => dispatch({ type: "CHANGE_VANI" })}>Vani</button>
        <button onClick={() => dispatch({ type: "CHANGE_CHOCO" })}>
          Chocolate
        </button>
      </div>
    </div>
  );
}
export default ReducerHook;
