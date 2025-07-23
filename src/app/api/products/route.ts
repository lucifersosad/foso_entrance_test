import { NextRequest, NextResponse } from "next/server";
const PRIORITY = ["low", "medium", "high"];
const STATUS = ["todo", "in-progress", "completed"];

const randomItem = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)]

// In-memory task list
let products = Array(16).fill(0).map((item, index) => {
  return ({
    id: index + 1, 
    name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)',
    price_old: 329000,
    price_new: 299000,
    sale: 10,
    hot: true,
    image: ''
  })
})

// GET: Fetch all tasks
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  // const limit = parseInt(searchParams.get("limit") || "20");

  const delay = (ms: number) => {
      return new Promise(resolve => setTimeout(resolve, ms)) 
    }
    
    const delayTime = Math.floor(Math.random() * 2 + 1) * 1000;
    
    await delay(delayTime);
    
  let newProducts = products

  return NextResponse.json({
    data: newProducts,
    total: newProducts.length,
    // delayTime
  }, { status: 200 });
}