import { useState, useCallback, memo } from "react";
import "./useCallBackHook.css";

const OrderButton = memo(({ onOrder }) => {
  return <button onClick={onOrder}>Xác nhận đặt kem</button>;
});

function CallbackHook() {
  const [count, setCount] = useState(0);
  const handleOrder = useCallback(() => {
    console.log("Đã đặt hàng thành công!");
  }, []);

  return (
    <div className="hook-item">
      <h3>6. useCallback: Tối ưu nút</h3>
      <p>Khách đang chờ: {count}</p>

      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>Thêm khách</button>
        <OrderButton onOrder={handleOrder} />
      </div>
    </div>
  );
}
export default CallbackHook;
