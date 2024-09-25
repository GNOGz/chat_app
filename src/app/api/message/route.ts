import { DB } from "../../libs/db";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

//get all message exist
export const GET = async () => {
  return NextResponse.json({
    ok: true,
    message: DB.messages,
  });
};

export const POST = async (request: NextRequest) => {
  const message = request.nextUrl.searchParams.get("message");
  const sender = request.nextUrl.searchParams.get("sender");
  
  if(!message || !sender ){
    return NextResponse.json({
      ok : false,
      error : "please provide both message and sender",
      sender:sender,
      message:message
    }
  ,{
    status:400
  });
  }

  DB.messages.push({
    sender:sender,
    text:message
  });

  return NextResponse.json({
    ok: true,
    message: "POST message success",
  });
};
