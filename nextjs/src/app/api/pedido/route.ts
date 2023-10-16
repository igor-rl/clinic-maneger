import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const nestApiUrl = `${process.env.FAKE_API_URL}/pedido`;
const headers = {
  "Content-Type": "application/json"
}

export async function GET(id: string) {
  const response = await fetch(nestApiUrl, {
    next: {
      tags: ["planos"]
    },
    cache:"force-cache"
  });
  return NextResponse.json(response);
}

export async function POST(request: NextRequest) {
  console.log("\n\nola?")
  const body = await request.json();
  const response = await fetch(nestApiUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });
  const newPlan = await response.json()
  return NextResponse.json(newPlan);
}