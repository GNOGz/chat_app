"use client";
// import Navbar from "./component/navbar";
import ChatList from "./component/chatlist";
import ChatContent from "./component/chatcontent";
import ChatPerson from "./component/chatperson";
import { useState } from "react";
import { CiHome, CiMonitor } from "react-icons/ci";

export default function Home() {
  const [user, setUser] = useState("user1");
  const [imgLink, setImgLink] = useState(
    "https://i.pinimg.com/736x/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg"
  );

  const toggleUser = () => {
    if (user == "user1") {
      setUser("user2");
      setImgLink(
        "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg"
      );
    } else {
      setUser("user1");
      setImgLink(
        "https://i.pinimg.com/736x/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg"
      );
    }
  };

  return (
    <div>
      <div className="flex flex-row p-5 gap-8 max-h-28 bg-[#A1A6B4] ">
        <CiHome className="size-12"></CiHome>
        <CiMonitor className="size-12"></CiMonitor>
        <div className="text-blue-950 text-4xl">Chat App 101 : </div>
        <span className="text-blue-950 text-4xl">Now you're {user}</span>
        <img src={imgLink} className="size-20 rounded-lg" alt="some cat pic" />
        <button
          onClick={toggleUser}
          className="bg-[#66bab6] text-lg p-3 rounded-lg"
        >
          toggle user
        </button>
      </div>
      {/* Main Chat container */}
      {/* <div className="grid grid-cols-5 sm:flex md:flex"> */}
        <div className="md:hidden sm:hidden">
          <ChatList></ChatList>
        </div>
        <ChatContent sender={user}></ChatContent>
        <div className="sm:hidden md:hidden">
          <ChatPerson sender={user} imgLink={imgLink}></ChatPerson>
        </div>
      </div>
    // </div>
  );
}
