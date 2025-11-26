import React, { useState } from 'react';

const sample = [
  { id: 1, date: '2025-11-01', diagnosis: 'Common Cold', doctor: 'Dr. Smith' },
  { id: 2, date: '2025-08-15', diagnosis: 'Allergic Rhinitis', doctor: 'Dr. Lee' },
  { id: 3, date: '2024-12-10', diagnosis: 'Fracture - Arm', doctor: 'Dr. Patel' },
];

const MedicalHistory = () => {
  const [selected, setSelected] = useState(sample[0]);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <aside className="md:col-span-1 card-clean" style={{minHeight: '420px'}}>
        <div className="text-lg font-semibold mb-3">Visits</div>
        <div className="divide-y">
          {sample.map((s) => (
            <div key={s.id} onClick={() => setSelected(s)} className="cursor-pointer py-3 hover:bg-gray-50 flex justify-between items-center">
              <div>
                <div className="text-sm font-medium">{s.date}</div>
                <div className="text-xs muted">{s.diagnosis}</div>
              </div>
              <div className="text-xs text-muted">{s.doctor}</div>
            </div>
          ))}
        </div>
      </aside>

      <section className="md:col-span-2 card-clean" style={{minHeight: '420px'}}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-lg font-semibold">{selected.diagnosis}</div>
            <div className="text-sm muted">{selected.date} — Attending: {selected.doctor}</div>
          </div>
          <button className="btn-primary">Download PDF</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="bg-white p-4 rounded-lg-14 shadow-sm">
            <div className="font-medium mb-2">Diagnosis</div>
            <div>{selected.diagnosis}</div>
          </div>

          <div className="bg-white p-4 rounded-lg-14 shadow-sm">
            <div className="font-medium mb-2">Allergies</div>
            <div>None recorded</div>
          </div>

          <div className="bg-white p-4 rounded-lg-14 shadow-sm">
            <div className="font-medium mb-2">Prescriptions</div>
            <div>Paracetamol 500mg</div>
          </div>

          <div className="bg-white p-4 rounded-lg-14 shadow-sm">
            <div className="font-medium mb-2">Doctor Notes</div>
            <div>Patient advised rest and fluids.</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalHistory;
