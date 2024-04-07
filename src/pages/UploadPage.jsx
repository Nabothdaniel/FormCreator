import React, { useState } from 'react';

function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileType, setFileType] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFileType(file.type);
  };

  return (
    <form>
      {/* Other form fields for student information */}
      <div>
        <label htmlFor="formFile">Upload Form:</label>
        <input
          type="file"
          id="formFile"
          name="formFile"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileChange}
        />
      </div>
      {selectedFile && (
        <div>
          {fileType === 'application/pdf' ? (
            <p>Uploaded PDF: {selectedFile.name}</p>
          ) : (
            <img src={URL.createObjectURL(selectedFile)} alt="Uploaded Form" />
          )}
        </div>
      )}
      <button type="submit" disabled={!selectedFile}>
        Submit
      </button>
    </form>
  );
}

export default UploadPage;
