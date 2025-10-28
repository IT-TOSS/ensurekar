import { type NextRequest, NextResponse } from "next/server"
import { unlink } from "fs/promises"
import path from "path"

export async function POST(request: NextRequest) {
  try {
    const { filename, folder } = await request.json()

    if (!filename) {
      return NextResponse.json({ error: "No filename provided" }, { status: 400 })
    }

    // Construct the file path
    const filePath = path.join(process.cwd(), "public", "images", "upload", folder || "blogImage", filename)

    try {
      // Delete the file
      await unlink(filePath)
      
      console.log(`✅ Image deleted successfully: ${filePath}`)

      return NextResponse.json({
        success: true,
        message: "Image deleted successfully",
      })
    } catch (fileError) {
      // File might not exist, which is okay
      console.log(`⚠️ File not found or already deleted: ${filePath}`)
      
      return NextResponse.json({
        success: true,
        message: "Image deleted successfully (file was not found)",
      })
    }
  } catch (error) {
    console.error("❌ Delete error:", error)
    return NextResponse.json(
      {
        error: "Delete failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
