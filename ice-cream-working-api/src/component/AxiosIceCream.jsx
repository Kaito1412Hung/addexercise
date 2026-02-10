import React, { useState } from "react";
import axios from 'axios'

const AxiosIceCream = () => {
    const [id, setId] = useState("");
    const [newName, setNewName] = useState("");
    const API = "http://localhost:1412/icecreams";

    const handleUpdate = () => {
        axios.patch(`${API}/${id}`, { name: newName })
        .then(res => {
            console.log("Dữ liệu phản hồi:", res.data);
            console.log(`Đã update ${id} thành ${newName}`);
            setId("");
            setNewName("");
        }).catch(err => console.error("Không tìm thấy id", err.data));
    };

    return (
        <div className="p-4 border-2 border-purple-200 rounded-xl bg-white m-2">
            <h2 className="text-xl font-bold text-purple-600 mb-4">Axios Update</h2>

            <div className="space-y-2">
                <input placeholder="ID cần sửa (vd: 1)" className="w-full border p-2 rounded text-sm" value={id} onChange={e => setId(e.target.value)}/>
                
                <input placeholder="Tên mới..."  className="w-full border p-2 rounded text-sm" value={newName} onChange={e => setNewName(e.target.value)}/>
                
                <button onClick={handleUpdate} className="w-full bg-purple-500 text-white py-2 rounded hover:opacity-90">
                    Cập nhật
                </button>
            </div>
        </div>
  );
}

export default AxiosIceCream;
