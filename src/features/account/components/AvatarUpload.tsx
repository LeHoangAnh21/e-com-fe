"use client";

import { useRef, useState } from "react";
import { Camera } from "lucide-react";

interface AvatarUploadProps {
  value: string | null;
  name?: string;
  onChange: (dataUrl: string) => void;
}

export default function AvatarUpload({
  value,
  name = "U",
  onChange,
}: AvatarUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => onChange(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`relative group w-24 h-24 rounded-full overflow-hidden cursor-pointer ring-4 transition-all ${
          isDragging ? "ring-orange-400" : "ring-gray-100 hover:ring-orange-200"
        }`}
      >
        {value ? (
          <img
            src={value}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-3xl font-bold">
            {name.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Camera className="w-5 h-5 text-white" />
          <span className="text-white text-[10px] mt-1 font-medium">Đổi ảnh</span>
        </div>
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/gif,image/webp"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />

      <p className="text-xs text-gray-400 text-center leading-relaxed">
        Tối đa 5MB · JPG, PNG, GIF, WEBP
      </p>
    </div>
  );
}
