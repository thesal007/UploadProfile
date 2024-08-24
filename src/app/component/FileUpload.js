'use client'
import React, { useState } from 'react';
import '../component/style.css';  // Import the CSS file

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadStatus('No file selected.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/s3-upload', {  // Your backend API endpoint
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setUploadStatus(`File uploaded successfully: ${result.fileName}`);
      } else {
        setUploadStatus(`Error: ${result.error}`);
      }
    } catch (error) {
      setUploadStatus(`Upload failed: ${error.message}`);
    }
  };

  return (
    <div className="container">
      <div className="upload-form">
        <h2>Upload Your File</h2>
        <label className="custom-file-upload">
          <input type="file" onChange={handleFileChange} />
          Choose File
        </label>
        <button className="button-upload" onClick={handleUpload}>Upload</button>
        <div className="status-message">{uploadStatus}</div>
      </div>
    </div>
  );
};

export default FileUpload;
