import React, { useState } from 'react';
import FormAction from './FormAction';

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  return (
    <form>
      {/* Other student information fields */}
      <div className='inline-flex gap-3 mb-4'>
        <label htmlFor="studentImage">upload Image:</label>
        <input
          type="file"
          id="studentImage"
          name="studentImage"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      {selectedImage && (
        <div>
          <img src={URL.createObjectURL(selectedImage)} className='w-[100%] object-cover h-[40%]' alt="Selected Image" />
        </div>
      )}
      <FormAction text='submit' />
    </form>
  );
}

export default Upload;
