import React, { useRef, useState, useEffect } from 'react';

function Camera() {
  const [image, setImage] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Function to start the camera
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    startCamera();

    // Cleanup function to stop the video stream
    return () => {
      const stream = videoRef.current?.srcObject;
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (videoRef.current && canvas && context) {
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const imageSrc = canvas.toDataURL('image/png');
      setImage(imageSrc);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Camera</h2>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="relative mb-4">
          <video
            ref={videoRef}
            autoPlay
            className="w-full rounded-lg shadow-lg"
          />
          <canvas
            ref={canvasRef}
            className="hidden"
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
