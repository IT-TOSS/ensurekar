import { type NextRequest, NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import path from "path"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("image") as File
    const folder = formData.get("folder") as string || "blogImage"

    if (!file) {
      return NextResponse.json({ error: "No file received" }, { status: 400 })
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Invalid file type. Please upload an image." }, { status: 400 })
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "File size too large. Maximum 5MB allowed." }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Generate unique filename
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 15)
    const fileExtension = path.extname(file.name)
    const fileName = `${timestamp}_${randomString}${fileExtension}`

    // ✅ CORRECT PATH: Create directory in public folder
    const uploadDir = path.join(process.cwd(), "public", "images", "upload", folder)

    // Create directory if it doesn't exist
    await mkdir(uploadDir, { recursive: true })

    // Write file to the correct directory
    const filePath = path.join(uploadDir, fileName)
    await writeFile(filePath, buffer)

    // ✅ CORRECT PATHS for response
    const publicUrl = `/images/upload/${folder}/${fileName}` // For displaying image
    const storagePath = `/images/upload/${folder}/${fileName}` // For database storage (without public/ prefix)

    console.log(`✅ Image uploaded successfully:`)
    console.log(`📁 Physical file saved to: ${filePath}`)
    console.log(`🌐 Public URL: ${publicUrl}`)
    console.log(`💾 Database path: ${storagePath}`)

    return NextResponse.json({
      success: true,
      url: publicUrl, // This URL will display the image
      filename: fileName,
      path: storagePath, // This path will be stored in database
      message: "Image uploaded successfully",
    })
  } catch (error) {
    console.error("❌ Upload error:", error)
    return NextResponse.json(
      {
        error: "Upload failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
