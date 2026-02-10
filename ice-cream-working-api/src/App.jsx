import AsyncIceCream from "./component/AsyncIceCream";
import AxiosIceCream from "./component/AxiosIceCream";
import FetchIceCream from "./component/FetchIceCream";

function App() {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-800 italic">
          Ice Cream Kaito Kid
        </h1>
        <p className="text-gray-600">Hệ thống quản lý cửa hàng Kem</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <FetchIceCream />
        <AsyncIceCream />
        <AxiosIceCream />
      </div>
    </div>
  );
}

export default App;
