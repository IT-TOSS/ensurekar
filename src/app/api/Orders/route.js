
import CreateConnection from './../../../lib/db.js';

export async function GET() {
    const data = {
        message: 'Hello i am Order Page i am Develop by Krishna',
        id:221,
    }
    return Response.json({ data })
}

// export async function POST(req) {
//   try {
//     const data = await req.json();

//     console.log('Received Order Request:', data);

//     const {
//       items, // array of items
//       customerInfo: { name, email, phone, address },
//       total,
//       paymentStatus = 'pending'
//     } = data;

//     const db = await CreateConnection();

//     const [result] = await db.execute(`
//       INSERT INTO orders 
//         (customer_name, email, phone, address, items, total, payment_status) 
//       VALUES (?, ?, ?, ?, ?, ?, ?)
//     `, [
//       name,
//       email,
//       phone,
//       address,
//       JSON.stringify(items), // store as JSON
//       total,
//       paymentStatus
//     ]);

//     return new Response(JSON.stringify({ success: true, orderId: result.insertId }));
//   } catch (err) {
//     console.error('Order insertion error:', err);
//     return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
//   }
// }


// import { CreateConnection } from '@/lib/db'; // adjust path if needed

// export async function POST(req) {
//   try {
//     const data = await req.json();

//     console.log('Received Order Request:', data);

//     const {
//       items = [], // default to empty array to prevent .map errors
//       customerInfo = {}, // fallback in case customerInfo is missing
//       total = 0,
//       paymentStatus = 'pending'
//     } = data;

//     const { name = '', email = '', phone = '', address = '' } = customerInfo;

//     // Validate items is actually an array
//     if (!Array.isArray(items)) {
//       throw new Error('Invalid or missing "items" array in request.');
//     }

//     const db = await CreateConnection();

//     const [result] = await db.execute(`
//       INSERT INTO orders 
//         (customer_name, email, phone, address, items, total, payment_status) 
//       VALUES (?, ?, ?, ?, ?, ?, ?)
//     `, [
//       name,
//       email,
//       phone,
//       address,
//       JSON.stringify(items), // store items as JSON
//       total,
//       paymentStatus
//     ]);

//     return new Response(
//       JSON.stringify({ success: true, orderId: result.insertId }),
//       { status: 200 }
//     );

//   } catch (err) {
//     console.error('Order insertion error:', err.message);
//     return new Response(
//       JSON.stringify({ success: false, error: err.message }),
//       { status: 500 }
//     );
//   }
// }



export async function POST(req) {
    try {
      const data = await req.json();
  
      console.log('Received Order Request:', data);
  
      const {
        items = [], // default to empty array to prevent .map errors
        customerInfo = {}, // fallback in case customerInfo is missing
        total = 0,
        paymentStatus = 'pending'
      } = data;
  
      const { name = '', email = '', phone = '', address = '' } = customerInfo;
  
      // Validate items is actually an array
      if (!Array.isArray(items)) {
        throw new Error('Invalid or missing "items" array in request.');
      }
  
      const db = await CreateConnection();
  
      const [result] = await db.execute(`
        INSERT INTO orders 
          (customer_name, email, phone, address, items, total, payment_status) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `, [
        name,
        email,
        phone,
        address,
        JSON.stringify(items), // store items as JSON
        total,
        paymentStatus
      ]);
  
      const orderId = result.insertId;
  
      console.log('Inserted Order ID:', orderId);
  
      return new Response(
        JSON.stringify({ success: true, id: orderId }),
        { status: 200 }
      );
  
    } catch (err) {
      console.error('Order insertion error:', err.message);
      return new Response(
        JSON.stringify({ success: false, error: err.message }),
        { status: 500 }
      );
    }
  }
  