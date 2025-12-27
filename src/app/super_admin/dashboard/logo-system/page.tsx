"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  Upload,
  Edit,
  Trash2,
  Plus,
  MoveUp,
  MoveDown,
  Save,
  FolderPlus,
  ArrowLeft,
  Settings,
  AlertTriangle,
} from "lucide-react"

interface LogoImage {
  id: string
  src: string // Public URL for displaying image
  alt: string
  // order: number
  fileName: string
  filePath: string // Path stored in localStorage
}

interface BusinessSection {
  id: string
  header: string // Stored in localStorage
  description: string // Stored in localStorage
  images: LogoImage[]
  isActive: boolean
  order: number
}

type ViewMode = "sections" | "section-detail"

const MultiSectionsAdmin = () => {
  const [businessSections, setBusinessSections] = useState<BusinessSection[]>([])
  const [currentSection, setCurrentSection] = useState<BusinessSection | null>(null)
  const [viewMode, setViewMode] = useState<ViewMode>("sections")
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  // Modal states
  const [showCreateSectionModal, setShowCreateSectionModal] = useState(false)
  const [showEditSectionModal, setShowEditSectionModal] = useState(false)
  const [showAddImageModal, setShowAddImageModal] = useState(false)
  const [showEditImageModal, setShowEditImageModal] = useState(false)
  const [showDeleteSectionModal, setShowDeleteSectionModal] = useState(false)

  const [selectedImage, setSelectedImage] = useState<LogoImage | null>(null)
  const [sectionToDelete, setSectionToDelete] = useState<BusinessSection | null>(null)

  // Form states
  const [sectionForm, setSectionForm] = useState({
    header: "",
    description: "",
    isActive: true,
  })

  const [imageForm, setImageForm] = useState({
    id: "",
    src: "",
    alt: "",
    file: null as File | null,
    fileName: "",
    filePath: "",
  })

  useEffect(() => {
    loadBusinessSections()
  }, [])

  // ✅ Load sections from localStorage
  const loadBusinessSections = async () => {
    setIsLoading(true)
    try {
      // await new Promise((resolve) => setTimeout(resolve, 500))

      // const existingSections = localStorage.getItem("businessSections")

      const response = await fetch("/api/get-compan-slider-sections?all=1")
      if (response.ok) {
        const sections = await response.json()
        setBusinessSections(sections.sort((a: BusinessSection, b: BusinessSection) => a.order - b.order))
        console.log("✅ Sections loaded from backend:", sections.length)
      }
    } catch (error) {
      console.error("❌ Failed to load business sections:", error)
    } finally {
      setIsLoading(false)
    }
  }

  //  Save sections to localStorage

  const saveBusinessSections = async (sections: BusinessSection[]) => {
    setIsLoading(true);
    try {
      const sortedSections = sections.sort((a, b) => a.order - b.order);
      setBusinessSections(sortedSections);
      console.log("✅ Sections sorted by order:", JSON.stringify(sortedSections));

      const response = await fetch("/api/compan-slider-sections", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sortedSections),
      });
      console.log("📤 Sending sections to backend:", JSON.stringify(response));

      if (!response.ok) {
        throw new Error(`Failed to save. Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("✅ Sections saved to backend:", result);

      return { success: true };
    } catch (error) {
      console.error("❌ Failed to save business sections to backend:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  const DeleteSections = async (headerValue: string) => {
    setIsLoading(true);
    try {
      const payload = { header: headerValue }; // 👈 match Postman format
      console.log("📤 Deleting sections, payload:", JSON.stringify(payload));

      const response = await fetch("/api/compan-slider-sections", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`❌ Failed to delete. Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("✅ Sections deleted (response):", result);

      return { success: true, data: result };
    } catch (error) {
      console.error("❌ Failed to delete sections:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Upload image to correct folder
  const uploadImageToServer = async (
    file: File,
    sectionId: string,
  ): Promise<{ url: string; fileName: string; filePath: string }> => {
    setIsLoading(true)
    try {
      // Get original filename without extension
      const originalName = file.name.split(".").slice(0, -1).join(".")
      const fileExtension = file.name.split(".").pop()

      // Create filename: sectionId_originalName.extension
      const fileName = `${sectionId}_${originalName}.${fileExtension}`

      // Create FormData for API call (upload-image expects field name "image")
      const formData = new FormData()
      formData.append("image", file)
      formData.append("folder", "logoSystem")

      console.log("📤 Uploading image:", fileName)

      // Call upload API
      const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Upload failed")
      }

      const result = await response.json()
      console.log("✅ Upload successful:", result)

      return {
        url: result.url, // Public URL for displaying image
        fileName: fileName,
        filePath: result.filePath, // Path for localStorage
      }
    } catch (error) {
      console.error("❌ Failed to upload image:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  //  Delete image from server
  const deleteImageFromServer = async (fileName: string) => {
    try {
      console.log("🗑️ Deleting image:", fileName)

      const response = await fetch("/api/delete-image", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileName }),
      })

      if (response.ok) {
        console.log("✅ Image deleted from server:", fileName)
      } else {
        console.error("❌ Failed to delete image from server")
      }
    } catch (error) {
      console.error("❌ Error deleting image:", error)
    }
  }

  // Section management functions
  const handleCreateSection = async () => {
    if (!sectionForm.header.trim()) {
      alert("Please provide a header for the section")
      return
    }

    try {
      const newSection: BusinessSection = {
        id: Date.now().toString(),
        header: sectionForm.header, // Will be stored in localStorage
        description: sectionForm.description, // Will be stored in localStorage
        isActive: sectionForm.isActive,
        order: businessSections.length + 1,
        images: [],
      }

      const updatedSections = [...businessSections, newSection]
      await saveBusinessSections(updatedSections)

      setShowCreateSectionModal(false)
      resetSectionForm()
      alert("✅ Section created successfully!")
    } catch (error) {
      alert("❌ Failed to create section")
    }
  }

  const handleUpdateSection = async () => {
    if (!currentSection) return

    try {
      const updatedSections = businessSections.map((section) =>
        section.id === currentSection.id
          ? {
            ...section,
            header: sectionForm.header, // Updated in localStorage
            description: sectionForm.description, // Updated in localStorage
            isActive: sectionForm.isActive,
            // updatedAt: new Date().toISOString(),
          }
          : section,
      )

      await saveBusinessSections(updatedSections)

      const updatedCurrentSection = updatedSections.find((s) => s.id === currentSection.id)
      if (updatedCurrentSection) {
        setCurrentSection(updatedCurrentSection)
      }

      setShowEditSectionModal(false)
      alert("✅ Section updated successfully!")
    } catch (error) {
      alert("❌ Failed to update section")
    }
  }

  const handleDeleteSection = async () => {
    if (!sectionToDelete) return

    try {
      // Delete all images from server first
      for (const image of sectionToDelete.images) {
        await deleteImageFromServer(image.fileName)
      }

      const updatedSections = businessSections
        .filter((section) => section.id !== sectionToDelete.id)
        .map((section, index) => ({ ...section, order: index + 1 }))

      await saveBusinessSections(updatedSections)

      if (currentSection?.id === sectionToDelete.id) {
        setCurrentSection(null)
        setViewMode("sections")
      }

      setShowDeleteSectionModal(false)
      setSectionToDelete(null)
      alert("✅ Section deleted successfully!")
    } catch (error) {
      alert("❌ Failed to delete section")
    }
  }

  // Image management functions
  const handleAddImage = async () => {
    if (!imageForm.alt.trim()) {
      alert("Please provide alt text for the image")
      return
    }

    if (!imageForm.file) {
      alert("Please select an image file")
      return
    }

    if (!currentSection) {
      alert("No section selected")
      return
    }

    try {
      // Upload image to server folder
      const { url, fileName, filePath } = await uploadImageToServer(imageForm.file, currentSection.id)

      const newImage: LogoImage = {
        id: Date.now().toString(),
        src: url, // Public URL for displaying
        alt: imageForm.alt,
        fileName: fileName,
        filePath: filePath, // Path stored in localStorage
      }

      const updatedImages = [...currentSection.images, newImage]
      const updatedSection = { ...currentSection, images: updatedImages }

      const updatedSections = businessSections.map((section) =>
        section.id === currentSection.id ? updatedSection : section,
      )

      await saveBusinessSections(updatedSections)
      setCurrentSection(updatedSection)

      setShowAddImageModal(false)
      resetImageForm()
      alert("✅ Image added successfully!")
    } catch (error) {
      alert("❌ Failed to add image: " + (error as Error).message)
    }
  }

  const handleEditImage = async () => {
    if (!selectedImage || !imageForm.alt.trim() || !currentSection) {
      alert("Please provide alt text for the image")
      return
    }

    try {
      let imageSrc = selectedImage.src
      let fileName = selectedImage.fileName
      let filePath = selectedImage.filePath

      if (imageForm.file) {
        // Delete old image file
        await deleteImageFromServer(selectedImage.fileName)

        // Upload new image
        const uploadResult = await uploadImageToServer(imageForm.file, currentSection.id)
        imageSrc = uploadResult.url
        fileName = uploadResult.fileName
        filePath = uploadResult.filePath
      }

      const updatedImages = currentSection.images.map((img) =>
        img.id === selectedImage.id
          ? { ...img, src: imageSrc, alt: imageForm.alt, fileName: fileName, filePath: filePath }
          : img,
      )

      const updatedSection = { ...currentSection, images: updatedImages, updatedAt: new Date().toISOString() }

      const updatedSections = businessSections.map((section) =>
        section.id === currentSection.id ? updatedSection : section,
      )

      await saveBusinessSections(updatedSections)
      setCurrentSection(updatedSection)

      setShowEditImageModal(false)
      setSelectedImage(null)
      resetImageForm()
      alert("✅ Image updated successfully!")
    } catch (error) {
      alert("❌ Failed to update image: " + (error as Error).message)
    }
  }

  const handleDeleteImage = async (imageId: string) => {
    if (!confirm("Are you sure you want to delete this image?") || !currentSection) {
      return
    }

    try {
      const imageToDelete = currentSection.images.find((img) => img.id === imageId)

      // Delete image file from server
      if (imageToDelete) {
        await deleteImageFromServer(imageToDelete.fileName)
      }

      const updatedImages = currentSection.images
        .filter((img) => img.id !== imageId)
        .map((img, index) => ({ ...img, order: index + 1 }))

      const updatedSection = { ...currentSection, images: updatedImages, updatedAt: new Date().toISOString() }

      const updatedSections = businessSections.map((section) =>
        section.id === currentSection.id ? updatedSection : section,
      )

      await saveBusinessSections(updatedSections)
      setCurrentSection(updatedSection)

      alert("✅ Image deleted successfully!")
    } catch (error) {
      alert("❌ Failed to delete image")
    }
  }

  const handleMoveSectionOrder = async (sectionId: string, direction: "up" | "down") => {
    const currentIndex = businessSections.findIndex((section) => section.id === sectionId)
    if (currentIndex === -1) return

    const newIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1
    if (newIndex < 0 || newIndex >= businessSections.length) return

    const updatedSections = [...businessSections]
    const [movedSection] = updatedSections.splice(currentIndex, 1)
    updatedSections.splice(newIndex, 0, movedSection)

    const reorderedSections = updatedSections.map((section, index) => ({
      ...section,
      order: index + 1,
    }))

    try {
      await saveBusinessSections(reorderedSections)
    } catch (error) {
      alert("Failed to reorder sections")
    }
  }

  const handleMoveImage = async (imageId: string, direction: "up" | "down") => {
    if (!currentSection) return

    const currentIndex = currentSection.images.findIndex((img) => img.id === imageId)
    if (currentIndex === -1) return

    const newIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1
    if (newIndex < 0 || newIndex >= currentSection.images.length) return

    const updatedImages = [...currentSection.images]
    const [movedImage] = updatedImages.splice(currentIndex, 1)
    updatedImages.splice(newIndex, 0, movedImage)

    const reorderedImages = updatedImages.map((img, index) => ({
      ...img,
      order: index + 1,
    }))

    const updatedSection = { ...currentSection, images: reorderedImages, updatedAt: new Date().toISOString() }

    const updatedSections = businessSections.map((section) =>
      section.id === currentSection.id ? updatedSection : section,
    )

    try {
      await saveBusinessSections(updatedSections)
      setCurrentSection(updatedSection)
    } catch (error) {
      alert("Failed to reorder images")
    }
  }

  // Utility functions
  const resetImageForm = () => {
    setImageForm({
      id: "",
      src: "",
      alt: "",
      file: null,
      fileName: "",
      filePath: "",
    })
  }

  const resetSectionForm = () => {
    setSectionForm({
      header: "",
      description: "",
      isActive: true,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file")
        return
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB")
        return
      }

      setImageForm((prev) => ({ ...prev, file }))
    }
  }

  const filteredSections = businessSections.filter(
    (section) =>
      section.header.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.id.includes(searchTerm),
  )

  const filteredImages =
    currentSection?.images.filter(
      (img) => img.alt.toLowerCase().includes(searchTerm.toLowerCase()) || img.id.includes(searchTerm),
    ) || []

  // Loading state
  if (isLoading && businessSections.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading sections...</p>
        </div>
      </div>
    )
  }

  // Sections overview view
  if (viewMode === "sections") {
    return (
      <div className="min-h-screen bg-gray-50 p-2 sm:p-4 overflow-x-hidden">
        <div className="w-full max-w-none mx-auto">
          {/* Header */}
          <div className="bg-white shadow-lg rounded-xl p-3 sm:p-6 mb-4 sm:mb-6">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 break-words">Super Admin - Company Slider Sections Management</h1>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 break-words">Manage company slider images with headers and descriptions - Super Admin Access</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <div className="bg-blue-50 px-3 py-2 rounded-lg text-center sm:text-left">
                    <span className="text-xs sm:text-sm text-gray-600">Total Sections: </span>
                    <span className="font-semibold text-blue-600">{businessSections.length}</span>
                  </div>
                  <div className="bg-green-50 px-3 py-2 rounded-lg text-center sm:text-left">
                    <span className="text-xs sm:text-sm text-gray-600">Total Images: </span>
                    <span className="font-semibold text-green-600">
                      {businessSections.reduce((total, section) => total + section.images.length, 0)}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="search"
                    placeholder="Search sections..."
                    className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-full sm:w-auto min-w-0"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm whitespace-nowrap"
                    onClick={() => {
                      resetSectionForm()
                      setShowCreateSectionModal(true)
                    }}
                  >
                    <Plus className="w-4 h-4 flex-shrink-0" />
                    <span className="hidden sm:inline">Add Section</span>
                    <span className="sm:hidden">Add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sections Grid */}
          {businessSections.length === 0 ? (
            <div className="text-center py-8 sm:py-16">
              <div className="mx-auto h-24 w-24 sm:h-32 sm:w-32 text-gray-300 mb-6 sm:mb-8">
                <FolderPlus className="w-full h-full" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">No Company Slider Found</h2>
              <p className="text-sm sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Get started by creating your first Company Slider section with custom header and description and image.
              </p>
              <button
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-lg font-medium flex items-center gap-2 sm:gap-3 mx-auto"
                onClick={() => {
                  resetSectionForm()
                  setShowCreateSectionModal(true)
                }}
              >
                <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
                Create First Section
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {filteredSections.map((section, index) => (
                <div
                  key={section.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden"
                >
                  <div className="p-3 sm:p-4 lg:p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                            #{section.order}
                          </span>
                          <span
                            className={`text-xs px-2 py-1 rounded-full font-medium ${section.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                              }`}
                          >
                            {section.isActive ? "Active" : "Inactive"}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-2 line-clamp-2 break-words">{section.header}</h3>
                        {section.description && (
                          <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-3 break-words">{section.description}</p>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Images</span>
                        <span className="text-sm font-semibold text-gray-800">{section.images.length}</span>
                      </div>
                    </div>

                    {/* Image Preview */}
                    {section.images.length > 0 && (
                      <div className="mb-3 sm:mb-4">
                        <div className="grid grid-cols-4 gap-1 sm:gap-2">
                          {section.images.slice(0, 4).map((image) => (
                            <div key={image.id} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                              <img
                                src={image.src || "/placeholder.svg?height=100&width=100"}
                                alt={image.alt}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement
                                  target.src = "/placeholder.svg?height=100&width=100"
                                }}
                              />
                            </div>
                          ))}
                        </div>
                        {section.images.length > 4 && (
                          <p className="text-xs text-gray-500 mt-1 sm:mt-2 text-center">
                            +{section.images.length - 4} more images
                          </p>
                        )}
                      </div>
                    )}

                    <div className="flex gap-2 mb-2">
                      <button
                        className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1 sm:gap-2"
                        onClick={() => {
                          setCurrentSection(section)
                          setViewMode("section-detail")
                        }}
                      >
                        <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">Manage</span>
                        <span className="sm:hidden">Edit</span>
                      </button>
                      {/* <button
                        className="bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                        onClick={() => {
                          console.log("Deleting section: Krishna : ", section.header)
                          setSectionToDelete(section)
                          setShowDeleteSectionModal(true)
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete 1212
                      </button> */}
                    </div>

                    <div className="flex gap-1">
                      <button
                        className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium transition-colors disabled:opacity-50"
                        onClick={() => handleMoveSectionOrder(section.id, "up")}
                        disabled={index === 0}
                      >
                        <MoveUp className="w-3 h-3 mx-auto" />
                      </button>
                      <button
                        className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium transition-colors disabled:opacity-50"
                        onClick={() => handleMoveSectionOrder(section.id, "down")}
                        disabled={index === filteredSections.length - 1}
                      >
                        <MoveDown className="w-3 h-3 mx-auto" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Create Section Modal */}
        {showCreateSectionModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-2 sm:p-4 overflow-y-auto">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto mx-2 sm:mx-4">
              <div className="p-4 sm:p-6 border-b border-gray-200">
                <h2 className="text-lg sm:text-2xl font-bold text-gray-800">Super Admin - Create New Section</h2>
                <p className="text-sm sm:text-base text-gray-600">Add a new Company Slider section with custom header and description - Super Admin Access</p>
              </div>

              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Section Header *</label>
                  <input
                    type="text"
                    value={sectionForm.header}
                    onChange={(e) => setSectionForm((prev) => ({ ...prev, header: e.target.value }))}
                    placeholder="e.g., Company Slider Section header here..."
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    value={sectionForm.description}
                    onChange={(e) => setSectionForm((prev) => ({ ...prev, description: e.target.value }))}
                    placeholder="Brief description of this section..."
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={sectionForm.isActive}
                    onChange={(e) => setSectionForm((prev) => ({ ...prev, isActive: e.target.checked }))}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-700">Display this section on the website</label>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-sm font-semibold text-blue-800 mb-2">📁 Storage Information</h4>
                  <div className="text-sm text-blue-700 space-y-1">
                    <p>
                      <strong>Images:</strong>{" "}
                      <code className="bg-blue-100 px-2 py-1 rounded">public/images/upload/image/company-slider/</code>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex gap-3 justify-end">
                <button
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 flex items-center gap-2"
                  onClick={handleCreateSection}
                  disabled={isLoading}
                >
                  <Save className="w-4 h-4" />
                  {isLoading ? "Creating..." : "Create Section"}
                </button>
                <button
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setShowCreateSectionModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Section Confirmation Modal */}
        {showDeleteSectionModal && sectionToDelete && (
          <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-2 sm:p-4 overflow-y-auto">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-2 sm:mx-4">
              <div className="p-4 sm:p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 rounded-full">
                    <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800">Delete Section</h2>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Are you sure you want to delete the section <strong>"{sectionToDelete.header}"</strong>?
                </p>
                <div className="bg-red-50 p-3 sm:p-4 rounded-lg mb-4">
                  <p className="text-sm text-red-800">
                    <strong>Warning:</strong> This will permanently delete:
                  </p>
                  <ul className="text-sm text-red-700 mt-2 list-disc list-inside">
                    <li>Header & description from Database</li>
                    <li>All {sectionToDelete.images.length} images from server folder</li>
                  </ul>
                  <p className="text-sm text-red-800 mt-2 font-medium">This action cannot be undone.</p>
                </div>
              </div>

              <div className="p-4 sm:p-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 disabled:opacity-50 flex items-center justify-center gap-2 text-sm sm:text-base"
                  onClick={handleDeleteSection}
                  disabled={isLoading}
                >
                  <Trash2 className="w-4 h-4" />
                  {isLoading ? "Deleting..." : "Delete Section"}
                </button>
                <button
                  className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm sm:text-base"
                  onClick={() => {
                    setShowDeleteSectionModal(false)
                    setSectionToDelete(null)
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  // Section detail view for managing images
  if (viewMode === "section-detail" && currentSection) {
    return (
      <div className="min-h-screen bg-gray-50 p-2 sm:p-4 overflow-x-hidden">
        <div className="w-full max-w-none mx-auto">
          {/* Header with back button */}
          <div className="bg-white shadow-lg rounded-xl p-3 sm:p-6 mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
              <button
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors self-start"
                onClick={() => {
                  setViewMode("sections")
                  setCurrentSection(null)
                  setSearchTerm("")
                }}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex-1 min-w-0">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 break-words">Super Admin - {currentSection.header}</h1>
                <p className="text-sm sm:text-base text-gray-600 break-words">{currentSection.description || "Manage images for this section - Super Admin Access"}</p>
                <p className="text-xs text-gray-500 mt-1 break-words">
                  Section ID: <code className="bg-gray-100 px-1 rounded">{currentSection.id}</code> | Images named:{" "}
                  <code className="bg-gray-100 px-1 rounded">{currentSection.id}_imageName.ext</code>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
                <button
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 sm:px-4 lg:px-6 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-xs sm:text-sm lg:text-base whitespace-nowrap"
                  onClick={() => {
                    setSectionForm({
                      header: currentSection.header,
                      description: currentSection.description,
                      isActive: currentSection.isActive,
                    })
                    setShowEditSectionModal(true)
                  }}
                >
                  <Settings className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="hidden sm:inline">Edit Section</span>
                  <span className="sm:hidden">Edit</span>
                </button>
                <button
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 sm:px-4 lg:px-6 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-xs sm:text-sm lg:text-base whitespace-nowrap"
                  onClick={() => {
                    resetImageForm()
                    setShowAddImageModal(true)
                  }}
                >
                  <Plus className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="hidden sm:inline">Add Image</span>
                  <span className="sm:hidden">Add</span>
                </button>
                <button
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 sm:px-4 lg:px-6 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-xs sm:text-sm lg:text-base whitespace-nowrap"
                  onClick={() => {
                    // console.log("Deleting section: Krishna : ", currentSection.header)
                    setSectionToDelete(currentSection)
                    DeleteSections(currentSection.header)
                    setShowDeleteSectionModal(true)
                  }}
                >
                  <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="hidden sm:inline">Delete Section</span>
                  <span className="sm:hidden">Delete</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <input
                type="search"
                placeholder="Search images..."
                className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-full sm:w-auto min-w-0 flex-1"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="bg-blue-50 px-3 py-2 rounded-lg text-center sm:text-left flex-shrink-0">
                <span className="text-xs sm:text-sm text-gray-600">Images: </span>
                <span className="font-semibold text-blue-600">{currentSection.images.length}</span>
              </div>
            </div>
          </div>

          {/* Images Grid */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                <span className="ml-3 text-lg text-gray-600">Processing...</span>
              </div>
            ) : filteredImages.length > 0 ? (
              <div className="p-3 sm:p-4 lg:p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 lg:gap-6">
                  {filteredImages.map((image, index) => (
                    <div
                      key={image.id}
                      className="bg-gray-50 rounded-lg p-2 sm:p-4 border border-gray-200 hover:border-blue-300 transition-colors"
                    >
                      <div className="aspect-square bg-white rounded-lg mb-2 sm:mb-3 flex items-center justify-center overflow-hidden">
                        <img
                          src={image.src || "/placeholder.svg?height=150&width=150"}
                          alt={image.alt}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = "/placeholder.svg?height=150&width=150"
                          }}
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="flex items-center justify-between">
                          {/* <span className="text-xs text-gray-500">#{image.order}</span> */}
                          <span className="text-xs text-gray-500">ID: {image.id}</span>
                        </div>

                        <p className="text-xs sm:text-sm font-medium text-gray-900 truncate break-words" title={image.alt}>
                          {image.alt}
                        </p>

                        <p className="text-xs text-gray-500 truncate break-words" title={image.fileName}>
                          📁 {image.fileName}
                        </p>

                        {/* <p className="text-xs text-blue-600 truncate" title={image.filePath}>
                          💾 {image.filePath}
                        </p> */}

                        <div className="flex gap-1">
                          <button
                            className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-700 px-1 sm:px-2 py-1 rounded text-xs font-medium transition-colors"
                            onClick={() => {
                              setSelectedImage(image)
                              setImageForm({
                                id: image.id,
                                src: image.src,
                                alt: image.alt,
                                file: null,
                                fileName: image.fileName,
                                filePath: image.filePath,
                              })
                              setShowEditImageModal(true)
                            }}
                          >
                            <Edit className="w-3 h-3 mx-auto" />
                          </button>

                          <button
                            className="bg-red-100 hover:bg-red-200 text-red-700 px-1 sm:px-2 py-1 rounded text-xs font-medium transition-colors"
                            onClick={() => handleDeleteImage(image.id)}
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="flex gap-1">
                          <button
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium transition-colors disabled:opacity-50"
                            onClick={() => handleMoveImage(image.id, "up")}
                            disabled={index === 0}
                          >
                            <MoveUp className="w-3 h-3 mx-auto" />
                          </button>

                          <button
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium transition-colors disabled:opacity-50"
                            onClick={() => handleMoveImage(image.id, "down")}
                            disabled={index === filteredImages.length - 1}
                          >
                            <MoveDown className="w-3 h-3 mx-auto" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8 sm:py-16">
                <div className="mx-auto h-20 w-20 sm:h-24 sm:w-24 text-gray-300 mb-4">
                  <Upload className="w-full h-full" />
                </div>
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">No images found</h3>
                <p className="text-sm sm:text-base text-gray-500 mb-4 px-4">Get started by adding your first logo image to this section.</p>
                <button
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 text-sm sm:text-base"
                  onClick={() => {
                    resetImageForm()
                    setShowAddImageModal(true)
                  }}
                >
                  Add First Image
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Add Image Modal */}
        {showAddImageModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-2 sm:p-4 overflow-y-auto">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto mx-2 sm:mx-4">
              <div className="p-4 sm:p-6 border-b border-gray-200">
                <h2 className="text-lg sm:text-2xl font-bold text-gray-800">Super Admin - Add New Image</h2>
                <p className="text-sm sm:text-base text-gray-600">Upload a new logo image to {currentSection.header} - Super Admin Access</p>
              </div>

              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Image *</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  />
                  {imageForm.file && (
                    <div className="mt-3 p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800">Selected: {imageForm.file.name}</p>
                      <p className="text-xs text-green-600 mt-1">
                        📁 Will be saved as:{" "}
                        <code className="bg-green-100 px-1 rounded">
                          {currentSection.id}_{imageForm.file.name.split(".").slice(0, -1).join(".")}.
                          {imageForm.file.name.split(".").pop()}
                        </code>
                      </p>
                    </div>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Supported formats: JPG, PNG, GIF, WebP (Max 5MB)</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Alternative Text *</label>
                  <input
                    type="text"
                    value={imageForm.alt}
                    onChange={(e) => setImageForm((prev) => ({ ...prev, alt: e.target.value }))}
                    placeholder="e.g., Company Logo, Partner Brand"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  />
                  <p className="text-xs text-gray-500 mt-1">This text will be used for accessibility and SEO</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Section:</strong> {currentSection.header}
                    <br />
                    <strong>Section ID:</strong> {currentSection.id}
                    <br />
                    <strong>Current Images:</strong> {currentSection.images.length}
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 disabled:opacity-50 flex items-center justify-center gap-2 text-sm sm:text-base"
                  onClick={handleAddImage}
                  disabled={isLoading}
                >
                  <Plus className="w-4 h-4" />
                  {isLoading ? "Uploading..." : "Add Image"}
                </button>
                <button
                  className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm sm:text-base"
                  onClick={() => setShowAddImageModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Section Modal */}
        {showEditSectionModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-2 sm:p-4 overflow-y-auto">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto mx-2 sm:mx-4">
              <div className="p-4 sm:p-6 border-b border-gray-200">
                <h2 className="text-lg sm:text-2xl font-bold text-gray-800">Super Admin - Edit Section</h2>
                <p className="text-sm sm:text-base text-gray-600">Update section header and description - Super Admin Access</p>
              </div>

              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Section Header *</label>
                  <input
                    type="text"
                    value={sectionForm.header}
                    onChange={(e) => setSectionForm((prev) => ({ ...prev, header: e.target.value }))}
                    placeholder="e.g., Our Business Partners, Customer Success Stories"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    value={sectionForm.description}
                    onChange={(e) => setSectionForm((prev) => ({ ...prev, description: e.target.value }))}
                    placeholder="Brief description of this section..."
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={sectionForm.isActive}
                    onChange={(e) => setSectionForm((prev) => ({ ...prev, isActive: e.target.checked }))}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-700">Display this section on the website</label>
                </div>
              </div>

              <div className="p-4 sm:p-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 flex items-center justify-center gap-2 text-sm sm:text-base"
                  onClick={handleUpdateSection}
                  disabled={isLoading}
                >
                  <Save className="w-4 h-4" />
                  {isLoading ? "Saving..." : "Save Changes"}
                </button>
                <button
                  className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm sm:text-base"
                  onClick={() => setShowEditSectionModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Image Modal */}
        {showEditImageModal && selectedImage && (
          <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-2 sm:p-4 overflow-y-auto">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto mx-2 sm:mx-4">
              <div className="p-4 sm:p-6 border-b border-gray-200">
                <h2 className="text-lg sm:text-2xl font-bold text-gray-800">Super Admin - Edit Image</h2>
                <p className="text-sm sm:text-base text-gray-600">Update image details - Super Admin Access</p>
              </div>

              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Image</label>
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4 flex items-center justify-center h-24 sm:h-32">
                    <img
                      src={selectedImage.src || "/placeholder.svg?height=120&width=120"}
                      alt={selectedImage.alt}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=120&width=120"
                      }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">📁 {selectedImage.fileName}</p>
                  <p className="text-xs text-blue-600 mt-1">💾 {selectedImage.filePath}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Replace Image (Optional)</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  />
                  {imageForm.file && (
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">New image selected: {imageForm.file.name}</p>
                      <p className="text-xs text-blue-600 mt-1">
                        📁 Will be saved as:{" "}
                        <code className="bg-blue-100 px-1 rounded">
                          {currentSection.id}_{imageForm.file.name.split(".").slice(0, -1).join(".")}.
                          {imageForm.file.name.split(".").pop()}
                        </code>
                      </p>
                      <p className="text-xs text-blue-600">📍 Location: public/images/upload/image/company-slider/</p>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Alternative Text *</label>
                  <input
                    type="text"
                    value={imageForm.alt}
                    onChange={(e) => setImageForm((prev) => ({ ...prev, alt: e.target.value }))}
                    placeholder="e.g., Company Logo, Partner Brand"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="p-4 sm:p-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 flex items-center justify-center gap-2 text-sm sm:text-base"
                  onClick={handleEditImage}
                  disabled={isLoading}
                >
                  <Save className="w-4 h-4" />
                  {isLoading ? "Saving..." : "Save Changes"}
                </button>
                <button
                  className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm sm:text-base"
                  onClick={() => {
                    setShowEditImageModal(false)
                    setSelectedImage(null)
                    resetImageForm()
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Section Confirmation Modal */}
        {showDeleteSectionModal && sectionToDelete && (
          <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-2 sm:p-4 overflow-y-auto">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-2 sm:mx-4">
              <div className="p-4 sm:p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 rounded-full">
                    <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800">Delete Section</h2>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Are you sure you want to delete the section <strong>"{sectionToDelete.header}"</strong>?
                </p>
                <div className="bg-red-50 p-3 sm:p-4 rounded-lg mb-4">
                  <p className="text-sm text-red-800">
                    <strong>Warning:</strong> This will permanently delete:
                  </p>
                  <ul className="text-sm text-red-700 mt-2 list-disc list-inside">
                    <li>Header & description from localStorage</li>
                    <li>All {sectionToDelete.images.length} images from server folder</li>
                    <li>All image paths from localStorage</li>
                  </ul>
                  <p className="text-sm text-red-800 mt-2 font-medium">This action cannot be undone.</p>
                </div>
              </div>

              <div className="p-4 sm:p-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 disabled:opacity-50 flex items-center justify-center gap-2 text-sm sm:text-base"
                  onClick={handleDeleteSection}
                  disabled={isLoading}
                >
                  <Trash2 className="w-4 h-4" />
                  {isLoading ? "Deleting..." : "Delete Section"}
                </button>
                <button
                  className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm sm:text-base"
                  onClick={() => {
                    setShowDeleteSectionModal(false)
                    setSectionToDelete(null)
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  return null
}

export default MultiSectionsAdmin
