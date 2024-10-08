import { bubbleContent } from "../libs/types";

export default function Chatbubble(prop:bubbleContent) {
  const pos:string = prop.right?" text-right": " ";
  return (
    <div className={"py-8 " + pos}>
    <span className={ ("border rounded-md border-solid p-3 m-5 text-black ") 
      + (prop.right?" border-indigo-600 bg-[#8b91da]":"border-black bg-[#cfd1e9]")
    }>
      {prop.text}
    </span>
    </div>

  );
}
