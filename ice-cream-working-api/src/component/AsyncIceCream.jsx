import React, { useState } from "react";

const AsyncIceCream = () => {
    const [name, setName] = useState("");
    const API = "http://localhost:1412/icecreams";

    const handleAdd = async () => {
        if(!name) {
            console.log("Bạn phải nhập tên kem");
        }

        const newIceCream = {
            name,
            price: "35000",
            img: "https://png.pngtree.com/png-clipart/20221022/original/pngtree-colorful-ice-cream-icon-png-image_8711982.png",
        };

        try {
            const reponse = await fetch(API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newIceCream),
            });

        if(reponse.ok) {
            console.log("Đã thêm thành công");
            setName("");
        }
        } catch {
            console.log("Lỗi khi thêm");
        }
    };

    return (
    <div className="p-4 border-2 border-yellow-200 rounded-xl bg-white m-2 shadow-sm">
      	<h2 className="text-xl font-bold text-yellow-600 mb-4">Async/Await Add</h2>

        <div className="flex flex-col gap-3">
            <input type="text" value={name}onChange={(e) => setName(e.target.value)} placeholder="Nhập tên kem mới..." 
            className="border-2 border-yellow-100 p-2 rounded outline-none focus:border-yellow-400"/>

            <button onClick={handleAdd} className="bg-yellow-500 text-white font-bold py-2 rounded hover:bg-yellow-600 shadow-lg transition-all">
                Thêm vào menu
            </button>
        </div>
    </div>
  );
}

export default AsyncIceCream;