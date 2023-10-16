import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const nestApiUrl = `http://localhost:8080/plano`;
// const nestApiUrl = `${process.env.BACKEND_URL}/plan`;

export async function GET() {
  const response = await fetch(`http://localhost:3000/api/v1/plano`, {
    cache: "no-cache"
  });
  const data = await response.json()
  return NextResponse.json(data.data);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const response = await fetch(nestApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const newPlan = await response.json()
  revalidateTag('planos');
  return NextResponse.json(newPlan);
}