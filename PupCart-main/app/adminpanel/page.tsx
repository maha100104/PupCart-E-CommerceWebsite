'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  orderId: string;
  date: string;
  items: OrderItem[];
  total: number;
  status: string;
  paymentMethod: string;
  trackingStatus: string[];
}

export default function AdminPanel() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [newTrackingStep, setNewTrackingStep] = useState<string>('');
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

useEffect(() => {
  const stored = localStorage.getItem('orders');
  if (stored) {
    const parsed: Order[] = JSON.parse(stored);
    const safeOrders = parsed.map((order) => ({
      ...order,
      trackingStatus: order.trackingStatus ?? [], 
    }));
    setOrders(safeOrders);
  }
}, []);


  const updateTrackingStatus = () => {
    if (!newTrackingStep || !selectedOrderId) return;

    const updatedOrders = orders.map(order =>
      order.orderId === selectedOrderId
        ? {
            ...order,
            trackingStatus: [...order.trackingStatus, newTrackingStep],
          }
        : order
    );

    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    setNewTrackingStep('');
    setSelectedOrderId(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold">🛠 Admin Order Tracking Panel</h1>
      {orders.map((order) => (
        <Card key={order.orderId} className="p-4 space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold">Order ID: {order.orderId}</span>
            <span className="text-sm text-gray-500">{order.date}</span>
          </div>

          <Separator />

          {order.items.map((item, i) => (
            <div key={i} className="flex justify-between">
              <p>{item.name} (x{item.quantity})</p>
              <p>₹{item.price * item.quantity}</p>
            </div>
          ))}

          <Separator />

          <p>Payment: {order.paymentMethod}</p>
          <p>Status: {order.status}</p>
         <p>
  Tracking:{" "}
  {(order.trackingStatus?.length ?? 0) > 0
    ? order.trackingStatus.join(" → ")
    : "No updates"}
</p>


          {selectedOrderId === order.orderId && (
            <div className="space-y-2">
              <Input
                placeholder="Enter new tracking status"
                value={newTrackingStep}
                onChange={(e) => setNewTrackingStep(e.target.value)}
              />
              <Button onClick={updateTrackingStatus}>Update Tracking</Button>
            </div>
          )}

          {selectedOrderId !== order.orderId && (
            <Button onClick={() => setSelectedOrderId(order.orderId)}>
              Add Tracking Update
            </Button>
          )}
        </Card>
      ))}
    </div>
  );
}
