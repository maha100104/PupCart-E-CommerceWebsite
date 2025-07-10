"use client"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface OrderItem {
  name: string
  quantity: number
  price: number
}

interface Order {
  orderId: string
  date: string
  items: OrderItem[]
  total: number
  status: string
  paymentMethod: string
  trackingStatus: string[]  // tracking history
}

export default function MyOrdersSection() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const storedOrders = localStorage.getItem("orders")
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders))
    }
  }, [])

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">🧾 My Orders</h2>
      {orders.length === 0 ? (
        <p className="text-sm text-gray-500">You have not placed any orders yet.</p>
      ) : (
        orders.map((order) => (
          <Card key={order.orderId} className="p-4 space-y-2">
            <div className="flex justify-between">
              <span className="font-semibold">Order ID: {order.orderId}</span>
              <span className="text-sm text-gray-500">{order.date}</span>
            </div>

            <p className="text-sm text-gray-600">Payment Mode: {order.paymentMethod}</p>
            <Separator />

            {order.items.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
                <p>₹{(item.quantity * item.price).toFixed(2)}</p>
              </div>
            ))}
            <Separator />

            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>₹{order.total.toFixed(2)}</span>
            </div>

            <p className="text-sm text-green-600">Status: {order.status}</p>

            {/* Optional: tracking status as steps */}
            <div className="text-sm mt-2">
              <p className="font-semibold">📦 Tracking:</p>
              {/* <ul className="list-disc pl-5 text-gray-600">
                {order.trackingStatus.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul> */}
              <div className="flex flex-wrap gap-2 items-center text-sm mt-2">
  {["Order Placed", "Shipped", "Out for Delivery", "Delivered"].map((step, i) => {
    const isCompleted = (order.trackingStatus ?? []).includes(step)

    return (
      <div key={i} className="flex items-center">
        <span className={isCompleted ? "text-green-600 font-semibold" : "text-gray-400"}>
          {isCompleted ? "🟢" : "⚪"} {step}
        </span>
        {i < 3 && <span className="mx-2 text-gray-300">→</span>}
      </div>
    )
  })}
</div>

            </div>
          </Card>
        ))
      )}
    </div>
  )
}