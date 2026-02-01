import React from 'react';

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 font-sans text-gray-800">
      <h1 className="text-4xl font-bold mb-6 border-b pb-2">Terms of Service</h1>
      <p className="mb-4 text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
        <p>By accessing and using our background removal service, you accept and agree to be bound by the terms and provision of this agreement.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. Disclaimer</h2>
        <p>The materials on our website are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.</p>
      </section>
    </div>
  );
};

export default Terms;