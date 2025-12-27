"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"
import MediaInsertModal from "./MediaInsertModal"

type Props = {
  value: string
  onChange: (html: string) => void
  onUploadImage?: (file: File) => Promise<string> // returns public URL
  placeholder?: string
}

// Minimal rich text editor using contentEditable and Selection API
export default function RichTextEditor({ value, onChange, onUploadImage, placeholder }: Props) {
  const editorRef = useRef<HTMLDivElement | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const plusButtonRef = useRef<HTMLButtonElement | null>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false)
  const [plusButtonPosition, setPlusButtonPosition] = useState<{ top: number; visible: boolean }>({ top: 0, visible: false })
  const [selectionToolbar, setSelectionToolbar] = useState<{ top: number; left: number; visible: boolean }>({ top: 0, left: 0, visible: false })
  const savedRange = useRef<Range | null>(null)

  // Initialize or sync value without disturbing caret when typing
  useEffect(() => {
    const el = editorRef.current
    if (!el) return
    if (!isFocused && el.innerHTML !== value) {
      el.innerHTML = value || ""
    }
  }, [value, isFocused])

  const saveSelection = () => {
    const sel = window.getSelection()
    if (sel && sel.rangeCount > 0) {
      savedRange.current = sel.getRangeAt(0)
    }
  }

  const restoreSelection = () => {
    const sel = window.getSelection()
    if (sel && savedRange.current) {
      sel.removeAllRanges()
      sel.addRange(savedRange.current)
    }
  }

  const focusEditor = () => {
    const el = editorRef.current
    if (!el) return
    el.focus()
    restoreSelection()
  }

  const exec = (command: string, value?: string) => {
    restoreSelection()
    focusEditor()
    document.execCommand(command, false, value)
    // emit change
    if (editorRef.current) onChange(editorRef.current.innerHTML)
  }

  const handleCreateLink = () => {
    const url = window.prompt("Enter URL")
    if (!url) return
    let href = url.trim()
    if (!/^https?:\/\//i.test(href)) href = `https://${href}`
    const sel = window.getSelection()
    if (sel && sel.rangeCount > 0 && !sel.isCollapsed) {
      exec("createLink", href)
      // try to set target on the created link
      try {
        const el = editorRef.current
        if (el) {
          const links = el.querySelectorAll('a[href="' + href.replace(/"/g, '&quot;') + '"]')
          links.forEach((a) => {
            a.setAttribute("target", "_blank")
            a.setAttribute("rel", "noopener noreferrer")
            a.setAttribute("style", "color:#2563eb;text-decoration:underline;")
          })
        }
      } catch {}
    } else {
      focusEditor()
      document.execCommand(
        "insertHTML",
        false,
        `<a href="${href}" target="_blank" rel="noopener noreferrer" style="color:#2563eb;text-decoration:underline;">${href}</a>`
      )
      if (editorRef.current) onChange(editorRef.current.innerHTML)
    }
  }

  const handleImageClick = () => {
    saveSelection()
    fileInputRef.current?.click()
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      let url: string
      if (onUploadImage) {
        url = await onUploadImage(file)
      } else {
        // Fallback to local preview if no uploader provided
        url = await new Promise<string>((resolve) => {
          const reader = new FileReader()
          reader.onload = () => resolve(reader.result as string)
          reader.readAsDataURL(file)
        })
      }

      focusEditor()
      // Insert image at caret and add a trailing break to continue typing
      document.execCommand("insertImage", false, url)
      document.execCommand("insertHTML", false, "<br/>")
      if (editorRef.current) onChange(editorRef.current.innerHTML)
    } catch (err) {
      console.error("Failed to insert image", err)
    } finally {
      // reset input so same file can be re-selected
      if (fileInputRef.current) fileInputRef.current.value = ""
    }
  }

  const handleInsertImage = (url: string, position: "left" | "right" | "center") => {
    focusEditor()
    restoreSelection()
    
    let imgHtml: string
    
    if (position === "left") {
      // Left alignment: float left with margin - ONLY affects image, not text
      imgHtml = `<div style="float: left; margin-right: 15px; margin-bottom: 15px; margin-top: 0; max-width: 45%; width: auto; clear: none; text-align: left;">
        <img src="${url}" alt="" style="max-width: 100%; height: auto; display: block; width: 100%;" />
      </div>`
    } else if (position === "right") {
      // Right alignment: float right with margin - ONLY affects image, not text
      imgHtml = `<div style="float: right; margin-left: 15px; margin-bottom: 15px; margin-top: 0; max-width: 45%; width: auto; clear: none; text-align: left;">
        <img src="${url}" alt="" style="max-width: 100%; height: auto; display: block; width: 100%;" />
      </div>`
    } else {
      // Center alignment: block element, centered - ONLY affects image, not text
      imgHtml = `<div style="display: block; margin: 15px auto; clear: both; width: 100%; text-align: center;">
        <img src="${url}" alt="" style="max-width: 100%; height: auto; display: block; margin: 0 auto; width: auto;" />
      </div>`
    }
    
    document.execCommand("insertHTML", false, imgHtml)
    if (editorRef.current) onChange(editorRef.current.innerHTML)
  }

  const handleInsertVideo = (url: string) => {
    focusEditor()
    restoreSelection()
    
    // Check if it's a YouTube URL
    let embedUrl = url
    const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
    const youtubeMatch = url.match(youtubeRegex)
    if (youtubeMatch) {
      embedUrl = `https://www.youtube.com/embed/${youtubeMatch[1]}`
    } else {
      // Check if it's a Vimeo URL
      const vimeoRegex = /vimeo\.com\/(\d+)/
      const vimeoMatch = url.match(vimeoRegex)
      if (vimeoMatch) {
        embedUrl = `https://player.vimeo.com/video/${vimeoMatch[1]}`
      }
    }

    // Video always centered by default
    const videoHtml = `<div style="display: block; margin: 20px auto; text-align: center; clear: both; width: 100%;">
      <iframe 
        src="${embedUrl}" 
        width="560" 
        height="315" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        style="max-width: 100%; height: auto; min-height: 315px; display: block; margin: 0 auto;"
      ></iframe>
    </div><br/>`
    
    document.execCommand("insertHTML", false, videoHtml)
    if (editorRef.current) onChange(editorRef.current.innerHTML)
  }

  const handleMediaButtonClick = () => {
    saveSelection()
    setIsMediaModalOpen(true)
  }

  const updateSelectionToolbar = useCallback(() => {
    const editor = editorRef.current
    if (!editor) {
      setSelectionToolbar({ top: 0, left: 0, visible: false })
      return
    }

    const sel = window.getSelection()
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) {
      setSelectionToolbar({ top: 0, left: 0, visible: false })
      return
    }

    const range = sel.getRangeAt(0)
    const root = editorRef.current
    if (!root || !root.contains(range.commonAncestorContainer)) {
      setSelectionToolbar({ top: 0, left: 0, visible: false })
      return
    }

    try {
      const rect = range.getBoundingClientRect()
      const editorRect = editor.getBoundingClientRect()
      const editorContainer = editor.parentElement
      if (!editorContainer) {
        setSelectionToolbar({ top: 0, left: 0, visible: false })
        return
      }
      
      const containerRect = editorContainer.getBoundingClientRect()
      
      // Position toolbar above the selection, centered horizontally
      // Calculate relative to the container (which has padding-left: 40px)
      const top = rect.top - containerRect.top - 45 // Above selection with some space
      const left = rect.left - containerRect.left + (rect.width / 2) // Center of selection
      
      setSelectionToolbar({
        top: Math.max(5, top),
        left: Math.max(20, Math.min(left, containerRect.width - 20)), // Keep within bounds
        visible: true
      })
    } catch (error) {
      setSelectionToolbar({ top: 0, left: 0, visible: false })
    }
  }, [])

  const updatePlusButtonPosition = useCallback(() => {
    const editor = editorRef.current
    if (!editor || !isFocused) {
      setPlusButtonPosition({ top: 0, visible: false })
      return
    }

    const sel = window.getSelection()
    if (!sel || sel.rangeCount === 0) {
      setPlusButtonPosition({ top: 0, visible: false })
      return
    }

    // Don't show plus button if text is selected (show toolbar instead)
    if (!sel.isCollapsed) {
      setPlusButtonPosition({ top: 0, visible: false })
      return
    }

    try {
      const range = sel.getRangeAt(0).cloneRange()
      range.collapse(true) // Collapse to start of selection
      
      // Create a temporary element to measure position
      const tempSpan = document.createElement('span')
      tempSpan.style.position = 'absolute'
      tempSpan.style.visibility = 'hidden'
      tempSpan.style.whiteSpace = 'pre'
      tempSpan.textContent = '\u200b' // Zero-width space
      
      range.insertNode(tempSpan)
      const rect = tempSpan.getBoundingClientRect()
      const editorRect = editor.getBoundingClientRect()
      
      // Calculate position relative to editor, aligned with line center
      const lineHeight = rect.height || 20
      const top = rect.top - editorRect.top + editor.scrollTop - (lineHeight / 2) - 12
      
      // Remove temp element
      tempSpan.parentNode?.removeChild(tempSpan)
      
      setPlusButtonPosition({ 
        top: Math.max(0, top),
        visible: true 
      })
    } catch (error) {
      // Fallback to simpler method
      try {
        const range = sel.getRangeAt(0)
        const rect = range.getBoundingClientRect()
        const editorRect = editor.getBoundingClientRect()
        const lineHeight = rect.height || 20
        const top = rect.top - editorRect.top + editor.scrollTop - (lineHeight / 2) - 12
        setPlusButtonPosition({ 
          top: Math.max(0, top),
          visible: true 
        })
      } catch (e) {
        setPlusButtonPosition({ top: 0, visible: false })
      }
    }
  }, [isFocused])

  const handleInput = () => {
    if (editorRef.current) onChange(editorRef.current.innerHTML)
  }

  useEffect(() => {
    const handler = () => {
      const sel = window.getSelection()
      const root = editorRef.current
      if (!sel || !root) return
      if (sel.rangeCount === 0) return
      const node = sel.anchorNode as Node | null
      if (node && root.contains(node)) {
        savedRange.current = sel.getRangeAt(0)
        updateSelectionToolbar()
        updatePlusButtonPosition()
      } else {
        setSelectionToolbar({ top: 0, left: 0, visible: false })
      }
    }
    document.addEventListener("selectionchange", handler)
    return () => document.removeEventListener("selectionchange", handler)
  }, [isFocused, updatePlusButtonPosition, updateSelectionToolbar])

  useEffect(() => {
    const editor = editorRef.current
    if (!editor) return

    const handleMouseMove = () => {
      if (isFocused) {
        updatePlusButtonPosition()
      }
    }

    const handleClick = () => {
      setTimeout(() => {
        if (isFocused) {
          updateSelectionToolbar()
          updatePlusButtonPosition()
        }
      }, 10)
    }

    const handleMouseUp = () => {
      setTimeout(() => {
        if (isFocused) {
          updateSelectionToolbar()
          updatePlusButtonPosition()
        }
      }, 10)
    }

    editor.addEventListener("mousemove", handleMouseMove)
    editor.addEventListener("click", handleClick)
    editor.addEventListener("mouseup", handleMouseUp)
    editor.addEventListener("keyup", () => {
      updateSelectionToolbar()
      updatePlusButtonPosition()
    })

    return () => {
      editor.removeEventListener("mousemove", handleMouseMove)
      editor.removeEventListener("click", handleClick)
      editor.removeEventListener("mouseup", handleMouseUp)
      editor.removeEventListener("keyup", updatePlusButtonPosition)
    }
  }, [isFocused, updatePlusButtonPosition, updateSelectionToolbar])

  return (
    <div className="w-full rte-container">
      {/* Toolbar */}
      <div className="flex items-center gap-2 bg-gray-50 border rounded-t-lg px-2 py-1">
        <button type="button" onMouseDown={(e) => { e.preventDefault(); saveSelection() }} onClick={() => exec("bold")} className="px-2 py-1 text-sm font-semibold rounded hover:bg-gray-100">B</button>
        <button type="button" onMouseDown={(e) => { e.preventDefault(); saveSelection() }} onClick={() => exec("italic")} className="px-2 py-1 text-sm italic rounded hover:bg-gray-100">i</button>
        <button type="button" onMouseDown={(e) => { e.preventDefault(); saveSelection() }} onClick={handleCreateLink} className="px-2 py-1 text-sm rounded hover:bg-gray-100">🔗</button>
        <button type="button" onMouseDown={(e) => { e.preventDefault(); saveSelection() }} onClick={() => exec("formatBlock", "<h3>")} className="px-2 py-1 text-sm rounded hover:bg-gray-100">Tt</button>
        <div className="mx-2 h-5 w-px bg-gray-300" />
        <button type="button" onMouseDown={(e) => { e.preventDefault(); saveSelection() }} onClick={handleMediaButtonClick} className="px-2 py-1 text-sm rounded hover:bg-gray-100 flex items-center gap-1">
          <span>📎</span>
          <span>Media</span>
        </button>
        <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
      </div>

      {/* Editor Container with relative positioning */}
      <div className="relative" style={{ paddingLeft: '0px' }}>
        {/* Floating Plus Button */}
        {plusButtonPosition.visible && (
          <button
            ref={plusButtonRef}
            type="button"
            onClick={handleMediaButtonClick}
            className="absolute w-6 h-6 flex items-center justify-center bg-gray-100 hover:bg-teal-500 hover:text-white rounded-full border border-gray-300 hover:border-teal-500 transition-all duration-200 z-10 shadow-sm cursor-pointer"
            style={{ 
              top: `${plusButtonPosition.top}px`,
              left: '-36px',
              transform: 'translateY(-50%)',
            }}
            onMouseDown={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
            title="Insert media"
          >
            <span className="text-base font-semibold text-gray-600 hover:text-white leading-none">+</span>
          </button>
        )}

        {/* Floating Selection Toolbar */}
        {selectionToolbar.visible && (
          <div
            className="absolute bg-gray-800 text-white rounded-lg shadow-lg flex items-center gap-1 px-2 py-1 z-20"
            style={{
              top: `${selectionToolbar.top}px`,
              left: `${selectionToolbar.left}px`,
              transform: 'translateX(-50%)',
            }}
            onMouseDown={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
          >
            <button
              type="button"
              onClick={() => {
                saveSelection()
                exec("bold")
                setSelectionToolbar({ top: 0, left: 0, visible: false })
              }}
              className="px-2 py-1 text-sm font-semibold hover:bg-gray-700 rounded"
              title="Bold"
            >
              B
            </button>
            <button
              type="button"
              onClick={() => {
                saveSelection()
                exec("italic")
                setSelectionToolbar({ top: 0, left: 0, visible: false })
              }}
              className="px-2 py-1 text-sm italic hover:bg-gray-700 rounded"
              title="Italic"
            >
              i
            </button>
            <button
              type="button"
              onClick={() => {
                saveSelection()
                handleCreateLink()
                setSelectionToolbar({ top: 0, left: 0, visible: false })
              }}
              className="px-2 py-1 text-sm hover:bg-gray-700 rounded"
              title="Link"
            >
              🔗
            </button>
            <div className="w-px h-4 bg-gray-600 mx-1" />
            <button
              type="button"
              onClick={() => {
                saveSelection()
                exec("formatBlock", "<h3>")
                setSelectionToolbar({ top: 0, left: 0, visible: false })
              }}
              className="px-2 py-1 text-sm hover:bg-gray-700 rounded"
              title="Heading"
            >
              T
            </button>
            <button
              type="button"
              onClick={() => {
                saveSelection()
                exec("formatBlock", "<blockquote>")
                setSelectionToolbar({ top: 0, left: 0, visible: false })
              }}
              className="px-2 py-1 text-sm hover:bg-gray-700 rounded"
              title="Quote"
            >
              "
            </button>
            {/* Arrow pointing down */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>
        )}

        {/* Editor */}
        <div
          ref={editorRef}
          className="min-h-[160px] w-full border border-t-0 rounded-b-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent prose max-w-none relative"
          contentEditable
          onInput={handleInput}
          onBlur={() => {
            setIsFocused(false)
            setPlusButtonPosition({ top: 0, visible: false })
            setSelectionToolbar({ top: 0, left: 0, visible: false })
          }}
          onFocus={() => {
            setIsFocused(true)
            setTimeout(() => {
              updateSelectionToolbar()
              updatePlusButtonPosition()
            }, 10)
          }}
          data-placeholder={placeholder || "Write your content..."}
          suppressContentEditableWarning
        />
      </div>
      <style jsx>{`
        .rte-container :global(a) {
          color: #2563eb;
          text-decoration: underline;
        }
        .rte-container :global(img) {
          max-width: 100% !important;
          height: auto !important;
        }
        /* Only apply block display to non-floated images */
        .rte-container :global(img:not([style*="float"])) {
          display: block !important;
        }
        /* Floated image containers */
        .rte-container :global(div[style*="float: left"]),
        .rte-container :global(div[style*="float: right"]) {
          display: block;
        }
        .rte-container :global(div[style*="float: left"] img),
        .rte-container :global(div[style*="float: right"] img) {
          display: block;
          width: 100%;
          height: auto;
        }
        /* Center-aligned images - only affects images, not text */
        .rte-container :global(div[style*="text-align: center"]) {
          text-align: center;
        }
        .rte-container :global(div[style*="text-align: center"] img) {
          display: block;
          margin: 0 auto;
        }
        /* Ensure text alignment is not affected by image containers */
        .rte-container :global([contenteditable]) {
          text-align: left;
        }
        .rte-container :global([contenteditable] p),
        .rte-container :global([contenteditable] div:not([style*="float"]):not([style*="text-align: center"])) {
          text-align: left;
        }
        .rte-container {
          position: relative;
          display: block;
          width: 100%;
        }
        .rte-container :global([contenteditable]) {
          overflow: visible !important;
          min-height: 160px !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
        }
        /* Ensure content height adjusts with floated images */
        .rte-container :global([contenteditable] > *) {
          min-height: 1px;
        }
        /* Ensure content height adjusts with floated images - clearfix */
        .rte-container :global([contenteditable])::after {
          content: "";
          display: table;
          clear: both;
        }
      `}</style>

      {/* Media Insert Modal */}
      <MediaInsertModal
        isOpen={isMediaModalOpen}
        onClose={() => setIsMediaModalOpen(false)}
        onInsertImage={handleInsertImage}
        onInsertVideo={handleInsertVideo}
        onUploadImage={onUploadImage}
      />
    </div>
  )
}
