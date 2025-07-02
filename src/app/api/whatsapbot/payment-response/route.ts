// import { type NextRequest, NextResponse } from "next/server"
// import crypto from "crypto"

// export async function POST(request: NextRequest) {
//   try {
//     console.log("🔄 Payment response handler called")
//     console.log("Request headers:", Object.fromEntries(request.headers.entries()))

//     // Try to get form data first, then fallback to text parsing
//     let encResponse: string | null = null

//     try {
//       // Method 1: Try form data (multipart/form-data)
//       const formData = await request.formData()
//       encResponse = formData.get("encResp") as string
//       console.log("✅ Got encrypted response from form data")
//     } catch (formError) {
//       console.log("⚠️ Form data parsing failed, trying text parsing...")

//       try {
//         // Method 2: Try URL encoded data (application/x-www-form-urlencoded)
//         const body = await request.text()
//         const params = new URLSearchParams(body)
//         encResponse = params.get("encResp")
//         console.log("✅ Got encrypted response from URL params")
//       } catch (textError) {
//         console.error("❌ Both parsing methods failed:", { formError, textError })
//       }
//     }

//     console.log("Received payment response")

//     if (!encResponse) {
//       console.error("❌ No encrypted response received")
//       return NextResponse.redirect(new URL("/whatsapbot/PaymentFailed?error=No response received", request.url))
//     }

//     console.log("📦 Encrypted response received:", {
//       length: encResponse.length,
//       preview: encResponse.substring(0, 50) + "...",
//     })

//     const workingKey = process.env.CCAVENUE_WORKING_KEY || "B3ACAE21142FBB1FA2E53B0C1C184486"

//     if (!workingKey) {
//       console.error("❌ CCAvenue working key not configured")
//       return NextResponse.redirect(new URL("/whatsapbot/PaymentFailed?error=Configuration error", request.url))
//     }

//     // Decrypt the response
//     console.log("🔓 Starting decryption...")
//     const decryptedResponse = decrypt(encResponse, workingKey)
//     console.log("✅ Response decrypted successfully")

//     const responseData = parseResponseData(decryptedResponse)
//     console.log("📊 Payment response parsed for order:", responseData.order_id)
//     console.log("💳 Payment status:", responseData.order_status)

//     // Log the full response for debugging (remove sensitive data)
//     const logData = { ...responseData }
//     delete logData.card_number // Remove sensitive data from logs
//     console.log("🔍 Full payment response:", logData)

//     // Update payment status in database
//     await updatePaymentStatus(responseData)

//     // Redirect based on payment status
//     if (responseData.order_status === "Success") {
//       const successUrl = new URL("/whatsapbot/PaymentSuccessful", request.url)
//       successUrl.searchParams.set("orderId", responseData.order_id || "")
//       successUrl.searchParams.set("amount", responseData.amount || "")
//       successUrl.searchParams.set("trackingId", responseData.tracking_id || "")
//       successUrl.searchParams.set("paymentMethod", "CCAvenue")

//       console.log("✅ Payment successful, redirecting to success page:", successUrl.toString())
//       return NextResponse.redirect(successUrl)
//     } else {
//       const failureUrl = new URL("/whatsapbot/PaymentFailed", request.url)
//       failureUrl.searchParams.set("orderId", responseData.order_id || "")
//       failureUrl.searchParams.set("amount", responseData.amount || "")
//       failureUrl.searchParams.set(
//         "error",
//         responseData.failure_message || responseData.status_message || "Payment failed",
//       )
//       failureUrl.searchParams.set("paymentMethod", "CCAvenue")

//       console.log("❌ Payment failed, redirecting to failure page:", failureUrl.toString())
//       return NextResponse.redirect(failureUrl)
//     }
//   } catch (error : any) {
//     console.error("❌ Error processing payment response:", error)
//     console.error("Error stack:", error.stack)

//     const errorUrl = new URL("/whatsapbot/PaymentFailed", request.url)
//     errorUrl.searchParams.set("error", `Payment processing error: ${error.message}`)
//     return NextResponse.redirect(errorUrl)
//   }
// }

// // Handle GET requests (in case CCAvenue sends GET instead of POST)
// export async function GET(request: NextRequest) {
//   try {
//     console.log("🔄 Payment response GET handler called")

//     const url = new URL(request.url)
//     const encResponse = url.searchParams.get("encResp")

//     if (!encResponse) {
//       console.error("❌ No encrypted response in GET parameters")
//       return NextResponse.redirect(new URL("/whatsapbot/PaymentFailed?error=No response received", request.url))
//     }

//     console.log("📦 Encrypted response from GET:", {
//       length: encResponse.length,
//       preview: encResponse.substring(0, 50) + "...",
//     })

//     const workingKey = process.env.CCAVENUE_WORKING_KEY || "B3ACAE21142FBB1FA2E53B0C1C184486"

//     // Decrypt the response
//     const decryptedResponse = decrypt(encResponse, workingKey)
//     console.log("✅ GET Response decrypted successfully")

//     const responseData = parseResponseData(decryptedResponse)
//     console.log("📊 GET Payment response parsed for order:", responseData.order_id)

//     // Update payment status in database
//     await updatePaymentStatus(responseData)

//     // Redirect based on payment status
//     if (responseData.order_status === "Success") {
//       const successUrl = new URL("/whatsapbot/PaymentSuccessful", request.url)
//       successUrl.searchParams.set("orderId", responseData.order_id || "")
//       successUrl.searchParams.set("amount", responseData.amount || "")
//       successUrl.searchParams.set("trackingId", responseData.tracking_id || "")
//       successUrl.searchParams.set("paymentMethod", "CCAvenue")

//       console.log("✅ GET Payment successful, redirecting to success page")
//       return NextResponse.redirect(successUrl)
//     } else {
//       const failureUrl = new URL("/whatsapbot/PaymentFailed", request.url)
//       failureUrl.searchParams.set("orderId", responseData.order_id || "")
//       failureUrl.searchParams.set("amount", responseData.amount || "")
//       failureUrl.searchParams.set(
//         "error",
//         responseData.failure_message || responseData.status_message || "Payment failed",
//       )
//       failureUrl.searchParams.set("paymentMethod", "CCAvenue")

//       console.log("❌ GET Payment failed, redirecting to failure page")
//       return NextResponse.redirect(failureUrl)
//     }
//   } catch (error : any) {
//     console.error("❌ Error processing GET payment response:", error)

//     const errorUrl = new URL("/whatsapbot/PaymentFailed", request.url)
//     errorUrl.searchParams.set("error", `Payment processing error: ${error.message}`)
//     return NextResponse.redirect(errorUrl)
//   }
// }

// function decrypt(encryptedText: string, key: string): string {
//   try {
//     console.log("🔓 Starting decryption process...")
//     console.log("Encrypted text length:", encryptedText.length)
//     console.log("Working key length:", key.length)

//     // Create MD5 hash of working key (CCAvenue standard)
//     const m = crypto.createHash("md5")
//     m.update(key)
//     const keyBuffer = m.digest() // 128-bit key (16 bytes)

//     // Create IV as Buffer with values [0,1,2,...,15] (CCAvenue standard)
//     const iv = Buffer.from(Array.from({ length: 16 }, (_, i) => i))

//     console.log("Decryption details:", {
//       keyLength: keyBuffer.length,
//       ivLength: iv.length,
//       keyHex: keyBuffer.toString("hex").substring(0, 8) + "...",
//     })

//     // Use createDecipheriv instead of deprecated createDecipher
//     const decipher = crypto.createDecipheriv("aes-128-cbc", keyBuffer, iv)
//     decipher.setAutoPadding(true)

//     let decrypted = decipher.update(encryptedText, "hex", "utf8")
//     decrypted += decipher.final("utf8")

//     console.log("✅ Decryption successful:", {
//       decryptedLength: decrypted.length,
//       preview: decrypted.substring(0, 100) + "...",
//     })

//     return decrypted
//   } catch (error :any) {
//     console.error("❌ Decryption error:", {
//       error: error.message,
//       keyLength: key.length,
//       encryptedTextLength: encryptedText.length,
//     })
//     throw new Error(`Failed to decrypt payment response: ${error.message}`)
//   }
// }

// function parseResponseData(responseString: string): Record<string, string> {
//   const data: Record<string, string> = {}
//   const pairs = responseString.split("&")

//   console.log("🔍 Parsing response data:", {
//     totalPairs: pairs.length,
//     firstFewPairs: pairs.slice(0, 5),
//   })

//   pairs.forEach((pair) => {
//     const [key, value] = pair.split("=")
//     if (key && value !== undefined) {
//       data[key] = decodeURIComponent(value)
//     }
//   })

//   console.log("📋 Parsed data keys:", Object.keys(data))
//   return data
// }

// async function updatePaymentStatus(responseData: Record<string, string>) {
//   try {
//     const logData = {
//       orderId: responseData.order_id,
//       status: responseData.order_status,
//       trackingId: responseData.tracking_id,
//       bankRefNo: responseData.bank_ref_no,
//       amount: responseData.amount,
//       currency: responseData.currency,
//       paymentMode: responseData.payment_mode,
//       cardName: responseData.card_name,
//       statusMessage: responseData.status_message,
//       failureMessage: responseData.failure_message,
//       timestamp: new Date().toISOString(),
//     }

//     console.log("📊 Updating payment status:", logData)

//     // TODO: Implement actual database update
//     // Example with Prisma:
//     // await prisma.paymentRequest.update({
//     //   where: { orderId: responseData.order_id },
//     //   data: {
//     //     status: responseData.order_status,
//     //     trackingId: responseData.tracking_id,
//     //     bankRefNo: responseData.bank_ref_no,
//     //     paymentMode: responseData.payment_mode,
//     //     cardName: responseData.card_name,
//     //     statusMessage: responseData.status_message,
//     //     failureMessage: responseData.failure_message,
//     //     responseData: JSON.stringify(responseData),
//     //     updatedAt: new Date()
//     //   }
//     // })

//     console.log("✅ Payment status logged successfully")
//   } catch (error) {
//     console.error("❌ Error updating payment status:", error)
//     // Don't throw error here to avoid breaking the response flow
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
