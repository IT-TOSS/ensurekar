import { NextRequest, NextResponse } from 'next/server';
import { CreateConnection } from '../../../../config/database';

// ===========================================================
// 💳 PAYMENT RESPONSE UPDATE API (equivalent to orderidpost.php)
// ===========================================================

// Helper function to get value (matching PHP getVal function)
const getVal = (data: any, key: string): string | null => {
  const value = data[key];
  return value !== undefined && value !== '' && value !== 'null' && value !== null
    ? String(value)
    : null;
};

// ===========================================================
// ✅ POST (Update Order with Payment Response)
// ===========================================================
export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || '';

    let data: any = {};

    // Handle both JSON and form data
    if (contentType.includes('application/json')) {
      const input = await request.json();
      data = input.paymentData || input;
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData();
      data = Object.fromEntries(formData.entries());
    } else {
      // Try to parse as JSON first, fallback to form data
      try {
        const input = await request.json();
        data = input.paymentData || input;
      } catch {
        const formData = await request.formData();
        data = Object.fromEntries(formData.entries());
      }
    }

    console.log('Received payment response data:', data);

    // Extract fields using getVal helper
    const order_id = getVal(data, 'order_id');
    const tracking_id = getVal(data, 'tracking_id');
    const bank_ref_no = getVal(data, 'bank_ref_no');
    const order_status = getVal(data, 'order_status');
    const failure_message = getVal(data, 'status_message') || getVal(data, 'failure_message');
    const payment_mode = getVal(data, 'payment_mode');
    const currency = getVal(data, 'currency');
    const amount = getVal(data, 'amount');

    const billing_name = getVal(data, 'billing_name');
    const billing_address = getVal(data, 'billing_address');
    const billing_city = getVal(data, 'billing_city');
    const billing_state = getVal(data, 'billing_state');
    const billing_zip = getVal(data, 'billing_zip');
    const billing_country = getVal(data, 'billing_country');
    const billing_tel = getVal(data, 'billing_tel');
    const billing_email = getVal(data, 'billing_email');

    const merchant_param1 = getVal(data, 'merchant_param1');
    const payment_status = order_status;
    const delivery_status = order_status;
    const created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');

    // Validate order_id
    if (!order_id) {
      return NextResponse.json(
        { status: 'error', message: 'Missing order_id.' },
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

    const db = await CreateConnection();

    // Check if order_id exists and fetch existing order_status
    const checkQuery = 'SELECT order_status FROM orders WHERE order_id = ? LIMIT 1';
    const [checkRows]: any = await db.query(checkQuery, [order_id]);

    if (!Array.isArray(checkRows) || checkRows.length === 0) {
      return NextResponse.json(
        { status: 'not_found', message: 'Order ID not found.' },
        {
          status: 404,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },
        }
      );
    }

    const existing_order_status = checkRows[0]?.order_status;

    // Only update order_status if existing is null or empty
    const final_order_status =
      !existing_order_status || existing_order_status === '' ? order_status : existing_order_status;
    const final_payment_status = final_order_status;
    const final_delivery_status = final_order_status;

    // Update order
    const updateQuery = `
      UPDATE orders SET
        tracking_id = ?,
        bank_ref_no = ?,
        order_status = ?,
        failure_message = ?,
        payment_mode = ?,
        currency = ?,
        amount = ?,
        billing_name = ?,
        billing_address = ?,
        billing_city = ?,
        billing_state = ?,
        billing_zip = ?,
        billing_country = ?,
        billing_tel = ?,
        billing_email = ?,
        merchant_param1 = ?,
        payment_status = ?,
        delivery_status = ?,
        created_at = ?
      WHERE order_id = ?
    `;

    const updateValues = [
      tracking_id,
      bank_ref_no,
      final_order_status,
      failure_message,
      payment_mode,
      currency,
      amount,
      billing_name,
      billing_address,
      billing_city,
      billing_state,
      billing_zip,
      billing_country,
      billing_tel,
      billing_email,
      merchant_param1,
      final_payment_status,
      final_delivery_status,
      created_at,
      order_id,
    ];

    const [result]: any = await db.query(updateQuery, updateValues);

    console.log(`✅ Order ${order_id} updated successfully`);

    return NextResponse.json(
      { status: 'success', message: 'Order updated successfully.' },
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
    console.error('Error updating order with payment response:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: error instanceof Error ? error.message : 'Unknown error',
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

