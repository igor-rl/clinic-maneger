import { NextResponse } from "next/server";

const nestApiUrl = `http://localhost:8080/plano`;
// const nestApiUrl = `${process.env.BACKEND_URL}/plan`;

interface PlanProps {
  params: {
    id: string;
  };
}

export default async function GET({ params }: PlanProps) {
  const response = await fetch(`http://localhost:3000/api/v1/plano/${params.id}`, {
    cache: "no-cache"
  });
  const data = await response.json()
  console.log(data)
  return NextResponse.json(data.data);
}