"use client";

import React, { useState, useRef } from "react";
import { X, Image as ImageIcon, Video, Upload, Code, FileCode, MoreHorizontal } from "lucide-react";

interface MediaInsertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInsertImage: (url: string, position: "left" | "right" | "center") => void;
  onInsertVideo: (url: string) => void;
  onUploadImage?: (file: File) => Promise<string>;
}

const MediaInsertModal: React.FC<MediaInsertModalProps> = ({
  isOpen,
  onClose,
  onInsertImage,
  onInsertVideo,
  onUploadImage,
}) => {
  const [activeTab, setActiveTab] = useState<"image" | "video">("image");
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [imagePosition, setImagePosition] = useState<"left" | "right" | "center">("center");
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Reset to center whenever modal opens
  React.useEffect(() => {
    if (isOpen) {
      setImagePosition("center");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      let url: string;
      if (onUploadImage) {
        url = await onUploadImage(file);
      } else {
        // Fallback to local preview
        url = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        });
      }
      setImageUrl(url);
    } catch (error) {
      console.error("Failed to upload image:", error);
      alert("Failed to upload image. Please try again.");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleInsertImage = () => {
    if (!imageUrl.trim()) {
      alert("Please provide an image URL or upload an image");
      return;
    }
    onInsertImage(imageUrl, imagePosition);
    handleClose();
  };

  const handleInsertVideo = () => {
    if (!videoUrl.trim()) {
      alert("Please provide a video URL");
      return;
    }
    onInsertVideo(videoUrl);
    handleClose();
  };

  const handleClose = () => {
    setImageUrl("");
    setVideoUrl("");
    setImagePosition("center");
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      style={{ 
        position: 'fixed',
        zIndex: 9999,
        display: 'flex',
      }}
    >
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4"
        style={{
          backgroundColor: 'white',
          display: 'block',
          visibility: 'visible',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-900">Insert Media</h3>
          <button
            onClick={handleClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div 
          className="p-4"
          style={{
            display: 'block',
            visibility: 'visible',
          }}
        >
          {/* Tab Buttons */}
          <div className="flex gap-2 mb-4">
            <button
              type="button"
              onClick={() => setActiveTab("image")}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === "image"
                  ? "!bg-teal-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              Image
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("video")}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === "video"
                  ? "!bg-teal-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Video className="w-4 h-4" />
              Video
            </button>
          </div>

          {/* Image Tab */}
          {activeTab === "image" && (
            <div className="space-y-4">
              {/* Upload Button */}
              <div>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-teal-500 transition-colors disabled:opacity-50"
                >
                  <Upload className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">
                    {isUploading ? "Uploading..." : "Upload Image"}
                  </span>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>

              {/* Image URL Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Or enter image URL
                </label>
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                />
              </div>

              {/* Image Preview */}
              {imageUrl && (
                <div 
                  className="border border-gray-200 rounded-lg p-2"
                  style={{
                    display: 'block',
                    visibility: 'visible',
                  }}
                >
                  <img
                    src={imageUrl}
                    alt="Preview"
                    className="w-full h-auto max-h-48 object-contain rounded"
                    style={{
                      display: 'block',
                      visibility: 'visible',
                      maxWidth: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                    }}
                    onError={() => setImageUrl("")}
                  />
                </div>
              )}

              {/* Position Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image Position
                </label>
                <div className="flex gap-2">
                  {(["left", "center", "right"] as const).map((pos) => (
                    <button
                      key={pos}
                      type="button"
                      onClick={() => setImagePosition(pos)}
                      className={`flex-1 px-4 py-2 rounded-lg border-2 transition-colors ${
                        imagePosition === pos
                          ? "border-teal-600 bg-teal-50 text-teal-700 font-medium"
                          : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                      }`}
                      style={{
                        display: 'block',
                        visibility: 'visible',
                        ...(imagePosition === pos && {
                          borderColor: '#0d9488',
                          backgroundColor: '#f0fdfa',
                          color: '#134e4a',
                        }),
                      }}
                    >
                      {pos.charAt(0).toUpperCase() + pos.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Insert Button */}
              <button
                type="button"
                onClick={handleInsertImage}
                className="w-full px-4 py-2 !bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                Insert Image
              </button>
            </div>
          )}

          {/* Video Tab */}
          {activeTab === "video" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Video URL
                </label>
                <input
                  type="text"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Supports YouTube, Vimeo, and direct video links
                </p>
              </div>

              {/* Insert Button */}
              <button
                type="button"
                onClick={handleInsertVideo}
                className="w-full px-4 py-2 !bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                Insert Video
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaInsertModal;

