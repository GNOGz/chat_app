export default function ChatPerson(prop:any) {
  return (
    <div className="flex flex-col h-screen bg-[#F8F8F8] ">
      <div className="flex flex-col p-5 gap-5 mx-auto my-2">
        <img
          src="https://i.pinimg.com/736x/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg"
          alt="Cat Pic"
          className="rounded-full size-60"
        />
        <div className="text-3xl text-center">{"Now you are : "+prop.sender}</div>
      </div>
    </div>
  );
}
