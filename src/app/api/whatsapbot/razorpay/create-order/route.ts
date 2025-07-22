import { type NextRequest, NextResponse } from "next/server"
import Razorpay from "razorpay"

// Razorpay credentials - UPDATE THESE WITH YOUR ACTUAL CREDENTIALS
const RAZORPAY_KEY_ID = "rzp_live_DHKX2k7dbHYGet";
const RAZORPAY_KEY_SECRET = "56e7plR4oRenWwflJIXaxVmA"

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: RAZORPAY_KEY_ID,
  key_secret: RAZORPAY_KEY_SECRET,
})

export async function POST(request: NextRequest) {
  console.log("🚀 === RAZORPAY ORDER CREATION START ===")

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

    // Format the amount (Razorpay expects amount in paise)
    const amountInPaise = Math.round(Number.parseFloat(orderData.amount || "1.00") * 100)
    const orderId = orderData.orderNumber || `ORD${Date.now()}`

    console.log("💰 Payment details:", {
      orderId,
      amountInPaise,
      amountInRupees: orderData.amount,
      panNumber: panNumber.substring(0, 5) + "****",
    })

    // Validate credentials before proceeding
    console.log("🔑 Using Razorpay credentials:", {
      keyId: RAZORPAY_KEY_ID.substring(0, 8) + "****",
      keySecretLength: RAZORPAY_KEY_SECRET.length,
    })

    // Create Razorpay order
    const razorpayOrder = await razorpay.orders.create({
      amount: amountInPaise,
      currency: orderData.currency || "INR",
      receipt: orderId,
      notes: {
        pan_number: panNumber,
        billing_name: billingData.billingName,
        billing_email: billingData.email,
        billing_mobile: billingData.mobile,
        order_number: orderId,
        timestamp: new Date().toISOString(),
        source: "whatsapp_bot",
      },
    })

    console.log("✅ Razorpay order created successfully:", {
      razorpayOrderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      status: razorpayOrder.status,
    })

    // Store order details in your database if needed
    await storeOrderInDatabase({
      orderId,
      razorpayOrderId: razorpayOrder.id,
      amount: orderData.amount,
      currency: razorpayOrder.currency,
      panNumber,
      billingData,
      status: "created",
    })

    const response = {
      success: true,
      order: {
        id: razorpayOrder.id,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        receipt: razorpayOrder.receipt,
      },
      keyId: RAZORPAY_KEY_ID,
      orderId: orderId,
      debug: {
        timestamp: new Date().toISOString(),
        razorpayOrderStatus: razorpayOrder.status,
        amountInPaise,
        amountInRupees: orderData.amount,
      },
    }

    console.log("✅ Order creation successful for order:", orderId)
    console.log("🚀 === RAZORPAY ORDER CREATION END ===")

    return NextResponse.json(response)
  } catch (error: any) {
    console.error("❌ === RAZORPAY ORDER CREATION ERROR ===")
    console.error("Error:", error.message)
    console.error("Stack:", error.stack)

    // Handle specific Razorpay errors
    if (error.statusCode) {
      console.error("Razorpay API Error:", {
        statusCode: error.statusCode,
        error: error.error,
      })
    }

    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to create Razorpay order",
        debug: {
          errorMessage: error.message,
          errorCode: error.statusCode || "UNKNOWN",
          timestamp: new Date().toISOString(),
        },
      },
      { status: 500 },
    )
  }
}

// Function to store order in database
async function storeOrderInDatabase(orderData: any) {
  try {
    console.log("📊 Storing order in database:", {
      orderId: orderData.orderId,
      razorpayOrderId: orderData.razorpayOrderId,
      amount: orderData.amount,
    })

    // You can implement your database storage logic here
    // For now, we'll just log it
    console.log("✅ Order stored successfully")
  } catch (error) {
    console.error("❌ Error storing order in database:", error)
    // Don't throw error here to avoid breaking the main flow
  }
}
