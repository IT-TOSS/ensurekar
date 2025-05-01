// // File: app/api/ccavenue/initiate-payment/route.js

// import { NextResponse } from 'next/server';
// import crypto from 'crypto';
// import axios from 'axios';

// export async function GET(req, { params }) {
//   return Response.json({
//     message: `You hit initiate-payment for ${params.serviceRoute}`,
//   });
// }
// // CCAvenue credentials - store these in environment variables in production
// const MERCHANT_ID = '2064927'; 
// const ACCESS_CODE = 'AVTB18KB63AS79BTSA'; 
// const WORKING_KEY = '0187BDEA47CA90A12EEFACDFA5D3D900';

// // URLs for redirect after payment completion  //6BD6040DF585C3B1E524422B603652E8
// const REDIRECT_URL = "https://ensurekar.com/api/ccavenue/payment-response"
// /* true //process.env.NODE_ENV === 'production' 
//   ? 'https://ensurekar.com/payment/success' 
//   : 'http://localhost:3000/payment/success';*/
// const CANCEL_URL = "https://ensurekar.com/api/ccavenue/payment-response"
// /* true //process.env.NODE_ENV === 'production'
//   ? 'https://ensurekar.com/payment/cancel'
//   : 'http://localhost:3000/payment/cancel';*/

// // Encrypt function for CCAvenue parameters

// function encrypt(plainText, workingKey) {
//   const m = crypto.createHash('md5');
//   m.update(workingKey);
//   const key = m.digest(); // 128-bit key
//   const iv = Buffer.from([...Array(16).keys()]); // [0,1,...15]
//   const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
//   let encrypted = cipher.update(plainText, 'utf8', 'hex');
//   encrypted += cipher.final('hex');
//   return encrypted;
// }

// export async function POST(request) {
//   try {
//     const body = await request.json();

//     console.log('Received Payment Request:', body);
//     const { amount, orderId, customerInfo, products } = body;
    

//     console.log(customerInfo," customerInfo")
//     // Format the amount to 2 decimal places
//     const formattedAmount = parseFloat(amount).toFixed(2);
    
//     // Create product description from cart items
//     const productDescription = products
//       .map(p => `${p.name} x ${p.quantity}`)
//       .join(', ');
    
//     // Create a merchant parameter string for CCAvenue
//     const merchantParams = {
//       merchant_id: MERCHANT_ID,
//       order_id: orderId,
//       currency: 'INR',
//       amount: formattedAmount,
//       redirect_url: REDIRECT_URL,
//       cancel_url: CANCEL_URL,
//       language: 'EN',
//       billing_name: customerInfo.name,
//       billing_address: customerInfo.address,
//       billing_city: '',  // Add if available
//       billing_state: '', // Add if available
//       billing_zip: '',   // Add if available
//       billing_country: 'India',
//       billing_email: customerInfo.email,
//       billing_tel: customerInfo.phone,
//       merchant_param1: orderId,  // You can use these merchant params
//       merchant_param2: productDescription, // to store additional info
//       delivery_name: customerInfo.name,    // Include delivery details
//       delivery_address: customerInfo.address,
//       delivery_city: '',
//       delivery_state: '',
//       delivery_zip: '',
//       delivery_country: 'India',
//       delivery_tel: customerInfo.phone,
//     };
    
//     // Convert the object to a string format that CCAvenue accepts
//     let merchantParamStr = Object.entries(merchantParams)
//       .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
//       .join('&');

//       console.log('Merchant Params:', merchantParamStr);
    
//     // Encrypt the merchant parameters using the working key
//     const encryptedData = encrypt(merchantParamStr, WORKING_KEY);


    
//     // The URL where the form should be submitted
//     // Use test URL in development environment
//     const formUrl = process.env.NODE_ENV === 'production'  
//       ? 'https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction'
//       : 'https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction';

//       // const pay1 = {

//       //   access_code : 'AVTB18KB63AS79BTSA', 
//       //   merchant_id: MERCHANT_ID,
//       //   order_id: "123456",
//       //  //  WORKING_KEY : '6BD6040DF585C3B1E524422B603652E8',
 
//       //  //  currency: 'INR',
//       //  //  amount: formattedAmount,
//       //   redirect_url: REDIRECT_URL,
//       //   cancel_url: CANCEL_URL,
//       // }
//       // axios.post('https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction', pay1 )
//       //  .then((response) => { console.log(response.data, "  Working Key Is vaild i comake for Test"); })
//       //  .catch((error) => { console.error(error," Working Credentials or Error incoming form test"); });
    
    


//     return NextResponse.json({
//       success: true,
//       encryptedData,
//       accessCode: ACCESS_CODE,
//       formUrl
//     });
//   } catch (error) {
//     console.error('CCAvenue API Error:', error);
//     return NextResponse.json({
//       success: false,
//       message: 'Failed to process payment request'
//     }, { status: 500 });
//   }
// }

// File: app/api/ccavenue/initiate-payment/route.js

import { NextResponse } from 'next/server';
import crypto from 'crypto';

// CCAvenue credentials - ideally store in .env
const MERCHANT_ID = '2064927';
const ACCESS_CODE = 'AVTB18KB63AS79BTSA';
const WORKING_KEY = '0187BDEA47CA90A12EEFACDFA5D3D900';

const REDIRECT_URL = 'https://ensurekar.com/api/ccavenue/payment-response';
const CANCEL_URL = 'https://ensurekar.com/api/ccavenue/payment-response';

function encrypt(plainText, workingKey) {
  const m = crypto.createHash('md5');
  m.update(workingKey);
  const key = m.digest();
  const iv = Buffer.from([...Array(16).keys()]);
  const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
  let encrypted = cipher.update(plainText, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { amount, orderId, customerInfo, products } = body;

    const formattedAmount = parseFloat(amount).toFixed(2);
    const productDescription = products.map(p => `${p.name} x ${p.quantity}`).join(', ');

    const merchantParams = {
      merchant_id: MERCHANT_ID,
      order_id: orderId,
      currency: 'INR',
      amount: formattedAmount,
      redirect_url: REDIRECT_URL,
      cancel_url: CANCEL_URL,
      language: 'EN',
      billing_name: customerInfo.name,
      billing_address: customerInfo.address,
      billing_city: customerInfo.city || 'City',
      billing_state: customerInfo.state || 'State',
      billing_zip: customerInfo.zip || '000000',
      billing_country: 'India',
      billing_email: customerInfo.email,
      billing_tel: customerInfo.phone,
      merchant_param1: orderId,
      merchant_param2: productDescription,
      delivery_name: customerInfo.name,
      delivery_address: customerInfo.address,
      delivery_city: customerInfo.city || 'City',
      delivery_state: customerInfo.state || 'State',
      delivery_zip: customerInfo.zip || '000000',
      delivery_country: 'India',
      delivery_tel: customerInfo.phone,
    };

    const merchantParamStr = Object.entries(merchantParams)
      .map(([key, value]) => `${key}=${encodeURIComponent(value || '')}`)
      .join('&');

    const encryptedData = encrypt(merchantParamStr, WORKING_KEY);

    const formUrl = process.env.NODE_ENV === 'production'
      ? 'https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction'
      : 'https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction';

    return NextResponse.json({
      success: true,
      encryptedData,
      accessCode: ACCESS_CODE,
      formUrl,
    });
  } catch (error) {
    console.error('CCAvenue API Error:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to process payment request',
      error: error.message,
    }, { status: 500 });
  }
}
