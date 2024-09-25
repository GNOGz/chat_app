import { chatPersonProp } from "../libs/types";
export default function ChatPerson(prop:chatPersonProp) {
  return (
    <div className="flex flex-col h-screen bg-[#F8F8F8] ">
      <div className="flex flex-col p-5 gap-5 mx-auto my-2">
        <img
          src={prop.imgLink}
          alt="Cat Pic"
          className="rounded-full size-60"
        />
        <div className="text-3xl text-center">{"Now you are : "+prop.sender}</div>
      </div>
    </div>
  );
}
