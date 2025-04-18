import { NextResponse } from 'next/server';
import CreateConnection from './../../../../lib/db.js';

async function updateOrderStatus(orderId, paymentId, status, customerInfo, items, total) {
  try {
    const db = await CreateConnection();

    const { name, email, phone, address } = customerInfo;

    console.log(customerInfo);

    const [result] = await db.execute(
      `UPDATE orders 
       SET customer_name = ?, email = ?, phone = ?, address = ?, items = ?, total = ?, payment_status = ? WHERE id = ?`,
      [name, email, phone, address, JSON.stringify(items), total, status, paymentId, orderId]
    );

    return result.affectedRows > 0;
  } catch (err) {
    console.error('Database update error:', err);
    return false;
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { orderId, paymentId, status, customerInfo, items, total } = body;

    if (!orderId || !paymentId || !status || !customerInfo || !items || !total) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const updated = await updateOrderStatus(orderId, paymentId, status, customerInfo, items, total);

    if (updated) {
      return NextResponse.json({ success: true, message: 'Order updated' });
    } else {
      return NextResponse.json({ success: false, message: 'Failed to update order' }, { status: 500 });
    }
  } catch (err) {
    console.error('Update error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
