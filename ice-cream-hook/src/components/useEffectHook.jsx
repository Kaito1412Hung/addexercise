import { useState, useEffect } from "react";
import "./useEffectHook.css";

function EffectHook() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Bạn đang mua ${count} kem`;
  }, [count]);

  return (
    <div className="hook-item">
      <h3>2. useEffect: Cập nhật Title</h3>
      <p>Click để đổi tiêu đề trình duyệt</p>

      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>Tăng số lượng</button>
      </div>
    </div>
  );
}
export default EffectHook;
