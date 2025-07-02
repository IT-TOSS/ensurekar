import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { panNumber } = await request.json()

    if (!panNumber) {
      return NextResponse.json({ error: "PAN number is required" }, { status: 400 })
    }

    // Validate PAN format (basic validation)
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
    if (!panRegex.test(panNumber)) {
      return NextResponse.json({ error: "Invalid PAN format" }, { status: 400 })
    }

    console.log("Calling API for PAN:", panNumber)

    // Call the external API with better error handling
    const apiResponse = await fetch("https://tossconsultancyservices.com/ensurekar-dashboard/getapiforbotpayment.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      body: JSON.stringify({
        pan: panNumber,
      }),
    })

    console.log("API Response Status:", apiResponse.status)
    console.log("API Response Headers:", Object.fromEntries(apiResponse.headers.entries()))

    if (!apiResponse.ok) {
      console.error("API Response not OK:", apiResponse.status, apiResponse.statusText)
      throw new Error(`API request failed with status: ${apiResponse.status}`)
    }

    // Get response as text first to debug
    const responseText = await apiResponse.text()
    console.log("Raw API Response:", responseText.substring(0, 500)) // Log first 500 chars

    // Check if response is HTML (error page)
    if (responseText.trim().startsWith("<!DOCTYPE") || responseText.trim().startsWith("<html")) {
      console.error("API returned HTML instead of JSON")
      throw new Error("API returned HTML error page instead of JSON data")
    }

    // Try to parse JSON
    let apiData
    try {
      apiData = JSON.parse(responseText)
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError)
      console.error("Response Text:", responseText)
      throw new Error("Invalid JSON response from API")
    }

    console.log("Parsed API Data:", apiData)

    // Check if API returned success: false
    if (!apiData.success) {
      return NextResponse.json(
        {
          error: apiData.message || "No data found for the provided PAN",
        },
        { status: 404 },
      )
    }

    // Check if data array exists and has items
    if (!apiData.data || !Array.isArray(apiData.data) || apiData.data.length === 0) {
      return NextResponse.json(
        {
          error: "No data found for the provided PAN",
        },
        { status: 404 },
      )
    }

    // Get the first record from the data array
    const panRecord = apiData.data[0]
    console.log("PAN Record:", panRecord)

    // Transform API response to match our expected format
    const transformedData = transformApiResponse(panRecord)

    // Store the fetched data in database (encrypted)
    await storePanDataInDatabase(panNumber, transformedData)

    return NextResponse.json({
      success: true,
      panData: transformedData,
    })
  } catch (error) {
    console.error("Error fetching PAN data:", error)

    // Return more detailed error information
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to fetch PAN data from external API",
        details: error instanceof Error ? error.stack : "Unknown error",
      },
      { status: 500 },
    )
  }
}

function transformApiResponse(apiRecord: any) {
  // Transform the API response to match our billing form structure
  // Based on the actual API response structure you provided
  return {
    name: apiRecord.name || "",
    address: buildAddress(apiRecord),
    city: apiRecord.locality || "",
    state: apiRecord.state || "",
    zipCode: apiRecord.pincode || "",
    mobile: apiRecord.mobile || "",
    email: apiRecord.email || "",
    // Additional fields from API
    fatherName: apiRecord.father_name || "",
    dateOfBirth: apiRecord.date_of_birth || "",
    aadhaar: apiRecord.aadhaar || "",
    panNumber: apiRecord.pan || "",
    // Store original API response for reference
    rawApiData: apiRecord,
  }
}

function buildAddress(apiRecord: any) {
  // Build complete address from available fields
  const addressParts = [apiRecord.flat_no, apiRecord.premise_name, apiRecord.road_street, apiRecord.locality].filter(
    (part) => part && part.trim() !== "",
  )

  return addressParts.length > 0 ? addressParts.join(", ") : ""
}

async function storePanDataInDatabase(panNumber: string, panData: any) {
  // Encrypt the data before storing
  const encryptedData = encryptData(JSON.stringify(panData))

  // Store in database - Replace with your actual database logic
  console.log("Storing encrypted PAN data:", {
    panNumber,
    encryptedData,
    timestamp: new Date().toISOString(),
  })
}

function encryptData(data: string): string {
  // Simple encryption example - Use proper encryption in production
  return Buffer.from(data).toString("base64")
}
