import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl font-semibold mb-3">About SMMG Medical Plaza</h2>
      <p className="text-gray-700 mb-4">SMMG Medical Plaza provides compassionate, high-quality care. Our services include general practice, specialist consultations, diagnostics and emergency care.</p>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="font-medium mb-2">Contact</h3>
        <div className="text-sm text-gray-600">123 Health Road, City</div>
        <div className="text-sm text-gray-600">Phone: (555) 123-4567</div>
        <div className="text-sm text-gray-600">Email: contact@smmg.example</div>
      </div>

      <footer className="mt-6 text-sm text-gray-500">© 2025 SMMG Medical Plaza</footer>
    </div>
  );
};

export default About;
