import React from 'react';

const About = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 16px', background: 'linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%)', minHeight: 'calc(100vh - 100px)' }}>
      <div style={{ width: '100%', maxWidth: 900 }}>
        {/* Main Content Card */}
        <div style={{ background: '#FFFFFF', borderRadius: 14, padding: 32, boxShadow: '0 12px 32px rgba(15,23,42,0.08)', border: '1px solid #F1F5F9' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16, color: '#111827' }}>About SMMG Medical Plaza</h2>
          
          <p style={{ fontSize: 15, lineHeight: 1.6, color: '#4B5563', marginBottom: 20 }}>
            SMMG Medical Plaza provides compassionate, high-quality care. Our services include general practice, specialist consultations, diagnostics and emergency care.
          </p>

          <div style={{ background: '#F8FAFC', padding: 20, borderRadius: 12, border: '1px solid #EEF2F7', marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: '#111827' }}>Contact</h3>
            <div style={{ fontSize: 14, color: '#6B7280', marginBottom: 8 }}>123 Health Road, City</div>
            <div style={{ fontSize: 14, color: '#6B7280', marginBottom: 8 }}>Phone: (555) 123-4567</div>
            <div style={{ fontSize: 14, color: '#6B7280' }}>Email: contact@smmg.example</div>
          </div>

          <footer style={{ marginTop: 24, fontSize: 13, color: '#9CA3AF', borderTop: '1px solid #E5E7EB', paddingTop: 16 }}>© 2025 SMMG Medical Plaza</footer>
        </div>
      </div>
    </div>
  );
};

export default About;
