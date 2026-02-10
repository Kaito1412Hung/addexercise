import { useState } from "react";
import "./useStateHook.css"

function StateHook() {
  const [count, setCount] = useState(0);
  return (
    <div className="hook-item">
      <h3>1. useState: Chọn số lượng</h3>
      <p>Số lượng: {count} que</p>

      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>Thêm 1 cây</button>
        <button onClick={() => setCount(0)}>Xóa giỏ hàng</button>
      </div>
    </div>
  );
}
export default StateHook;
