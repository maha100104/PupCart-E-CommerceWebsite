"use client"

import { useAuth } from "@/context/AuthContext"

export default function AdminPage() {
  const { user } = useAuth()

  if (!user) {
    return <div className="text-red-600 p-6">Access Denied. Please sign in.</div>
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome, {user.displayName || user.email}</p>
      {/* Add stats like user count, recent signups, etc here */}
    </div>
  )
}
