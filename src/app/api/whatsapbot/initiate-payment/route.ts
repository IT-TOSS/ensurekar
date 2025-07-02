// import { type NextRequest, NextResponse } from "next/server"
// import crypto from "crypto"

// // CCAvenue credentials - UPDATE THESE WITH YOUR ACTUAL CREDENTIALS
// const MERCHANT_ID = "2064927"
// const ACCESS_CODE = "AVTB18KB63AS79BTSA"
// const WORKING_KEY = "B3ACAE21142FBB1FA2E53B0C1C184486"

// // URLs for redirect after payment completion
// const REDIRECT_URL = `https://ensurekar.com/api/whatsapbot/payment-response`

// const CANCEL_URL = `https://ensurekar.com/whatsapbot/PaymentFailed`

// // Encrypt function for CCAvenue parameters
// function encrypt(plainText: string, workingKey: string): string {
//   try {
//     console.log("🔐 Starting encryption process...")
//     console.log("Working key length:", workingKey.length)
//     console.log("Plain text length:", plainText.length)

//     // Create MD5 hash of working key (CCAvenue standard)
//     const m = crypto.createHash("md5")
//     m.update(workingKey)
//     const key = m.digest() // 128-bit key (16 bytes)

//     // Create IV as Buffer with values [0,1,2,...,15] (CCAvenue standard)
//     const ivArray: number[] = [];
//     for (let i = 0; i < 16; i++) {
//       ivArray.push(i);
//     }
//     const iv = Buffer.from(ivArray);

//     console.log("Key details:", {
//       keyLength: key.length,
//       ivLength: iv.length,
//       keyHex: key.toString("hex").substring(0, 8) + "...",
//     })

//     // Use createCipheriv instead of deprecated createCipher
//     const cipher = crypto.createCipheriv("aes-128-cbc", key, iv)
//     cipher.setAutoPadding(true)

//     let encrypted = cipher.update(plainText, "utf8", "hex")
//     encrypted += cipher.final("hex")

//     console.log("✅ Encryption successful:", {
//       encryptedLength: encrypted.length,
//       preview: encrypted.substring(0, 50) + "...",
//     })

//     return encrypted
//   } catch (error : any) {
//     console.error("❌ Encryption error:", {
//       error: error.message,
//       keyLength: workingKey.length,
//       plainTextLength: plainText.length,
//     })
//     throw new Error(`Encryption failed: ${error.message}`)
//   }
// }

// export async function POST(request: NextRequest) {
//   console.log("🚀 === PAYMENT INITIATION START ===")

//   try {
//     // Parse request body
//     const requestBody = await request.json()
//     const { billingData, orderData, panNumber } = requestBody

//     console.log("📋 Request data received:", {
//       hasBillingData: !!billingData,
//       hasOrderData: !!orderData,
//       hasPanNumber: !!panNumber,
//     })

//     // Validate required data
//     if (!billingData || !orderData || !panNumber) {
//       return NextResponse.json({ error: "Missing required payment data" }, { status: 400 })
//     }

//     // Format the amount and order ID
//     const formattedAmount = Number.parseFloat(orderData.amount || "1.00").toFixed(2)
//     const orderId = orderData.orderNumber || `ORD${Date.now()}`

//     console.log("💰 Payment details:", {
//       orderId,
//       amount: formattedAmount,
//       panNumber: panNumber.substring(0, 5) + "****",
//     })

//     // Validate credentials before proceeding
//     console.log("🔑 Using credentials:", {
//       merchantId: MERCHANT_ID,
//       accessCode: ACCESS_CODE.substring(0, 4) + "****",
//       workingKeyLength: WORKING_KEY.length,
//     })

//     // Create merchant parameter object for CCAvenue
//     const merchantParams = {
//       merchant_id: MERCHANT_ID,
//       order_id: orderId,
//       currency: orderData.currency || "INR",
//       amount: formattedAmount,
//       redirect_url: REDIRECT_URL,
//       cancel_url: `${CANCEL_URL}?orderId=${orderId}&amount=${formattedAmount}`,
//       language: "EN",
//       billing_name: billingData.billingName || "Test User",
//       billing_address: billingData.address || "Test Address",
//       billing_city: billingData.city || "Test City",
//       billing_state: billingData.state || "Test State",
//       billing_zip: billingData.zipCode || "123456",
//       billing_country: billingData.country || "India",
//       billing_email: billingData.email || "test@example.com",
//       billing_tel: billingData.mobile || "9999999999",
//       merchant_param1: panNumber,
//       merchant_param2: JSON.stringify({
//         timestamp: new Date().toISOString(),
//         source: "whatsapp_bot",
//       }),
//       delivery_name: billingData.billingName || "Test User",
//       delivery_address: billingData.address || "Test Address",
//       delivery_city: billingData.city || "Test City",
//       delivery_state: billingData.state || "Test State",
//       delivery_zip: billingData.zipCode || "123456",
//       delivery_country: billingData.country || "India",
//       delivery_tel: billingData.mobile || "9999999999",
//     }

//     console.log("📦 Merchant params prepared:", {
//       orderId: merchantParams.order_id,
//       amount: merchantParams.amount,
//       merchantId: merchantParams.merchant_id,
//       billingName: merchantParams.billing_name,
//     })

//     // Convert to query string
//     const merchantParamStr = Object.entries(merchantParams)
//       .map(([key, value]) => `${key}=${encodeURIComponent(value || "")}`)
//       .join("&")

//     console.log("🔗 Payment string created:")
//     console.log("Length:", merchantParamStr.length)
//     console.log("Preview:", merchantParamStr.substring(0, 200) + "...")

//     // Encrypt the data
//     const encryptedData = encrypt(merchantParamStr, WORKING_KEY)

//     // 🎯 IMPORTANT: Use PRODUCTION URL since you have production credentials
//     const formUrl = "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"


//     console.log("🌐 CCAvenue details:", {
//       formUrl,
//       encryptedDataLength: encryptedData.length,
//       accessCode: ACCESS_CODE,
//     })

//     const response = {
//       success: true,
//       encryptedData,
//       accessCode: ACCESS_CODE,
//       formUrl,
//       orderId: merchantParams.order_id,
//       amount: merchantParams.amount,
//       merchantId: MERCHANT_ID,
//       debug: {
//         timestamp: new Date().toISOString(),
//         encryptionMethod: "AES-128-CBC",
//         paymentDataLength: merchantParamStr.length,
//         encryptedDataLength: encryptedData.length,
//       },
//     }

//     console.log("✅ Payment initiation successful for order:", merchantParams.order_id)
//     console.log("🚀 === PAYMENT INITIATION END ===")

//     return NextResponse.json(response)
//   } catch (error : any) {
//     console.error("❌ === PAYMENT INITIATION ERROR ===")
//     console.error("Error:", error.message)
//     console.error("Stack:", error.stack)

//     return NextResponse.json(
//       {
//         error: error instanceof Error ? error.message : "Failed to initiate payment",
//         debug: {
//           errorMessage: error.message,
//           timestamp: new Date().toISOString(),
//         },
//       },
//       { status: 500 },
//     )
//   }
// }


import { type NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

// This is a pure API route handler - NOT a Server Action
export async function POST(request: NextRequest) {
  try {
    console.log("🔄 CCAvenue Payment Response Handler Called")
    console.log("Request method:", request.method)
    console.log("Request URL:", request.url)
    console.log("Request headers:", Object.fromEntries(request.headers.entries()))

    // Get the raw body as text first
    const body = await request.text()
    console.log("Raw body received:", body.substring(0, 200) + "...")

    // Parse the form data
    const params = new URLSearchParams(body)
    const encResponse = params.get("encResp")

    if (!encResponse) {
      console.error("❌ No encrypted response received")
      const failureUrl = `https://ensurekar.com/whatsapbot/PaymentFailed?error=${encodeURIComponent("No response received")}`
      return NextResponse.redirect(failureUrl)
    }

    console.log("📦 Encrypted response received:", {
      length: encResponse.length,
      preview: encResponse.substring(0, 50) + "...",
    })

    const workingKey = process.env.CCAVENUE_WORKING_KEY || "B3ACAE21142FBB1FA2E53B0C1C184486"

    // Decrypt the response
    console.log("🔓 Starting decryption...")
    const decryptedResponse = decrypt(encResponse, workingKey)
    console.log("✅ Response decrypted successfully")

    const responseData = parseResponseData(decryptedResponse)
    console.log("📊 Payment response parsed:")
    console.log("Order ID:", responseData.order_id)
    console.log("Status:", responseData.order_status)
    console.log("Amount:", responseData.amount)

    // Log the full response for debugging
    console.log("🔍 Full payment response:", responseData)

    // Update payment status in database
    await updatePaymentStatus(responseData)

    // Create redirect URLs with full domain
    const baseUrl = "https://ensurekar.com"

    // Redirect based on payment status
    if (responseData.order_status === "Success") {
      const successUrl = new URL("/whatsapbot/PaymentSuccessful", baseUrl)
      successUrl.searchParams.set("orderId", responseData.order_id || "")
      successUrl.searchParams.set("amount", responseData.amount || "")
      successUrl.searchParams.set("trackingId", responseData.tracking_id || "")
      successUrl.searchParams.set("paymentMethod", "CCAvenue")

      console.log("✅ Payment successful, redirecting to:", successUrl.toString())
      return NextResponse.redirect(successUrl.toString())
    } else {
      const failureUrl = new URL("/whatsapbot/PaymentFailed", baseUrl)
      failureUrl.searchParams.set("orderId", responseData.order_id || "")
      failureUrl.searchParams.set("amount", responseData.amount || "")
      failureUrl.searchParams.set(
        "error",
        responseData.failure_message || responseData.status_message || "Payment failed",
      )
      failureUrl.searchParams.set("paymentMethod", "CCAvenue")

      console.log("❌ Payment failed, redirecting to:", failureUrl.toString())
      return NextResponse.redirect(failureUrl.toString())
    }
  } catch (error : any ) {
    console.error("❌ Error processing payment response:", error)
    console.error("Error stack:", error.stack)

    const errorUrl = `https://ensurekar.com/whatsapbot/PaymentFailed?error=${encodeURIComponent(`Payment processing error: ${error.message}`)}`
    return NextResponse.redirect(errorUrl)
  }
}

// Handle GET requests as well
export async function GET(request: NextRequest) {
  try {
    console.log("🔄 CCAvenue GET Response Handler Called")

    const url = new URL(request.url)
    const encResponse = url.searchParams.get("encResp")

    if (!encResponse) {
      console.error("❌ No encrypted response in GET parameters")
      const failureUrl = `https://ensurekar.com/whatsapbot/PaymentFailed?error=${encodeURIComponent("No response received")}`
      return NextResponse.redirect(failureUrl)
    }

    console.log("📦 Encrypted response from GET:", {
      length: encResponse.length,
      preview: encResponse.substring(0, 50) + "...",
    })

    const workingKey = process.env.CCAVENUE_WORKING_KEY || "B3ACAE21142FBB1FA2E53B0C1C184486"

    // Decrypt the response
    const decryptedResponse = decrypt(encResponse, workingKey)
    console.log("✅ GET Response decrypted successfully")

    const responseData = parseResponseData(decryptedResponse)
    console.log("📊 GET Payment response parsed for order:", responseData.order_id)

    // Update payment status in database
    await updatePaymentStatus(responseData)

    const baseUrl = "https://ensurekar.com"

    // Redirect based on payment status
    if (responseData.order_status === "Success") {
      const successUrl = new URL("/whatsapbot/PaymentSuccessful", baseUrl)
      successUrl.searchParams.set("orderId", responseData.order_id || "")
      successUrl.searchParams.set("amount", responseData.amount || "")
      successUrl.searchParams.set("trackingId", responseData.tracking_id || "")
      successUrl.searchParams.set("paymentMethod", "CCAvenue")

      console.log("✅ GET Payment successful, redirecting to success page")
      return NextResponse.redirect(successUrl.toString())
    } else {
      const failureUrl = new URL("/whatsapbot/PaymentFailed", baseUrl)
      failureUrl.searchParams.set("orderId", responseData.order_id || "")
      failureUrl.searchParams.set("amount", responseData.amount || "")
      failureUrl.searchParams.set(
        "error",
        responseData.failure_message || responseData.status_message || "Payment failed",
      )
      failureUrl.searchParams.set("paymentMethod", "CCAvenue")

      console.log("❌ GET Payment failed, redirecting to failure page")
      return NextResponse.redirect(failureUrl.toString())
    }
  } catch (error : any) {
    console.error("❌ Error processing GET payment response:", error)

    const errorUrl = `https://ensurekar.com/whatsapbot/PaymentFailed?error=${encodeURIComponent(`Payment processing error: ${error.message}`)}`
    return NextResponse.redirect(errorUrl)
  }
}

function decrypt(encryptedText: string, key: string): string {
  try {
    console.log("🔓 Starting decryption process...")

    // Create MD5 hash of working key (CCAvenue standard)
    const m = crypto.createHash("md5")
    m.update(key)
    const keyBuffer = m.digest() // 128-bit key (16 bytes)

    // Create IV as Buffer with values [0,1,2,...,15] (CCAvenue standard)
    const iv = Buffer.from(Array.from(Array(16).keys()))

    // Use createDecipheriv instead of deprecated createDecipher
    const decipher = crypto.createDecipheriv("aes-128-cbc", keyBuffer, iv)
    decipher.setAutoPadding(true)

    let decrypted = decipher.update(encryptedText, "hex", "utf8")
    decrypted += decipher.final("utf8")

    console.log("✅ Decryption successful")
    return decrypted
  } catch (error : any) {
    console.error("❌ Decryption error:", error.message)
    throw new Error(`Failed to decrypt payment response: ${error.message}`)
  }
}

function parseResponseData(responseString: string): Record<string, string> {
  const data: Record<string, string> = {}
  const pairs = responseString.split("&")

  console.log("🔍 Parsing response data:", {
    totalPairs: pairs.length,
  })

  pairs.forEach((pair) => {
    const [key, value] = pair.split("=")
    if (key && value !== undefined) {
      data[key] = decodeURIComponent(value)
    }
  })

  console.log("📋 Parsed data keys:", Object.keys(data))
  return data
}

async function updatePaymentStatus(responseData: Record<string, string>) {
  try {
    const logData = {
      orderId: responseData.order_id,
      status: responseData.order_status,
      trackingId: responseData.tracking_id,
      bankRefNo: responseData.bank_ref_no,
      amount: responseData.amount,
      currency: responseData.currency,
      paymentMode: responseData.payment_mode,
      cardName: responseData.card_name,
      statusMessage: responseData.status_message,
      failureMessage: responseData.failure_message,
      timestamp: new Date().toISOString(),
    }

    console.log("📊 Payment status logged:", logData)

    // TODO: Implement actual database update
    console.log("✅ Payment status logged successfully")
  } catch (error) {
    console.error("❌ Error updating payment status:", error)
    // Don't throw error here to avoid breaking the response flow
  }
}
