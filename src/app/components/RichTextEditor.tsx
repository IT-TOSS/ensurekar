"use client"

import React, { useEffect, useRef, useState } from "react"

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
  const [isFocused, setIsFocused] = useState(false)
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
      }
    }
    document.addEventListener("selectionchange", handler)
    return () => document.removeEventListener("selectionchange", handler)
  }, [])

  return (
    <div className="w-full rte-container">
      {/* Toolbar */}
      <div className="flex items-center gap-2 bg-gray-50 border rounded-t-lg px-2 py-1">
        <button type="button" onMouseDown={(e) => { e.preventDefault(); saveSelection() }} onClick={() => exec("bold")} className="px-2 py-1 text-sm font-semibold rounded hover:bg-gray-100">B</button>
        <button type="button" onMouseDown={(e) => { e.preventDefault(); saveSelection() }} onClick={() => exec("italic")} className="px-2 py-1 text-sm italic rounded hover:bg-gray-100">i</button>
        <button type="button" onMouseDown={(e) => { e.preventDefault(); saveSelection() }} onClick={handleCreateLink} className="px-2 py-1 text-sm rounded hover:bg-gray-100">🔗</button>
        <button type="button" onMouseDown={(e) => { e.preventDefault(); saveSelection() }} onClick={() => exec("formatBlock", "<h3>")} className="px-2 py-1 text-sm rounded hover:bg-gray-100">Tt</button>
        <div className="mx-2 h-5 w-px bg-gray-300" />
        <button type="button" onMouseDown={(e) => { e.preventDefault(); saveSelection() }} onClick={handleImageClick} className="px-2 py-1 text-sm rounded hover:bg-gray-100">🖼️ Insert photo</button>
        <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        className="min-h-[160px] w-full border border-t-0 rounded-b-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent prose max-w-none"
        contentEditable
        onInput={handleInput}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        data-placeholder={placeholder || "Write your content..."}
        suppressContentEditableWarning
      />
      <style jsx>{`
        .rte-container :global(a) {
          color: #2563eb;
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}
