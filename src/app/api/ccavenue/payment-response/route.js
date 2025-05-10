
//-----------------------------


// File: app/api/ccavenue/payment-response/route.js

// import crypto from 'crypto';

// const WORKING_KEY = '0187BDEA47CA90A12EEFACDFA5D3D900';

// function decrypt(encryptedText, workingKey) {
//   const m = crypto.createHash('md5');
//   m.update(workingKey);
//   const key = m.digest();
//   const iv = Buffer.from([...Array(16).keys()]);
//   const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
//   let decoded = decipher.update(encryptedText, 'hex', 'utf8');
//   decoded += decipher.final('utf8');
//   return decoded;
// }

// export async function POST(request) {
//   try {
//     const formData = await request.formData();
//     const encResp = formData.get('encResp')?.toString();

//     if (!encResp) {
//       throw new Error('No encResp received');
//     }

//     const decrypted = decrypt(encResp, WORKING_KEY);
//     const data = Object.fromEntries(new URLSearchParams(decrypted));
//     console.log('Decrypted CCAvenue Response:', data);

//     const successUrl = `https://ensurekar.com/payment/success?order_id=${data.order_id}&amount=${data.amount}`;
//     const cancelUrl = `https://ensurekar.com/payment/cancel?order_id=${data.order_id}&reason=${encodeURIComponent(data.failure_message || 'PaymentFailed')}`;

//     const finalRedirect = data.order_status === 'Success' ? successUrl : cancelUrl;

//     return new Response(`
//       <html>
//         <head>
//           <meta http-equiv="refresh" content="0;url=${finalRedirect}" />
//         </head>
//         <body style="font-family:sans-serif; text-align:center; padding-top:3rem;">
//           <p>Redirecting to <a href="${finalRedirect}">${finalRedirect}</a></p>
//         </body>
//       </html>
//     `, {
//       headers: { 'Content-Type': 'text/html' },
//     });
//   } catch (error) {
//     console.error('Payment Response Error:', error);
//     return new Response(`
//       <html>
//         <head>
//           <meta http-equiv="refresh" content="0;url=https://ensurekar.com/payment/cancel?reason=processing_failed" />
//         </head>
//         <body style="font-family:sans-serif; text-align:center; padding-top:3rem;">
//           <h2>Oops! Something went wrong.</h2>
//           <p>${error.message}</p>
//         </body>
//       </html>
//     `, {
//       headers: { 'Content-Type': 'text/html' },
//       status: 500
//     });
//   }
// }


// new code 

import crypto from 'crypto';

const WORKING_KEY = '0187BDEA47CA90A12EEFACDFA5D3D900'; 

function decrypt(encryptedText, workingKey) {
  const m = crypto.createHash('md5');
  m.update(workingKey);
  const key = m.digest();
  const iv = Buffer.from([...Array(16).keys()]); 
  const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
  let decoded = decipher.update(encryptedText, 'hex', 'utf8');
  decoded += decipher.final('utf8');
  return decoded;
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const encResp = formData.get('encResp')?.toString();

    if (!encResp) {
      throw new Error('No encResp received');
    }

    // Decrypt the response
    const decrypted = decrypt(encResp, WORKING_KEY);

    // Parse decrypted data into an object
    const data = Object.fromEntries(new URLSearchParams(decrypted));
    console.log('Decrypted CCAvenue Response:', data);

    // Encode all response data into base64
    const encodedData = Buffer.from(JSON.stringify(data)).toString('base64');

    //---------------------

    // Success or cancel URL with encoded data
    // const successUrl = `https://ensurekar.com/payment/success?data=${encodeURIComponent(encodedData)}`;
    // const cancelUrl = `https://ensurekar.com/payment/cancel?data=${encodeURIComponent(encodedData)}`;

    // const finalRedirect = data.order_status === 'Success' ? successUrl : cancelUrl;

    // // Send HTML with meta refresh
    // return new Response(`
    //   <html>
    //     <head>
    //       <meta http-equiv="refresh" content="0;url=${finalRedirect}" />
    //     </head>
    //     <body style="font-family:sans-serif; text-align:center; padding-top:3rem;">
    //       <p>Redirecting to <a href="${finalRedirect}">${finalRedirect}</a></p>
    //     </body>
    //   </html>
    // `, {
    //   headers: { 'Content-Type': 'text/html' },
    // });

     //----------------------------

    const redirectUrl = data.order_status === 'Success' 
      ? `https://ensurekar.com/payment/success?data=${encodeURIComponent(encodedData)}`
      : `https://ensurekar.com/payment/cancel?data=${encodeURIComponent(encodedData)}`;

    // Use HTTP 302 redirect instead of HTML meta refresh
    return Response.redirect(redirectUrl, 302);
  } catch (error) {
    console.error('Payment Response Error:', error);

    // return new Response(`
    //   <html>
    //     <head>
    //       <meta http-equiv="refresh" content="0;url=https://ensurekar.com/payment/cancel?reason=processing_failed" />
    //     </head>
    //     <body style="font-family:sans-serif; text-align:center; padding-top:3rem;">
    //       <h2>Oops! Something went wrong.</h2>
    //       <p>${error.message}</p>
    //     </body>
    //   </html>
    // `, {
    //   headers: { 'Content-Type': 'text/html' },
    //   status: 500
    // });

    return Response.redirect(
      `https://ensurekar.com/payment/cancel?reason=${encodeURIComponent(error.message || 'processing_failed')}`, 
      302
    );
  }
}
