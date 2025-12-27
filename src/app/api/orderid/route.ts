import { NextRequest, NextResponse } from 'next/server';
import { CreateConnection } from '../../../../config/database';
import crypto from 'crypto';

// ===========================================================
// 📦 CREATE ORDER API (equivalent to orderid.php)
// ===========================================================

// Generate unique order ID (matching PHP format)
const generateOrderId = (): string => {
  const prefix = 'ORD';
  const randomPart = crypto.randomBytes(4).toString('hex').toUpperCase(); // 8-char random
  const timestamp = Math.floor(Date.now() / 1000); // Unix timestamp
  return `${prefix}${timestamp}${randomPart}`;
};

// ===========================================================
// ✅ POST (Create Order)
// ===========================================================
export async function POST(request: NextRequest) {
  try {
    const input = await request.json();

    const customerInfo = input?.customerInfo ?? null;
    const items = input?.items ?? [];

    // Validate input
    if (!customerInfo || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Invalid input' },
        {
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },
        }
      );
    }

    // Generate unique order ID
    const orderId = generateOrderId();
    console.log('Generated Order ID:', orderId);

    const db = await CreateConnection();

    // Loop through each item and insert into orders table
    for (const item of items) {
      const insertQuery = `
        INSERT INTO orders (
          order_id,
          customer_name, 
          customer_email, 
          customer_phone, 
          customer_address,
          item_id, 
          item_name, 
          item_price, 
          item_quantity, 
          item_subtotal,
          image_src, 
          image_height, 
          image_width, 
          total_amount
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const values = [
        orderId,
        customerInfo.name || '',
        customerInfo.email || '',
        customerInfo.phone || '',
        customerInfo.address || '',
        item.id || '',
        item.name || '',
        parseFloat(item.price) || 0,
        parseInt(item.quantity) || 0,
        parseFloat(item.subtotal) || 0,
        item.image?.src || '',
        parseInt(item.image?.height) || 0,
        parseInt(item.image?.width) || 0,
        parseFloat(item.subtotal) || 0,
      ];

      await db.query(insertQuery, values);
      console.log(`Inserted order item: ${item.name} for order ${orderId}`);
    }

    console.log(`✅ Successfully created order ${orderId} with ${items.length} item(s)`);

    return NextResponse.json(
      {
        status: 'success',
        order_id: orderId,
      },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      {
        error: 'Failed to create order',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  }
}

// ===========================================================
// ✅ OPTIONS (CORS Preflight)
// ===========================================================
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}

