import { type NextRequest, NextResponse } from "next/server"
import { unlink } from "fs/promises"
import path from "path"

export async function DELETE(request: NextRequest) {
  try {
    const { fileName } = await request.json()

    if (!fileName) {
      return NextResponse.json({ error: "No file name provided" }, { status: 400 })
    }

    // ✅ CORRECT PATH: Delete from public folder
    const fullPath = path.join(process.cwd(), "public", "images", "upload", "image", "company-slider", fileName)

    try {
      // Delete the file
      await unlink(fullPath)
      console.log(`✅ Image deleted successfully: ${fullPath}`)

      return NextResponse.json({
        success: true,
        message: "Image deleted successfully",
      })
    } catch (error) {
      // File might not exist, which is okay
      console.log(`⚠️ File not found or already deleted: ${fullPath}`)
      return NextResponse.json({
        success: true,
        message: "File not found or already deleted",
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
