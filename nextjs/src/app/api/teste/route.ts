import { Plan } from "@/app/model";

export async function GET(id: string = ""):Promise<Plan[]> {
  const response = await fetch(`${process.env.BACKEND_URL}/plano/${id}`, {
    cache:"no-cache"
  });
  const data = await response.json()
  return data.data;
}