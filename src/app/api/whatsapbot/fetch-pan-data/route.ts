import { type NextRequest, NextResponse } from "next/server"

interface ApiResponse {
  success: boolean
  data?: any[]
  message?: string
}

interface PanRecord {
  name?: string
  father_name?: string
  date_of_birth?: string
  aadhaar?: string
  pan?: string
  flat_no?: string
  premise_name?: string
  road_street?: string
  locality?: string
  state?: string
  pincode?: string
  mobile?: string
  email?: string
}

export async function POST(request: NextRequest) {
  try {
    const { panNumber } = await request.json()

    if (!panNumber) {
      return NextResponse.json({ error: "PAN number is required" }, { status: 400 })
    }

    // Validate PAN format
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
    if (!panRegex.test(panNumber)) {
      return NextResponse.json({ error: "Invalid PAN format" }, { status: 400 })
    }

    console.log("Fetching data for PAN:", panNumber)

    // Call the external API
    const apiResponse = await fetch("https://tossconsultancyservices.com/ensurekar-dashboard/getapiforbotpayment.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0 (compatible; PAN-Verification-Bot/1.0)",
      },
      body: JSON.stringify({ pan: panNumber }),
      // Add timeout
      signal: AbortSignal.timeout(30000), // 30 seconds timeout
    })

    if (!apiResponse.ok) {
      console.error("API Response failed:", apiResponse.status, apiResponse.statusText)
      throw new Error(`External API request failed: ${apiResponse.status}`)
    }

    const responseText = await apiResponse.text()
    console.log("API Response received, length:", responseText.length)

    // Check if response is HTML (error page)
    if (responseText.trim().startsWith("<!DOCTYPE") || responseText.trim().startsWith("<html")) {
      console.error("API returned HTML instead of JSON")
      throw new Error("External API is currently unavailable")
    }

    // Parse JSON response
    let apiData: ApiResponse
    try {
      apiData = JSON.parse(responseText)
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError)
      throw new Error("Invalid response format from external API")
    }

    // Validate API response structure
    if (!apiData.success) {
      return NextResponse.json(
        {
          error: apiData.message || "No data found for the provided PAN number",
        },
        { status: 404 },
      )
    }

    if (!apiData.data || !Array.isArray(apiData.data) || apiData.data.length === 0) {
      return NextResponse.json(
        {
          error: "No records found for the provided PAN number",
        },
        { status: 404 },
      )
    }

    // Transform and return the data
    const panRecord = apiData.data[0] as PanRecord
    const transformedData = transformApiResponse(panRecord)

    // Log successful fetch (without sensitive data)
    console.log("PAN data fetched successfully for:", panNumber.substring(0, 5) + "****")

    // Store in database (implement as needed)
    await storePanDataInDatabase(panNumber, transformedData)

    return NextResponse.json({
      success: true,
      panData: transformedData,
    })
  } catch (error) {
    console.error("Error in PAN data fetch:", error)

    // Return appropriate error response
    if (error instanceof Error) {
      if (error.name === "AbortError") {
        return NextResponse.json({ error: "Request timeout - please try again" }, { status: 408 })
      }

      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ error: "An unexpected error occurred while fetching PAN data" }, { status: 500 })
  }
}

function transformApiResponse(apiRecord: PanRecord) {
  return {
    name: apiRecord.name || "",
    address: buildAddress(apiRecord),
    city: apiRecord.locality || "",
    state: apiRecord.state || "",
    zipCode: apiRecord.pincode || "",
    mobile: apiRecord.mobile || "",
    email: apiRecord.email || "",
    fatherName: apiRecord.father_name || "",
    dateOfBirth: apiRecord.date_of_birth || "",
    aadhaar: apiRecord.aadhaar || "",
    panNumber: apiRecord.pan || "",
    // Store timestamp for audit
    fetchedAt: new Date().toISOString(),
  }
}

function buildAddress(apiRecord: PanRecord): string {
  const addressParts = [apiRecord.flat_no, apiRecord.premise_name, apiRecord.road_street, apiRecord.locality].filter(
    (part) => part && part.trim() !== "",
  )

  return addressParts.join(", ")
}

async function storePanDataInDatabase(panNumber: string, panData: any) {
  try {
    // Implement your database storage logic here
    // For security, consider encrypting sensitive data
    const encryptedData = encryptSensitiveData(JSON.stringify(panData))

    console.log("Storing PAN data:", {
      panNumber: panNumber.substring(0, 5) + "****",
      timestamp: new Date().toISOString(),
    })

    // Example: Store in your database
    // await db.panRecords.create({
    //   panNumber,
    //   encryptedData,
    //   createdAt: new Date(),
    // })
  } catch (error) {
    console.error("Error storing PAN data:", error)
    // Don't throw error here to avoid breaking the main flow
  }
}

function encryptSensitiveData(data: string): string {
  // Implement proper encryption in production
  // This is just a placeholder
  return Buffer.from(data).toString("base64")
}
