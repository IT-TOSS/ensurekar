import { type NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

// CCAvenue credentials - UPDATE THESE WITH YOUR ACTUAL CREDENTIALS
const MERCHANT_ID = "2064927"
const ACCESS_CODE = "AVTB18KB63AS79BTSA"
const WORKING_KEY = "B3ACAE21142FBB1FA2E53B0C1C184486"

// URLs for redirect after payment completion
const REDIRECT_URL = `https://ensurekar.com/api/whatsapbot/payment-response`

const CANCEL_URL = `https://ensurekar.com/whatsapbot/PaymentFailed`

// Encrypt function for CCAvenue parameters
function encrypt(plainText: string, workingKey: string): string {
  try {
    console.log("🔐 Starting encryption process...")
    console.log("Working key length:", workingKey.length)
    console.log("Plain text length:", plainText.length)

    // Create MD5 hash of working key (CCAvenue standard)
    const m = crypto.createHash("md5")
    m.update(workingKey)
    const key = m.digest() // 128-bit key (16 bytes)

    // Create IV as Buffer with values [0,1,2,...,15] (CCAvenue standard)
    const ivArray: number[] = [];
    for (let i = 0; i < 16; i++) {
      ivArray.push(i);
    }
    const iv = Buffer.from(ivArray);

    console.log("Key details:", {
      keyLength: key.length,
      ivLength: iv.length,
      keyHex: key.toString("hex").substring(0, 8) + "...",
    })

    // Use createCipheriv instead of deprecated createCipher
    const cipher = crypto.createCipheriv("aes-128-cbc", key, iv)
    cipher.setAutoPadding(true)

    let encrypted = cipher.update(plainText, "utf8", "hex")
    encrypted += cipher.final("hex")

    console.log("✅ Encryption successful:", {
      encryptedLength: encrypted.length,
      preview: encrypted.substring(0, 50) + "...",
    })

    return encrypted
  } catch (error : any) {
    console.error("❌ Encryption error:", {
      error: error.message,
      keyLength: workingKey.length,
      plainTextLength: plainText.length,
    })
    throw new Error(`Encryption failed: ${error.message}`)
  }
}

export async function POST(request: NextRequest) {
  console.log("🚀 === PAYMENT INITIATION START ===")

  try {
    // Parse request body
    const requestBody = await request.json()
    const { billingData, orderData, panNumber } = requestBody

    console.log("📋 Request data received:", {
      hasBillingData: !!billingData,
      hasOrderData: !!orderData,
      hasPanNumber: !!panNumber,
    })

    // Validate required data
    if (!billingData || !orderData || !panNumber) {
      return NextResponse.json({ error: "Missing required payment data" }, { status: 400 })
    }

    // Format the amount and order ID
    const formattedAmount = Number.parseFloat(orderData.amount || "1.00").toFixed(2)
    const orderId = orderData.orderNumber || `ORD${Date.now()}`

    console.log("💰 Payment details:", {
      orderId,
      amount: formattedAmount,
      panNumber: panNumber.substring(0, 5) + "****",
    })

    // Validate credentials before proceeding
    console.log("🔑 Using credentials:", {
      merchantId: MERCHANT_ID,
      accessCode: ACCESS_CODE.substring(0, 4) + "****",
      workingKeyLength: WORKING_KEY.length,
    })

    // Create merchant parameter object for CCAvenue
    const merchantParams = {
      merchant_id: MERCHANT_ID,
      order_id: orderId,
      currency: orderData.currency || "INR",
      amount: formattedAmount,
      redirect_url: REDIRECT_URL,
      cancel_url: `${CANCEL_URL}?orderId=${orderId}&amount=${formattedAmount}`,
      language: "EN",
      billing_name: billingData.billingName ,
      billing_address: billingData.address ,
      billing_city: billingData.city ,
      billing_state: billingData.state || "MP",
      billing_zip: billingData.zipCode || "462001",
      billing_country: billingData.country ,
      billing_email: billingData.email ,
      billing_tel: billingData.mobile ,
      merchant_param1: panNumber,
      merchant_param2: JSON.stringify({
        timestamp: new Date().toISOString(),
        source: "whatsapp_bot",
      }),
      delivery_name: billingData.billingName ,
      delivery_address: billingData.address ,
      delivery_city: billingData.city ,
      delivery_state: billingData.state ,
      delivery_zip: billingData.zipCode ,
      delivery_country: billingData.country || "India",
      delivery_tel: billingData.mobile ,
    }

    console.log("📦 Merchant params prepared:", {
      orderId: merchantParams.order_id,
      amount: merchantParams.amount,
      merchantId: merchantParams.merchant_id,
      billingName: merchantParams.billing_name,
    })

    // Convert to query string
    const merchantParamStr = Object.entries(merchantParams)
      .map(([key, value]) => `${key}=${encodeURIComponent(value || "")}`)
      .join("&")

    console.log("🔗 Payment string created:")
    console.log("Length:", merchantParamStr.length)
    console.log("Preview:", merchantParamStr.substring(0, 200) + "...")

    // Encrypt the data
    const encryptedData = encrypt(merchantParamStr, WORKING_KEY)

    // 🎯 IMPORTANT: Use PRODUCTION URL since you have production credentials
    const formUrl = "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"


    console.log("🌐 CCAvenue details:", {
      formUrl,
      encryptedDataLength: encryptedData.length,
      accessCode: ACCESS_CODE,
    })

    const response = {
      success: true,
      encryptedData,
      accessCode: ACCESS_CODE,
      formUrl,
      orderId: merchantParams.order_id,
      amount: merchantParams.amount,
      merchantId: MERCHANT_ID,
      debug: {
        timestamp: new Date().toISOString(),
        encryptionMethod: "AES-128-CBC",
        paymentDataLength: merchantParamStr.length,
        encryptedDataLength: encryptedData.length,
      },
    }

    console.log("✅ Payment initiation successful for order:", merchantParams.order_id)
    console.log("🚀 === PAYMENT INITIATION END ===")

    return NextResponse.json(response)
  } catch (error : any) {
    console.error("❌ === PAYMENT INITIATION ERROR ===")
    console.error("Error:", error.message)
    console.error("Stack:", error.stack)

    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to initiate payment",
        debug: {
          errorMessage: error.message,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 500 },
    )
  }
}
