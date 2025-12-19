import { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

interface FileUploadProps {
  onChange: (file: File | null) => void;
}

export default function FileUpload({ onChange }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [type, setType] = useState<"image" | "video" | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    onChange(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);

      if (file.type.startsWith("image")) setType("image");
      else if (file.type.startsWith("video")) setType("video");
    };
    reader.readAsDataURL(file);
  };

  return (
    <label
      className="relative block cursor-pointer rounded-xl border-2 border-dashed border-[#1C398E] p-5 text-center hover:bg-blue-300 transition"
      onClick={() => inputRef.current?.click()}
    >
      {!preview && (
        <div className="flex flex-col items-center gap-3 text-[#1C398E]">
          <FaCloudUploadAlt size={32} />
          <p className="text-sm">
            Upload file disini
          </p>
          <span className="rounded-full bg-[#1C398E] px-4 py-2 text-sm text-white">
            Browse File
          </span>
        </div>
      )}

      {preview && type === "image" && (
        <img
          src={preview}
          alt="Preview"
          className="rounded-xl w-full max-h-32 object-cover"
        />
      )}

      {preview && type === "video" && (
        <video
          src={preview}
          controls
          className="rounded-xl w-full max-h-32"
        />
      )}

      <input
        ref={inputRef}
        type="file"
        name="foto"
        accept=".png,.jpg,.jpeg,.mp4"
        className="hidden"
        onChange={handleFileChange}
      />
    </label>
  );
}
