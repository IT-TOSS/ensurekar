import { type NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

const RAZORPAY_WEBHOOK_SECRET = "56e7plR4oRenWwflJIXaxVmA"

export async function POST(request: NextRequest) {
  console.log("🔔 === RAZORPAY WEBHOOK RECEIVED ===")

  try {
    // Get the raw body
    const body = await request.text()
    const signature = request.headers.get("x-razorpay-signature")

    if (!signature) {
      console.error("❌ No signature found in webhook")
      return NextResponse.json({ error: "No signature found" }, { status: 400 })
    }

    // Verify webhook signature
    const expectedSignature = crypto.createHmac("sha256", RAZORPAY_WEBHOOK_SECRET).update(body).digest("hex")

    if (signature !== expectedSignature) {
      console.error("❌ Invalid webhook signature")
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }

    console.log("✅ Webhook signature verified")

    // Parse the webhook payload
    const payload = JSON.parse(body)
    const event = payload.event
    const paymentEntity = payload.payload.payment.entity

    console.log("📦 Webhook event:", event)
    console.log("💳 Payment details:", {
      id: paymentEntity.id,
      amount: paymentEntity.amount,
      status: paymentEntity.status,
      method: paymentEntity.method,
      orderId: paymentEntity.order_id,
    })

    // Handle different webhook events
    switch (event) {
      case "payment.captured":
        await handlePaymentCaptured(paymentEntity)
        break
      case "payment.failed":
        await handlePaymentFailed(paymentEntity)
        break
      default:
        console.log("ℹ️ Unhandled webhook event:", event)
    }

    return NextResponse.json({ status: "ok" })
  } catch (error: any) {
    console.error("❌ Webhook processing error:", error)
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 })
  }
}

async function handlePaymentCaptured(payment: any) {
  try {
    console.log("✅ Payment captured successfully:", payment)

    // Update payment status in your database
    const paymentData = {
      razorpay_payment_id: payment.id,
      razorpay_order_id: payment.order_id,
      amount: (payment.amount / 100).toString(), // Convert paise to rupees
      currency: payment.currency,
      method: payment.method,
      status: "captured",
      captured_at: new Date(payment.created_at * 1000).toISOString(),
      email: payment.email,
      contact: payment.contact,
      notes: payment.notes,
    }

    // Send to your external API (similar to your CCAvenue implementation)
    await updatePaymentStatus(paymentData)

    console.log("✅ Payment capture processed successfully")
  } catch (error) {
    console.error("❌ Error processing payment capture:", error)
  }
}

async function handlePaymentFailed(payment: any) {
  try {
    console.log("❌ Payment failed:", payment.id)

    // Update payment status in your database
    const paymentData = {
      razorpay_payment_id: payment.id,
      razorpay_order_id: payment.order_id,
      amount: (payment.amount / 100).toString(),
      currency: payment.currency,
      method: payment.method,
      status: "failed",
      error_code: payment.error_code,
      error_description: payment.error_description,
      failed_at: new Date(payment.created_at * 1000).toISOString(),
      notes: payment.notes,
    }

    // Send to your external API
    await updatePaymentStatus(paymentData)

    console.log("✅ Payment failure processed successfully")
  } catch (error) {
    console.error("❌ Error processing payment failure:", error)
  }
}

async function updatePaymentStatus(paymentData: any) {
  try {
    console.log("📊 Sending payment data to external API:", paymentData)

    const saveResponse = await fetch("https://tossconsultancyservices.com/ensurekar-dashboard/paymentsave.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...paymentData,
        payment_gateway: "razorpay",
        order_id: paymentData.notes?.order_number || paymentData.razorpay_order_id,
        tracking_id: paymentData.razorpay_payment_id,
        order_status: paymentData.status === "captured" ? "Success" : "Failed",
        payment_mode: paymentData.method,
        bank_ref_no: paymentData.razorpay_payment_id,
        status_message: paymentData.status === "captured" ? "Payment successful" : paymentData.error_description,
      }),
    })

    if (!saveResponse.ok) {
      console.error(`❌ Failed to save payment status. HTTP Status: ${saveResponse.status}`)
      return
    }

    const resJson = await saveResponse.json()

    if (resJson.success) {
      console.log("✅ Payment status saved successfully:", resJson.message)
    } else {
      console.error("⚠️ API responded with failure:", resJson.message)
    }
  } catch (error) {
    console.error("❌ Error updating payment status to external API:", error)
  }
}
