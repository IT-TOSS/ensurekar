import crypto from 'crypto';

const WORKING_KEY = 'B3ACAE21142FBB1FA2E53B0C1C184486'; 

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
    
    const redirectUrl = data.order_status === 'Success' 
      ? `https://ensurekar.com/payment/success?data=${encodeURIComponent(encodedData)}`
      : `https://ensurekar.com/payment/cancel?data=${encodeURIComponent(encodedData)}`;

    // Use HTTP 302 redirect instead of HTML meta refresh
    return Response.redirect(redirectUrl, 302);
  } catch (error) {
    console.error('Payment Response Error:', error);

    return Response.redirect(
      `https://ensurekar.com/payment/cancel?reason=${encodeURIComponent(error.message || 'processing_failed')}`, 
      302
    );
  }
}
