import React, { useState } from 'react';

const Scheduling = () => {
  const [form, setForm] = useState({ name: '', address: '', date: '' });
  const slots = [
    { time: '09:00', status: 'available' },
    { time: '10:00', status: 'unavailable' },
    { time: '11:00', status: 'available' },
    { time: '13:00', status: 'available' },
    { time: '14:00', status: 'unavailable' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
      {/* Booking Form */}
      <section style={{ gridColumn: 'span 1', background: '#FFFFFF', padding: 20, borderRadius: 12, boxShadow: '0 10px 30px rgba(15,23,42,0.06)' }}>
        <h3 style={{ margin: 0, marginBottom: 12, fontSize: 18, fontWeight: 700 }}>Book Appointment</h3>

        <div style={{ display: 'grid', gap: 12, marginTop: 6 }}>
          <label style={{ fontSize: 13, color: '#374151' }}>Full Name</label>
          <input
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #E6E9EE', outline: 'none', boxShadow: 'inset 0 1px 0 rgba(15,23,42,0.02)' }}
          />

          <label style={{ fontSize: 13, color: '#374151' }}>Address</label>
          <input
            placeholder="Address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #E6E9EE', outline: 'none', boxShadow: 'inset 0 1px 0 rgba(15,23,42,0.02)' }}
          />

          <label style={{ fontSize: 13, color: '#374151' }}>Date (dd/mm/yyyy)</label>
          <div style={{ position: 'relative' }}>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              style={{ width: '100%', padding: '12px 40px 12px 14px', borderRadius: 10, border: '1px solid #E6E9EE', outline: 'none', boxShadow: 'inset 0 1px 0 rgba(15,23,42,0.02)' }}
            />
            <div style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 6 }}>
            <button style={{ padding: '10px 18px', borderRadius: 10, background: '#C94A4A', color: '#FFFFFF', border: 'none', cursor: 'pointer', fontWeight: 600, boxShadow: '0 8px 20px rgba(201,74,74,0.12)' }}>Book Appointment</button>
          </div>
        </div>
      </section>

      {/* Daily Schedule Card */}
      <section style={{ gridColumn: 'span 2', background: '#FFFFFF', padding: 20, borderRadius: 12, boxShadow: '0 10px 30px rgba(15,23,42,0.06)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Daily Schedule</h3>
          <div style={{ fontSize: 13, color: '#6B7280' }}>Today</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {slots.map((s) => (
            <div key={s.time} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 12px', borderRadius: 10, border: '1px solid #F3F4F6' }}>
              <div style={{ fontSize: 15, color: '#111827' }}>{s.time}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 10, height: 10, borderRadius: 999, background: s.status === 'available' ? '#10B981' : '#F87171', display: 'inline-block' }} />
                <div style={{ fontSize: 13, color: s.status === 'available' ? '#065f46' : '#991b1b' }}>{s.status === 'available' ? 'Available' : 'Unavailable'}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: '#10B981', display: 'inline-block' }} />
            <div style={{ fontSize: 13, color: '#065f46' }}>Available</div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: '#F87171', display: 'inline-block' }} />
            <div style={{ fontSize: 13, color: '#991b1b' }}>Unavailable</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scheduling;
