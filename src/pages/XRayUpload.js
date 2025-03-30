import React, { useState } from 'react'; // Import React and the useState hook for state management
import './Upload.css'; // Import CSS for styling the component

const UploadPage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]); // State to store selected files
  const [error, setError] = useState(''); // State to store error messages

  // Function to handle file selection from the input
  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files); // Convert FileList object into an array
    const validFormats = ['image/jpeg', 'image/png', 'image/bmp', 'application/dicom']; // Allowed file types
    const maxSize = 5 * 1024 * 1024; // Maximum allowed file size in bytes (5 MB)

    // Validate each file selected by the user
    const validatedFiles = files.filter((file) => {
      if (!validFormats.includes(file.type)) { // Check if file type is not valid
        setError(`Invalid file type: ${file.name}. Please upload a JPG, PNG, BMP, or DICOM file.`); // Set error for invalid format
        return false; // Exclude invalid file
      } else if (file.size > maxSize) { // Check if file size exceeds the limit
        setError(`File size exceeds the 5 MB limit: ${file.name}. Please choose a smaller file.`); // Set error for size limit
        return false; // Exclude oversized file
      }
      return true; // File is valid
    });

    if (validatedFiles.length > 0) { // Check if any valid files exist
      setError(''); // Clear any previous error
      setSelectedFiles((prevFiles) => [...prevFiles, ...validatedFiles]); // Append valid files to the state
    }
  };

  // Function to remove a selected file
  const handleRemoveFile = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index)); // Remove file by filtering it out
  };

  // Function to handle the start of analysis
  const handleStartAnalysis = () => {
    alert(`Analysis started for ${selectedFiles.length} file(s).`); // Display an alert with the number of files being analyzed
    // Additional functionality for analysis can be added here
  };

  return (
    <div className="upload-container"> {/* Main container for the upload page */}
      <h1>Upload Your X-Ray</h1> {/* Heading for the page */}
      
      <div className="upload-box"> {/* Box to contain upload-related elements */}
        {/* Hidden file input element for selecting files */}
        <input
          type="file" // Input type for selecting files
          accept=".jpg,.png,.bmp,.dicom" // Restrict accepted file types
          onChange={handleFileSelect} // Call handleFileSelect on file selection
          id="file-input" // Unique ID for referencing the input
          style={{ display: 'none' }} // Hide the input element (will use a custom label for triggering)
          multiple // Allow users to select multiple files
        />
        {/* Label to trigger the hidden file input */}
        <label htmlFor="file-input" className="upload-label">
          <p>Upload your X-rays</p> {/* Text prompting the user to upload files */}
          <button className="upload-button">Select files from device</button> {/* Button styled as part of the label */}
        </label>

        {/* Show selected files if any exist */}
        {selectedFiles.length > 0 && (
          <div className="file-info"> {/* Section to display file details */}
            <p>Selected files:</p> {/* Heading for the list of files */}
            <ul>
              {selectedFiles.map((file, index) => ( // Loop through the selected files
                <li key={index}> {/* Display each file with a unique key */}
                  {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB) {/* Show file name and size in MB */}
                  <button className="remove-button" onClick={() => handleRemoveFile(index)}>Remove</button> {/* Remove button for each file */}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Display an error message if an error exists */}
        {error && <p className="error-message">{error}</p>}
      </div>

      {/* Button to start analysis, shown only if there are valid files and no errors */}
      {selectedFiles.length > 0 && !error && (
        <div className="analysis-section"> {/* Section for analysis button */}
          <button className="start-analysis-button" onClick={handleStartAnalysis}>Start Analysis</button> {/* Button to trigger analysis */}
          <p className="instructions-note">Click the button above to start analysis on your X-rays.</p> {/* Note below the button */}
        </div>
      )}

      {/* Instructions for the user about file upload */}
      <div className="instructions">
        <h2>Instructions for Uploading</h2> {/* Instructions heading */}
        <ul>
          <li><b>Supported file formats: JPG, PNG, BMP, DICOM</b></li> {/* Mention allowed file formats */}
          <li><b>Maximum file size: 5 MB per file</b></li> {/* Mention size limit */}
          <li><b>You can upload multiple files at once.</b></li> {/* Mention support for multiple file uploads */}
        </ul>
      </div>
    </div>
  );
};

export default UploadPage; // Export the component to use it in other parts of the application
