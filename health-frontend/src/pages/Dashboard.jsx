import React from 'react';

const Card = ({ title, children, href }) => (
  <div style={{ padding: '18px', backgroundColor: '#FFFFFF', borderRadius: '12px', boxShadow: '0 6px 18px rgba(15,23,42,0.06)' }}>
    <div style={{ fontSize: '16px', fontWeight: 600, color: '#1F2937', marginBottom: 8 }}>{title}</div>
    <div style={{ fontSize: '13px', color: '#6B7280' }}>{children}</div>
    {href && <a href={href} style={{ display: 'inline-block', marginTop: 12, color: '#C94A4A', textDecoration: 'none', fontWeight: 600 }}>Open →</a>}
  </div>
);

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Header / Welcome */}
      <div style={{ padding: 20 }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: '#1F2937' }}>Welcome, Clarklee B. Chan</div>
        <div style={{ fontSize: 13, color: '#6B7280', marginTop: 6 }}>Manage your health, appointments, and records</div>
      </div>

      {/* Featured banner */}
      <section style={{ display: 'flex', gap: 20, alignItems: 'stretch', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 720px', minHeight: 260, borderRadius: 14, overflow: 'hidden', background: 'linear-gradient(90deg,#FFF5F5, #FFFFFF)', boxShadow: '0 8px 24px rgba(15,23,42,0.06)', position: 'relative', padding: 28 }}>
          <div style={{ maxWidth: 520 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1F2937', marginBottom: 12 }}>BENEFITS OF SOCIAL MEDIA IN THE HEALTHCARE INDUSTRY</h2>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.6 }}>Discover how social media transforms patient engagement, education, and community building in modern healthcare. Learn practical strategies for clinics and providers.</p>
          </div>
          <img src="/banner-sample.jpg" alt="banner" style={{ position: 'absolute', right: 20, bottom: 12, height: 180, objectFit: 'cover', borderRadius: 12, boxShadow: '0 10px 30px rgba(15,23,42,0.08)' }} />
        </div>

        {/* Right column: circular images stacked */}
        <aside style={{ width: 220, display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center', justifyContent: 'flex-start' }}>
          <div style={{ width: 160, height: 160, borderRadius: '50%', overflow: 'hidden', boxShadow: '0 12px 30px rgba(15,23,42,0.08)', border: '4px solid #FFFFFF' }}>
            <img src="/circle1.jpg" alt="medical scene 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div style={{ width: 120, height: 120, borderRadius: '50%', overflow: 'hidden', boxShadow: '0 10px 24px rgba(15,23,42,0.06)', border: '4px solid #FFFFFF' }}>
            <img src="/circle2.jpg" alt="medical scene 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div style={{ width: 100, height: 100, borderRadius: '50%', overflow: 'hidden', boxShadow: '0 8px 18px rgba(15,23,42,0.06)', border: '4px solid #FFFFFF' }}>
            <img src="/circle3.jpg" alt="medical scene 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </aside>
      </section>

      {/* Secondary banner / promo */}
      <div style={{ borderRadius: 14, padding: 22, background: 'linear-gradient(90deg,#FFFFFF,#FFF5F5)', boxShadow: '0 6px 20px rgba(15,23,42,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ maxWidth: 900 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1F2937', marginBottom: 8 }}>IS IT WORTH IT TO INVEST IN AN ONLINE MEDICAL ADVERTISEMENT?</h3>
          <p style={{ fontSize: 14, color: '#6B7280', margin: 0 }}>Learn how digital marketing strategies and targeted campaigns can help your practice reach more patients and grow sustainably.</p>
        </div>
        <img src="/banner-medical.jpg" alt="ad" style={{ width: 220, height: 120, objectFit: 'cover', borderRadius: 10, boxShadow: '0 10px 30px rgba(15,23,42,0.08)' }} />
      </div>

      {/* Quick action cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
        <Card title="Chatbot" href="/chatbot">Ask health questions and get AI assistance.</Card>
        <Card title="Schedule Appointment" href="/scheduling">Book or manage your upcoming appointments.</Card>
        <Card title="Medical History" href="/history">View your visits, diagnoses and prescriptions.</Card>
      </div>
    </div>
  );
};

export default Dashboard;
