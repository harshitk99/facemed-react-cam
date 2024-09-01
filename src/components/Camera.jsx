import React, { useState } from 'react';
import Webcam from 'react-webcam';

function Camera() {
  const [image, setImage] = useState(null);
  const webcamRef = React.useRef(null);

  const capturePhoto = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Camera</h2>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="relative mb-4">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/png"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <button
          onClick={capturePhoto}
          className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
        >
          Capture Photo
        </button>
        {image && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Captured Photo</h3>
            <img
              src={image}
              alt="Captured"
              className="w-full max-w-xs rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Camera;
