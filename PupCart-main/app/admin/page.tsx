"use client"

import { useSession } from "next-auth/react"

interface AdminUser {
  name?: string | null
  email?: string | null
  image?: string | null
  role?: string | null
}

export default function AdminPage() {
  const { data: session } = useSession()
  const user = session?.user as AdminUser

  if (!user || user.role !== "admin") {
    return <div className="text-red-600 p-6">Access Denied. Admins only.</div>
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome, {user.name}</p>
      {/* Add stats like user count, recent signups, etc here */}
    </div>
  )
}
