// import { NextResponse } from 'next/server';
// import crypto from 'crypto';

// // Same credentials as in initiate-payment
// const WORKING_KEY = '0187BDEA47CA90A12EEFACDFA5D3D900';

// // Function to decrypt CCAvenue response
// function decrypt(encryptedText, workingKey) {
//   const m = crypto.createHash('md5');
//   m.update(workingKey);
//   const key = m.digest();
//   const iv = '\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f';
//   const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
//   let decoded = decipher.update(encryptedText, 'hex', 'utf8');
//   decoded += decipher.final('utf8');
//   return decoded;
// }

// export async function POST(request) {
//   try {
//     const formData = await request.formData();
//     const encResp = formData.get('encResp');

    
    
//     if (!encResp) {
//       console.error('No encrypted response received from CCAvenue');
//       return NextResponse.redirect(new URL('/payment/cancel?error=no_response', request.url));
//     }
    
//     // Decrypt the CCAvenue response
//     let decryptedResponse;
//     try {
//       decryptedResponse = decrypt(encResp, WORKING_KEY);
//       console.log('Decrypted CCAvenue response:', decryptedResponse);
//     } catch (decryptError) {
//       console.error('Failed to decrypt CCAvenue response:', decryptError);
//       return NextResponse.redirect(new URL('/payment/cancel?error=decrypt_failed', request.url));
//     }
    
//     // Parse the response string into an object
//     const responseParams = {};
//     decryptedResponse.split('&').forEach(param => {
//       const parts = param.split('=');
//       if (parts.length === 2) {
//         const [key, value] = parts;
//         responseParams[key] = decodeURIComponent(value);
//       }
//     });
    
//     console.log('Parsed payment response:', responseParams);
    
//     // Check payment status
//     if (responseParams.order_status === 'Success') {
//       // Update your order status in database - use try/catch to continue even if this fails
//       try {
//         const updateResponse = await fetch(`${request.nextUrl.origin}/api/orders/update-status`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             orderId: responseParams.order_id,
//             paymentId: responseParams.tracking_id,
//             status: 'paid'
//           }),
//         });
        
//         if (!updateResponse.ok) {
//           console.warn('Order status update failed, but payment was successful');
//         }
//       } catch (error) {
//         console.error('Error updating order:', error);
//         // Continue to success page anyway
//       }
      
//       // Redirect to success page with order ID
//       return NextResponse.redirect(
//         new URL(`/payment/success?order_id=${responseParams.order_id}&tracking_id=${responseParams.tracking_id || ''}`, request.url)
//       );
//     } else {
//       // Payment failed or cancelled
//       console.log('Payment failed:', responseParams.order_status);
      
//       // Update order status to failed/cancelled in database
//       try {
//         await fetch(`${request.nextUrl.origin}/api/orders/update-status`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             orderId: responseParams.order_id,
//             status: 'payment_failed',
//             failureReason: responseParams.failure_message || responseParams.order_status
//           }),
//         }).catch(err => {
//           // Just log the error and continue
//           console.error('Order status update error:', err);
//         });
//       } catch (error) {
//         console.error('Error updating order status:', error);
//         // Continue to cancel page anyway
//       }
      
//       // Redirect to cancel page
//       return NextResponse.redirect(
//         new URL(`/payment/cancel?order_id=${responseParams.order_id}&reason=${encodeURIComponent(responseParams.failure_message || responseParams.order_status || 'unknown')}`, request.url)
//       );
//     }
//   } catch (error) {
//     console.error('Error processing CCAvenue response:', error);
//     return NextResponse.redirect(new URL('/payment/cancel?error=processing_failed', request.url));
//   }
// }



// // File: app/api/ccavenue/payment-response/route.js

// import { NextResponse } from 'next/server';
// import crypto from 'crypto';

// // Same credentials as in initiate-payment
// const WORKING_KEY = '0187BDEA47CA90A12EEFACDFA5D3D900';

// // Function to decrypt CCAvenue response - fixed to match encryption
// function decrypt(encryptedText, workingKey) {
//   const m = crypto.createHash('md5');
//   m.update(workingKey);
//   const key = m.digest();
  
//   // Create proper IV for CCAvenue (16 bytes)
//   const iv = Buffer.from('\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f', 'binary');
  
//   const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
//   let decoded = decipher.update(encryptedText, 'hex', 'utf8');
//   decoded += decipher.final('utf8');
//   return decoded;
// }

// export async function POST(request) {
//   try {
//     const formData = await request.formData();
//     const encResp = formData.get('encResp');
    
//     if (!encResp) {
//       console.error('No encrypted response received from CCAvenue');
//       return NextResponse.redirect(new URL('/payment/cancel?error=no_response', request.url));
//     }
    
//     // Decrypt the CCAvenue response
//     let decryptedResponse;
//     try {
//       decryptedResponse = decrypt(encResp, WORKING_KEY);
//       console.log('Decrypted CCAvenue response:', decryptedResponse);
//     } catch (decryptError) {
//       console.error('Failed to decrypt CCAvenue response:', decryptError);
//       return NextResponse.redirect(new URL('/payment/cancel?error=decrypt_failed', request.url));
//     }
    
//     // Parse the response string into an object
//     const responseParams = {};
//     decryptedResponse.split('&').forEach(param => {
//       const parts = param.split('=');
//       if (parts.length === 2) {
//         const [key, value] = parts;
//         responseParams[key] = decodeURIComponent(value);
//       }
//     });
    
//     console.log('Parsed payment response:', responseParams);
    
//     // Check payment status
//     if (responseParams.order_status === 'Success') {
//       // Update your order status in database
//       try {
//         const updateResponse = await fetch(`${request.nextUrl.origin}/api/Orders/update-status`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             orderId: responseParams.order_id,
//             paymentId: responseParams.tracking_id,
//             status: 'paid'
//           }),
//         });
        
//         if (!updateResponse.ok) {
//           console.warn('Order status update failed, but payment was successful');
//         }
//       } catch (error) {
//         console.error('Error updating order:', error);
//         // Continue to success page anyway
//       }
      
//       // Redirect to success page with order ID
//       return NextResponse.redirect(
//         new URL(`/payment/success?order_id=${responseParams.order_id}&tracking_id=${responseParams.tracking_id || ''}`, request.url)
//       );
//     } else {
//       // Payment failed or cancelled
//       console.log('Payment failed:', responseParams.order_status);
      
//       // Update order status to failed/cancelled in database
//       try {
//         await fetch(`${request.nextUrl.origin}/api/Orders/update-status`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             orderId: responseParams.order_id,
//             status: 'payment_failed',
//             failureReason: responseParams.failure_message || responseParams.order_status
//           }),
//         }).catch(err => {
//           console.error('Order status update error:', err);
//         });
//       } catch (error) {
//         console.error('Error updating order status:', error);
//       }
      
//       // Redirect to cancel page
//       return NextResponse.redirect(
//         new URL(`/payment/cancel?order_id=${responseParams.order_id}&reason=${encodeURIComponent(responseParams.failure_message || responseParams.order_status || 'unknown')}`, request.url)
//       );
//     }
//   } catch (error) {
//     console.error('Error processing CCAvenue response:', error);
//     return NextResponse.redirect(new URL('/payment/cancel?error=processing_failed', request.url));
//   }
// }



// ----------------------------------


import { NextResponse } from 'next/server';
import { decrypt } from '@/lib/ccavenue/decrypt'; // your decrypt function
import CreateConnection from '@/lib/db'; // your DB connection file

const WORKING_KEY = '0187BDEA47CA90A12EEFACDFA5D3D900';

export async function POST(request) {
  const formData = await request.formData();
  console.log('CCAvenue Payment Response:', formData);
  console.log('CCAvenue Payment Response:', formData.get('encResp'));
  const encResp = formData.get('encResp')?.toString();

  if (!encResp) {
    return NextResponse.redirect(new URL('/payment/cancel?error=NoResponse', request.url));
  }

  try {
    const decrypted = decrypt(encResp, WORKING_KEY);
    const data = Object.fromEntries(new URLSearchParams(decrypted));
    console.log('CCAvenue Payment Data:', data);

    // OPTIONAL: Save payment data into database
    // const db = await CreateConnection();
    // await db.execute(
    //   `INSERT INTO ccavenue_transactions (order_id, tracking_id, bank_ref_no, order_status, amount, billing_email) VALUES (?, ?, ?, ?, ?, ?)`,
    //   [
    //     data.order_id || '',
    //     data.tracking_id || '',
    //     data.bank_ref_no || '',
    //     data.order_status || '',
    //     data.amount || 0,
    //     data.billing_email || ''
    //   ]
    // );

    if (data.order_status === 'Success') {
      return NextResponse.redirect(
        new URL(`/payment/success?order_id=${data.order_id}&amount=${data.amount}`, request.url)
      );
    } else {
      return NextResponse.redirect(
        new URL(`/payment/cancel?order_id=${data.order_id}&reason=${encodeURIComponent(data.failure_message || 'PaymentFailed')}`, request.url)
      );
    }
  } catch (error) {
    console.error('Error decrypting CCAvenue response:', error);
    return NextResponse.redirect(new URL('/payment/cancel?error=DecryptFailed', request.url));
  }
}