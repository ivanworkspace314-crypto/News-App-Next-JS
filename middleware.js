import { NextResponse } from "next/server";

export function middleware(request){
  //forward the request to next destination
  console.log('middleware triggered');
  return NextResponse.next()
}
export const config={
  matcher:'/news'
}