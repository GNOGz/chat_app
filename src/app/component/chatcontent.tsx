"use client";
import Chatbubble from "./chatbubble";
import { DB } from "../libs/db";
import { useState, useEffect } from "react";
import axios from "axios";
import { chatContentProp } from "../libs/types";

export default function ChatContent(prop:chatContentProp) {
  const [chatlist, setChatlist] = useState(DB.messages);
  const [textInput, setTextInput] = useState("");
  useEffect(() => {
    getChatData();
  }, []);
  const getChatData = async () => {
    await axios.get("./api/message").then((res) => {
      console.log(res.data.message);
      setChatlist(res.data.message);
    });
  };
  const enterMsg = async (msg: string, sender: string) => {
    await axios
      .post(`./api/message?sender=${sender}&message=${msg}`)
      .then((res) => {
        console.log(res.data.message);
        getChatData();
        setTextInput("");
      })
      .catch((err) => {
        alert(err);
      });
  };
  const buttonMsg = () => {
    enterMsg(textInput, prop.sender);
  };
  const updateTextInput = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setTextInput(event.target.value);
  }
  return (
    <div className="text-5xl col-span-3 p-5  flex flex-col bg-[#B4D2E7] h-screen">
      {chatlist.map((chat) => (
        <Chatbubble
          key={chat.text}
          text={chat.text}
          right={chat.sender == prop.sender}
        />
      ))}
      <div className="mx-auto my-auto flex gap-10">
        <input
          placeholder="send message here"
          type="text"
          className="text-center border border-solid rounded-lg"
          value={textInput}
          onChange={updateTextInput}
        />
        <button onClick={buttonMsg} className="bg-slate-400 p-5 rounded-lg ">
          Send
        </button>
      </div>
    </div>
  );
}
