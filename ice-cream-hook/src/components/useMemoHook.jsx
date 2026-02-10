import { useState, useMemo } from "react";
import "./useMemoHook.css";

function MemoHook() {
  const [price, setPrice] = useState(20);
  const [other, setOther] = useState(0);

  const total = useMemo(() => {
    return price * 1.1;
  }, [price]);

  return (
    <div className="hook-item">
      <h3>5. useMemo: Tính tiền thuế</h3>
      <p>Tổng (gồm thuế): {total.toFixed(2)}$</p>

      <div className="button-group">
        <button onClick={() => setPrice(price + 10)}>Tăng giá</button>
        <button onClick={() => setOther(other + 1)}>
          Render khác ({other})
        </button>
      </div>
    </div>
  );
}
export default MemoHook;
