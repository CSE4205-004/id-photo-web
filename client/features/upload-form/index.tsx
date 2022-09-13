import React, { ChangeEvent, DragEvent, useRef, useState } from 'react';

const UploadForm = () => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [, setFile] = useState<File | null>(null);

  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div aria-label="uploadForm" onDragEnter={handleDrag}>
      <h2>이미지를 올려서 증명사진을 생성해보세요.</h2>
      <p>단 몇 초 만에, 자연스럽게</p>
      <div aria-label="drag-drop-box">
        <label htmlFor="input-file-upload">
          <input
            type="file"
            id="input-file-upload"
            multiple={false}
            accept="image/jpeg, image/jpg, image/png"
            onChange={handleChange}
            ref={inputRef}
          />
          <button
            type="button"
            aria-label="drag-drop-button"
            onClick={handleClick}
          >
            Drag &amp; Drop 또는 클릭하여 이미지를 업로드 해주세요.
          </button>
        </label>
      </div>
      {dragActive && (
        <div
          id="drag-file-element"
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        />
      )}
    </div>
  );
};
export default UploadForm;
