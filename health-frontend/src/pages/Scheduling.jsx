import React, { useState } from 'react';

const Slot = ({ time, status }) => (
  <div className={`px-4 py-3 rounded-lg text-sm text-center ${status === 'available' ? 'bg-green-50 text-green-700' : 'bg-primary-red-50 text-primary-red'}`}>
    {time}
  </div>
);

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
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-1 card-clean">
        <div className="text-lg font-semibold mb-4">Book Appointment</div>
        <div className="space-y-4">
          <input placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-100 rounded-lg px-4 py-3" />
          <input placeholder="Address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full border border-gray-100 rounded-lg px-4 py-3" />
          <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full border border-gray-100 rounded-lg px-4 py-3" />
          <button className="btn-primary">Book Appointment</button>
        </div>
      </div>
      <div className="md:col-span-2 card-clean">
        <div className="text-lg font-semibold mb-4">Daily Schedule</div>
        <div className="grid grid-cols-2 gap-3">
          {slots.map((s) => (
            <Slot key={s.time} {...s} />
          ))}
        </div>

        <div className="mt-4 text-sm muted">Legend: <span className="ml-2 px-2 py-1 rounded bg-green-50 text-green-700">Available</span> <span className="ml-2 px-2 py-1 rounded bg-primary-red-50 text-primary-red">Unavailable</span></div>
      </div>
    </div>
  );
};

export default Scheduling;
