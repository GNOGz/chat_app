import { CiHome, CiMonitor } from "react-icons/ci";

export default function Navbar() {
  return (
    <div className="flex flex-row p-5 gap-8 max-h-28 bg-[#A1A6B4] ">
      <CiHome className="size-12"></CiHome>
      <CiMonitor className="size-12"></CiMonitor>
      <div className="text-blue-950 text-4xl">Chat App 101</div>
    </div>
  );
}
