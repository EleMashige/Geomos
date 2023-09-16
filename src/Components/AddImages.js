import React, { useState } from 'react';
import { storage } from '../firebase';
function AddImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleUpload = () => {
    if (selectedFile) {
      const storageRef = storage.ref(`geomos-images/${selectedFile.name}`);
      const uploadTask = storageRef.put(selectedFile);
      console.log(storageRef)
      console.log(selectedFile.name)
      console.log(storageRef[0])
    //   uploadTask.on('state_changed', /* handle progress */);
    //   uploadTask.then(() => {

    //     // Image uploaded successfully, you can save its URL to the database
    //     storageRef.getDownloadURL().then((downloadURL) => {
    //       // Save the downloadURL in your database or perform other actions
    //     });
    //   });
    }
  };
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
export default AddImage;
