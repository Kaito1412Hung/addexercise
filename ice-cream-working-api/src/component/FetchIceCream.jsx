import React, { useState, useEffect } from "react";

const FetchIceCream = () => {
    const [items, setItems] = useState([]);

    const API = "http://localhost:1412/icecreams";

    const loadData = () => {
        fetch(API)
        .then(res => res.json())
        .then(data => setItems(data))
        .catch(err => console.log("Lỗi", err));
    }

    useEffect(() => {
        loadData();
    }, []);

    const handleDelete = (id) => {
        fetch(`${API}/${id}`, { method: 'DELETE' })
        .then(() => {
            setItems(items.filter(item => item.id !== id));
        });
    };

    return (
        <div className="p-4 border-2 border-pink-200 rounded-xl bg-white m-2">
            <h2 className="text-xl font-bold text-pink-600 mb-4">Fetch API</h2>

            <ul className="space-y-3">
                {items.map(item => (
                    <li key={item.id} className="flex items-center gap-4 bg-pink-50 p-3 rounded ice-cream-item">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg border"/>

                    <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-blue-500 font-bold">{item.price} VNĐ</p>
                    </div>

                    <button onClick={() => handleDelete(item.id)} className="bg-red-400 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                        Xóa
                    </button>
                    </li>
                ))}
            </ul>

            <button onClick={loadData} className="mt-4 w-full bg-pink-400 text-white py-2 rounded shadow-md">Làm mới danh sách</button>
        </div>
    );
};

export default FetchIceCream;