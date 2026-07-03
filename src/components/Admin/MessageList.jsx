import { useEffect, useState } from "react";
import api from "../../lib/api";

export default function MessageList() {
  const [messages,setMessages]=useState([]);

  const loadMessages=async()=>{
    const token=localStorage.getItem("token");
    const res=await api.get("/message",{headers:{Authorization:token}});
    setMessages(res.data.messages);
  };

  useEffect(()=>{loadMessages();},[]);

  const deleteMessage=async(id)=>{
    const token=localStorage.getItem("token");
    await api.delete(`/message/${id}`,{headers:{Authorization:token}});
    loadMessages();
  };

  return(
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">Messages</h2>

      {messages.map((m)=>(
        <div key={m.id} className="border rounded-xl p-4 mb-4">
          <h3 className="font-bold">{m.name} ({m.email})</h3>
          <p className="font-medium">{m.subject}</p>
          <p className="text-slate-600">{m.message}</p>

          <button
            onClick={()=>deleteMessage(m.id)}
            className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
