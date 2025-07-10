import { connectToDB } from "@/lib/mongodb"
import User from "@/models/User"

export async function GET() {
  await connectToDB()
  const users = await User.find()
  return new Response(JSON.stringify(users), { status: 200 })
}