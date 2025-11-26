import React from 'react';

const Card = ({ title, children, href }) => (
  <div className="card-clean rounded-lg-14 p-5">
    <div className="text-base font-semibold mb-2">{title}</div>
    <div className="text-sm muted">{children}</div>
    {href && <a href={href} className="mt-3 inline-block text-primary-red">Open</a>}
  </div>
);

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="card-clean flex items-center justify-between p-6">
        <div>
          <div className="text-2xl font-bold">Hello, John</div>
          <div className="text-sm muted">Welcome back to SMMG Medical Plaza</div>
        </div>
        <div className="w-full max-w-xl ml-6 rounded-2xl-18 overflow-hidden shadow-soft">
          <img src="/banner-sample.jpg" alt="banner" className="w-full h-36 object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card title="Chatbot" href="/chatbot">Ask health questions and get AI assistance.</Card>
        <Card title="Schedule Appointment" href="/scheduling">Book or manage your upcoming appointments.</Card>
        <Card title="Medical History" href="/history">View your visits, diagnoses and prescriptions.</Card>
      </div>
    </div>
  );
};

export default Dashboard;
