import { useRef } from "react";
import "./useRefHook.css";

function RefHook() {
  const inputRef = useRef();
  const handleFocus = () => inputRef.current.focus();

  return (
    <div className="hook-item">
      <h3>4. useRef: Ghi chú</h3>
      <input ref={inputRef} placeholder="Nhập yêu cầu thêm..." />

      <div className="button-group">
        <button onClick={handleFocus}>Viết ghi chú</button>
      </div>
    </div>
  );
}
export default RefHook;
