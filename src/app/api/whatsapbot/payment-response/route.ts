
import crypto from "crypto"
import type { NextRequest } from "next/server"

const WORKING_KEY = "B3ACAE21142FBB1FA2E53B0C1C184486"

function decrypt(encryptedText: string, workingKey: string) {
  const m = crypto.createHash("md5")
  m.update(workingKey)
  const key = m.digest()
  const iv = Buffer.from(Array.from(Array(16).keys()))

  const decipher = crypto.createDecipheriv("aes-128-cbc", key, iv)
  let decoded = decipher.update(encryptedText, "hex", "utf8")
  decoded += decipher.final("utf8")

  return decoded
}

export async function POST(request: NextRequest) {
  try {
    console.log("🔄 Payment Response Handler Called")
    console.log("Request headers:", Object.fromEntries(request.headers.entries()))

    let encResp: string | null = null

    // Try multiple ways to get the encrypted response
    try {
      // Method 1: Try form data
      const formData = await request.formData()
      encResp = formData.get("encResp")?.toString() || null
      console.log("✅ Got encrypted response from form data")
    } catch (formError) {
      console.log("⚠️ Form data parsing failed, trying text parsing...")
      
      try {
        // Method 2: Try URL encoded data
        const body = await request.text()
        const params = new URLSearchParams(body)
        encResp = params.get("encResp")
        console.log("✅ Got encrypted response from URL params")
      } catch (textError) {
        console.error("❌ Both parsing methods failed:", { formError, textError })
      }
    }

    if (!encResp) {
      console.error("❌ No encrypted response received")
      return Response.redirect(
        `https://ensurekar.com/whatsapbot/PaymentFailed?error=${encodeURIComponent("No response received")}`,
        302
      )
    }

    console.log("📦 Encrypted response received:", {
      length: encResp.length,
      preview: encResp.substring(0, 50) + "..."
    })

    // Decrypt the response
    const decrypted = decrypt(encResp, WORKING_KEY)
    console.log("✅ Response decrypted successfully")

    // Parse decrypted data into an object
    const data = Object.fromEntries(new URLSearchParams(decrypted))

    console.log("📊 Payment Details:")
    console.log("- Order ID:", data.order_id)
    console.log("- Status:", data.order_status)
    console.log("- Amount:", data.amount)
    console.log("- Tracking ID:", data.tracking_id)
    console.log("- Payment Mode:", data.payment_mode)

    // Log full response for debugging (remove sensitive data)
    const logData = { ...data }
    delete logData.card_number // Remove sensitive card info
    console.log("🔍 Full payment response:", logData)

    // TODO: Update payment status in database
    await updatePaymentStatus(data)

    // Create redirect URLs with individual parameters instead of encoded data
    if (data.order_status === "Success") {
      const successUrl = new URL("/whatsapbot/PaymentSuccessful", "https://ensurekar.com")
      successUrl.searchParams.set("orderId", data.order_id || "")
      successUrl.searchParams.set("amount", data.amount || "")
      successUrl.searchParams.set("trackingId", data.tracking_id || "")
      successUrl.searchParams.set("bankRefNo", data.bank_ref_no || "")
      successUrl.searchParams.set("paymentMode", data.payment_mode || "")
      successUrl.searchParams.set("currency", data.currency || "INR")
      successUrl.searchParams.set("statusMessage", data.status_message || "")
      successUrl.searchParams.set("paymentMethod", "CCAvenue")

      console.log("✅ Payment successful, redirecting to:", successUrl.toString())
      return Response.redirect(successUrl.toString(), 302)
    } else {
      const failureUrl = new URL("/whatsapbot/PaymentFailed", "https://ensurekar.com")
      failureUrl.searchParams.set("orderId", data.order_id || "")
      failureUrl.searchParams.set("amount", data.amount || "")
      failureUrl.searchParams.set("trackingId", data.tracking_id || "")
      failureUrl.searchParams.set("error", data.failure_message || data.status_message || "Payment failed")
      failureUrl.searchParams.set("statusCode", data.status_code || "")
      failureUrl.searchParams.set("paymentMethod", "CCAvenue")

      console.log("❌ Payment failed, redirecting to:", failureUrl.toString())
      return Response.redirect(failureUrl.toString(), 302)
    }
  } catch (error: any) {
    console.error("❌ Payment Response Error:", error)
    console.error("Error stack:", error.stack)
    
    return Response.redirect(
      `https://ensurekar.com/whatsapbot/PaymentFailed?error=${encodeURIComponent(`Processing error: ${error.message}`)}`,
      302
    )
  }
}

// Handle GET requests too (some payment gateways use GET)
export async function GET(request: NextRequest) {
  try {
    console.log("🔄 Payment Response Handler GET Called")

    const url = new URL(request.url)
    const encResp = url.searchParams.get("encResp")

    if (!encResp) {
      console.error("❌ No encrypted response received in GET")
      return Response.redirect(
        `https://ensurekar.com/whatsapbot/PaymentFailed?error=${encodeURIComponent("No response received")}`,
        302
      )
    }

    console.log("📦 Encrypted response received via GET:", {
      length: encResp.length,
      preview: encResp.substring(0, 50) + "..."
    })

    // Decrypt the response
    const decrypted = decrypt(encResp, WORKING_KEY)
    console.log("✅ GET Response decrypted successfully")

    // Parse decrypted data into an object
    const data = Object.fromEntries(new URLSearchParams(decrypted))

    console.log("📊 GET Payment Details:")
    console.log("- Order ID:", data.order_id)
    console.log("- Status:", data.order_status)

    // TODO: Update payment status in database
    await updatePaymentStatus(data)

    // Create redirect URLs with individual parameters
    if (data.order_status === "Success") {
      const successUrl = new URL("/whatsapbot/PaymentSuccessful", "https://ensurekar.com")
      successUrl.searchParams.set("orderId", data.order_id || "")
      successUrl.searchParams.set("amount", data.amount || "")
      successUrl.searchParams.set("trackingId", data.tracking_id || "")
      successUrl.searchParams.set("bankRefNo", data.bank_ref_no || "")
      successUrl.searchParams.set("paymentMode", data.payment_mode || "")
      successUrl.searchParams.set("currency", data.currency || "INR")
      successUrl.searchParams.set("statusMessage", data.status_message || "")
      successUrl.searchParams.set("paymentMethod", "CCAvenue")

      console.log("✅ GET Payment successful, redirecting to success page")
      return Response.redirect(successUrl.toString(), 302)
    } else {
      const failureUrl = new URL("/whatsapbot/PaymentFailed", "https://ensurekar.com")
      failureUrl.searchParams.set("orderId", data.order_id || "")
      failureUrl.searchParams.set("amount", data.amount || "")
      failureUrl.searchParams.set("trackingId", data.tracking_id || "")
      failureUrl.searchParams.set("error", data.failure_message || data.status_message || "Payment failed")
      failureUrl.searchParams.set("statusCode", data.status_code || "")
      failureUrl.searchParams.set("paymentMethod", "CCAvenue")

      console.log("❌ GET Payment failed, redirecting to failure page")
      return Response.redirect(failureUrl.toString(), 302)
    }
  } catch (error: any) {
    console.error("❌ Payment Response GET Error:", error)
    
    return Response.redirect(
      `https://ensurekar.com/whatsapbot/PaymentFailed?error=${encodeURIComponent(`Processing error: ${error.message}`)}`,
      302
    )
  }
}
async function updatePaymentStatus(responseData: Record<string, string>) {
  try {
    console.log("📊 Sending full payment data to external API:", responseData);

    const saveResponse = await fetch("https://tossconsultancyservices.com/ensurekar-dashboard/paymentsave.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(responseData)
    });

    if (!saveResponse.ok) {
      console.error(`❌ Failed to save payment status. HTTP Status: ${saveResponse.status}`);
      return;
    }

    const resJson = await saveResponse.json();

    if (resJson.success) {
      console.log("✅ Payment status saved successfully:", resJson.message);
    } else {
      console.error("⚠️ API responded with failure:", resJson.message);
    }
  } catch (error) {
    console.error("❌ Error updating payment status to external API:", error);
  }
}
