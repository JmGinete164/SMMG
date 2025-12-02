import React, { useState } from 'react';

const Scheduling = () => {
  const [form, setForm] = useState({ name: '', address: '', date: '' });
  const [focused, setFocused] = useState(null);
  const slots = [
    { time: '09:00', status: 'available' },
    { time: '10:00', status: 'unavailable' },
    { time: '11:00', status: 'available' },
    { time: '13:00', status: 'available' },
    { time: '14:00', status: 'unavailable' },
  ];

  const inputStyle = (isFocused) => ({
    width: '100%',
    padding: '14px 16px',
    fontSize: 15,
    borderRadius: 12,
    border: `2px solid ${isFocused ? '#C94A4A' : '#E5E7EB'}`,
    background: '#FAFBFC',
    outline: 'none',
    transition: 'all 0.2s ease',
    color: '#111827',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
    '::placeholder': { color: '#9CA3AF' }
  });

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
      {/* Booking Form */}
      <section style={{ gridColumn: 'span 1', background: '#FFFFFF', padding: '32px', borderRadius: 16, boxShadow: '0 12px 32px rgba(15,23,42,0.08)', border: '1px solid #F1F5F9' }}>
        <h3 style={{ margin: 0, marginBottom: 28, fontSize: 20, fontWeight: 700, color: '#111827' }}>Book Appointment</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Full Name Field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <label style={{ fontSize: 14, fontWeight: 600, color: '#374151', letterSpacing: '-0.3px' }}>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused(null)}
              style={inputStyle(focused === 'name')}
            />
          </div>

          {/* Address Field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <label style={{ fontSize: 14, fontWeight: 600, color: '#374151', letterSpacing: '-0.3px' }}>Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              onFocus={() => setFocused('address')}
              onBlur={() => setFocused(null)}
              style={inputStyle(focused === 'address')}
            />
          </div>

          {/* Date Field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <label style={{ fontSize: 14, fontWeight: 600, color: '#374151', letterSpacing: '-0.3px' }}>Appointment Date</label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                onFocus={() => setFocused('date')}
                onBlur={() => setFocused(null)}
                style={{
                  ...inputStyle(focused === 'date'),
                  paddingRight: '48px',
                  cursor: 'pointer'
                }}
              />
              <div style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            style={{ 
              padding: '14px 28px', 
              marginTop: 8,
              borderRadius: 12, 
              background: '#C94A4A', 
              color: '#FFFFFF', 
              border: 'none', 
              cursor: 'pointer', 
              fontWeight: 600,
              fontSize: 15,
              boxShadow: '0 8px 20px rgba(201,74,74,0.18)',
              transition: 'all 0.2s ease',
              width: '100%',
              letterSpacing: '-0.3px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#B83939';
              e.target.style.boxShadow = '0 12px 28px rgba(201,74,74,0.24)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#C94A4A';
              e.target.style.boxShadow = '0 8px 20px rgba(201,74,74,0.18)';
            }}
          >
            Book Appointment
          </button>
        </div>
      </section>

      {/* Daily Schedule Card */}
      <section style={{ gridColumn: 'span 2', background: '#FFFFFF', padding: '32px', borderRadius: 16, boxShadow: '0 12px 32px rgba(15,23,42,0.08)', border: '1px solid #F1F5F9' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#111827' }}>Daily Schedule</h3>
          <div style={{ fontSize: 14, fontWeight: 500, color: '#6B7280' }}>Today</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {slots.map((s) => (
            <div key={s.time} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', borderRadius: 12, border: `1px solid ${s.status === 'available' ? '#DBEAFE' : '#FEE2E2'}`, background: s.status === 'available' ? '#F0F9FF' : '#FEF2F2', transition: 'all 0.2s ease' }}>
              <div style={{ fontSize: 15, fontWeight: 500, color: '#111827' }}>{s.time}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 12, height: 12, borderRadius: 999, background: s.status === 'available' ? '#10B981' : '#EF4444', display: 'inline-block', boxShadow: `0 0 0 3px ${s.status === 'available' ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)'}` }} />
                <div style={{ fontSize: 14, fontWeight: 500, color: s.status === 'available' ? '#047857' : '#DC2626' }}>{s.status === 'available' ? 'Available' : 'Unavailable'}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid #E5E7EB', display: 'flex', gap: 32, alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <span style={{ width: 12, height: 12, borderRadius: 999, background: '#10B981', display: 'inline-block', boxShadow: 'rgba(16,185,129,0.1)' }} />
            <div style={{ fontSize: 14, fontWeight: 500, color: '#047857' }}>Available</div>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <span style={{ width: 12, height: 12, borderRadius: 999, background: '#EF4444', display: 'inline-block', boxShadow: 'rgba(239,68,68,0.1)' }} />
            <div style={{ fontSize: 14, fontWeight: 500, color: '#DC2626' }}>Unavailable</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scheduling;
