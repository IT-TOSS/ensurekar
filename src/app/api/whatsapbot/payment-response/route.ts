import { type NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const encResponse = formData.get("encResp") as string

    if (!encResponse) {
      return NextResponse.redirect(new URL("/payment-failed", request.url))
    }

    const workingKey = process.env.CCAVENUE_WORKING_KEY || "your_working_key"

    // Decrypt the response
    const decryptedResponse = decrypt(encResponse, workingKey)
    const responseData = parseResponseData(decryptedResponse)

    // Update payment status in database
    await updatePaymentStatus(responseData)

    // Redirect based on payment status
    if (responseData.order_status === "Success") {
      return NextResponse.redirect(new URL(`/payment-success?orderId=${responseData.order_id}`, request.url))
    } else {
      return NextResponse.redirect(new URL(`/payment-failed?orderId=${responseData.order_id}`, request.url))
    }
  } catch (error) {
    console.error("Error processing payment response:", error)
    return NextResponse.redirect(new URL("/payment-failed", request.url))
  }
}

function decrypt(encryptedText: string, key: string): string {
  const decipher = crypto.createDecipher("aes-128-cbc", key)
  let decrypted = decipher.update(encryptedText, "hex", "utf8")
  decrypted += decipher.final("utf8")
  return decrypted
}

function parseResponseData(responseString: string): Record<string, string> {
  const data: Record<string, string> = {}
  const pairs = responseString.split("&")

  pairs.forEach((pair) => {
    const [key, value] = pair.split("=")
    if (key && value) {
      data[key] = decodeURIComponent(value)
    }
  })

  return data
}

async function updatePaymentStatus(responseData: Record<string, string>) {
  // Update payment status in database
  console.log("Updating payment status:", {
    orderId: responseData.order_id,
    status: responseData.order_status,
    trackingId: responseData.tracking_id,
    bankRefNo: responseData.bank_ref_no,
    amount: responseData.amount,
    timestamp: new Date().toISOString(),
  })

  // Example database update (replace with your DB implementation)
  // await db.paymentRequests.update({
  //   where: { orderId: responseData.order_id },
  //   data: {
  //     status: responseData.order_status,
  //     trackingId: responseData.tracking_id,
  //     bankRefNo: responseData.bank_ref_no,
  //     responseData: JSON.stringify(responseData),
  //     updatedAt: new Date()
  //   }
  // })
}
