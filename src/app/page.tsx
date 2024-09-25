"use client";
// import Navbar from "./component/navbar";
import ChatList from "./component/chatlist";
import ChatContent from "./component/chatcontent";
import ChatPerson from "./component/chatperson";
import { useState } from "react";
import { CiHome, CiMonitor } from "react-icons/ci";

export default function Home() {
  const [user,setUser] = useState("user1");
  const toggleUser = ()=>{
    if (user == "user1"){
      setUser("user2");
    }
    else{
      setUser("user1");
    }
  }
  return (
    <div>
      <div className="flex flex-row p-5 gap-8 max-h-28 bg-[#A1A6B4] ">
        <CiHome className="size-12"></CiHome>
        <CiMonitor className="size-12"></CiMonitor>
        <div className="text-blue-950 text-4xl">Chat App 101</div>
        <button onClick={toggleUser} className="bg-[#66bab6] text-lg p-3 rounded-lg">
          toggle user
        </button>
      </div>
      {/* Main Chat container */}
      <div className="grid grid-cols-5">
        <ChatList></ChatList>
        <ChatContent sender={user}></ChatContent>
        <ChatPerson sender={user}></ChatPerson>
      </div>
    </div>
  );
}
