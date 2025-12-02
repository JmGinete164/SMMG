import React, { useState } from 'react';

const sample = [
  { id: 1, date: '2025-11-01', diagnosis: 'Common Cold', doctor: 'Dr. Smith' },
  { id: 2, date: '2025-08-15', diagnosis: 'Allergic Rhinitis', doctor: 'Dr. Lee' },
  { id: 3, date: '2024-12-10', diagnosis: 'Fracture - Arm', doctor: 'Dr. Patel' },
];

const MedicalHistory = () => {
  const [selected, setSelected] = useState(sample[0]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 16px', background: 'linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%)', minHeight: 'calc(100vh - 100px)' }}>
      <div style={{ width: '100%', maxWidth: 1200, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {/* Visits List */}
        <aside style={{ gridColumn: 'span 1', background: '#FFFFFF', borderRadius: 14, padding: 20, boxShadow: '0 12px 32px rgba(15,23,42,0.08)', border: '1px solid #F1F5F9', minHeight: 420 }}>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Visits</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {sample.map((s) => (
              <div key={s.id} onClick={() => setSelected(s)} style={{ cursor: 'pointer', padding: '12px 0', borderBottom: '1px solid #F3F4F6', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#F9FAFB'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: '#111827' }}>{s.date}</div>
                  <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 2 }}>{s.diagnosis}</div>
                </div>
                <div style={{ fontSize: 11, color: '#9CA3AF', marginLeft: 8 }}>{s.doctor}</div>
              </div>
            ))}
          </div>
        </aside>

        {/* Medical Details */}
        <section style={{ gridColumn: 'span 2', background: '#FFFFFF', borderRadius: 14, padding: 20, boxShadow: '0 12px 32px rgba(15,23,42,0.08)', border: '1px solid #F1F5F9', minHeight: 420 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#111827' }}>{selected.diagnosis}</div>
              <div style={{ fontSize: 13, color: '#6B7280', marginTop: 4 }}>{selected.date} — Attending: {selected.doctor}</div>
            </div>
            <button style={{ padding: '10px 16px', borderRadius: 10, background: '#C94A4A', color: '#FFFFFF', border: 'none', cursor: 'pointer', fontWeight: 600, boxShadow: '0 8px 20px rgba(201,74,74,0.12)' }}>Download PDF</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
            <div style={{ background: '#F8FAFC', padding: 14, borderRadius: 12, border: '1px solid #EEF2F7' }}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, color: '#374151' }}>Diagnosis</div>
              <div style={{ fontSize: 13, color: '#6B7280' }}>{selected.diagnosis}</div>
            </div>

            <div style={{ background: '#F8FAFC', padding: 14, borderRadius: 12, border: '1px solid #EEF2F7' }}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, color: '#374151' }}>Allergies</div>
              <div style={{ fontSize: 13, color: '#6B7280' }}>None recorded</div>
            </div>

            <div style={{ background: '#F8FAFC', padding: 14, borderRadius: 12, border: '1px solid #EEF2F7' }}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, color: '#374151' }}>Prescriptions</div>
              <div style={{ fontSize: 13, color: '#6B7280' }}>Paracetamol 500mg</div>
            </div>

            <div style={{ background: '#F8FAFC', padding: 14, borderRadius: 12, border: '1px solid #EEF2F7' }}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, color: '#374151' }}>Doctor Notes</div>
              <div style={{ fontSize: 13, color: '#6B7280' }}>Patient advised rest and fluids.</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MedicalHistory;
