// File: app/api/ccavenue/initiate-payment/route.js

import { NextResponse } from 'next/server';
import crypto from 'crypto';

// CCAvenue credentials - store these in environment variables in production
const MERCHANT_ID = '2064927'; 
const ACCESS_CODE = 'AVTB18KB63AS79BTSA';
const WORKING_KEY = '6BD6040DF585C3B1E524422B603652E8';

// URLs for redirect after payment completion
const REDIRECT_URL =  '' //process.env.NODE_ENV === 'production' 
  ? 'https://ensurekar.com/payment/success' 
  : 'http://localhost:3000/payment/success';
const CANCEL_URL =  '' //process.env.NODE_ENV === 'production'
  ? 'https://ensurekar.com/payment/cancel'
  : 'http://localhost:3000/payment/cancel';

// Encrypt function for CCAvenue parameters
function encrypt(plainText, workingKey) {
  const m = crypto.createHash('md5');
  m.update(workingKey);
  const key = m.digest();
  const iv = '\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f';
  const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
  let encoded = cipher.update(plainText, 'utf8', 'hex');
  encoded += cipher.final('hex');
  return encoded;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { amount, orderId, customerInfo, products } = body;
    
    // Format the amount to 2 decimal places
    const formattedAmount = parseFloat(amount).toFixed(2);
    
    // Create product description from cart items
    const productDescription = products
      .map(p => `${p.name} x ${p.quantity}`)
      .join(', ');
    
    // Create a merchant parameter string for CCAvenue
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
      billing_city: '',  // Add if available
      billing_state: '', // Add if available
      billing_zip: '',   // Add if available
      billing_country: 'India',
      billing_email: customerInfo.email,
      billing_tel: customerInfo.phone,
      merchant_param1: orderId,  // You can use these merchant params
      merchant_param2: productDescription, // to store additional info
      delivery_name: customerInfo.name,    // Include delivery details
      delivery_address: customerInfo.address,
      delivery_city: '',
      delivery_state: '',
      delivery_zip: '',
      delivery_country: 'India',
      delivery_tel: customerInfo.phone,
    };
    
    // Convert the object to a string format that CCAvenue accepts
    let merchantParamStr = Object.entries(merchantParams)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');
    
    // Encrypt the merchant parameters using the working key
    const encryptedData = encrypt(merchantParamStr, WORKING_KEY);
    
    // The URL where the form should be submitted
    // Use test URL in development environment
    const formUrl = process.env.NODE_ENV === 'production'
      ? 'https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction'
      : 'https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction';
    
    return NextResponse.json({
      success: true,
      encryptedData,
      accessCode: ACCESS_CODE,
      formUrl
    });
  } catch (error) {
    console.error('CCAvenue API Error:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to process payment request'
    }, { status: 500 });
  }
}