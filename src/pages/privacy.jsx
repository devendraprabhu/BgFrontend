import React from 'react';

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 font-sans text-gray-800">
      <h1 className="text-4xl font-bold mb-6 border-b pb-2">Privacy Policy</h1>
      <p className="mb-4 text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
        <p className="mb-2">Our service is designed to remove backgrounds from images. To do this, we collect:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Image Data:</strong> The images you upload are processed by our backend server.</li>
          <li><strong>Temporary Storage:</strong> Images are stored temporarily in our 'uploads' and 'processed' folders to allow for AI processing and downloading.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Data</h2>
        <p>We use your uploaded images solely to provide the background removal service. We do not use your images to train AI models, nor do we share them with third parties.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. Data Retention</h2>
        <p>Uploaded and processed images are typically deleted from our server after a short period (e.g., 24 hours) to maintain server performance and user privacy.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Security</h2>
        <p>We implement basic security measures to protect your data during the upload and processing phases using standard server protocols.</p>
      </section>
    </div>
  );
};

export default Privacy;