import React from "react";

interface FileInputProps {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const FileInput: React.FC<FileInputProps> = ({ file, setFile }) => {
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        e.target.value = "";
        return;
      }
      setFile(selectedFile);
    } else {
      setFile(null);
    }
  };

  return (
    <div className="mb-3">
      <label htmlFor="supportingDocument" className="block mb-1 text-gray-300 text-xs font-medium">
        Supporting Document
      </label>
      <div className="relative overflow-hidden inline-block w-full">
        <input
          type="file"
          id="supportingDocument"
          name="supportingDocument"
          className="absolute -left-[9999px]"
          accept=".pdf,.doc,.docx"
          onChange={handleFileSelect}
        />
        <label
          htmlFor="supportingDocument"
          className={`file-input-label flex items-center justify-center p-2.5 bg-gray-800 border-2 border-dashed border-gray-600 rounded-md cursor-pointer text-gray-400 text-xs ${
            file ? "has-file" : ""
          }`}
        >
          <svg 
            width="14" 
            height="14" 
            fill="currentColor" 
            viewBox="0 0 24 24" 
            className="mr-1.5"
          >
            <path
              d={
                file
                  ? "M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z"
                  : "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"
              }
            />
          </svg>
          {file ? `${file.name} (${(file.size / 1024 / 1024).toFixed(2)}MB)` : "Choose file"}
        </label>
      </div>
      <div className="text-gray-500 text-[10px] mt-0.5">Resume or portfolio (PDF, DOC, DOCX - Max 5MB)</div>
    </div>
  );
};

export default FileInput;