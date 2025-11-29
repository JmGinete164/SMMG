import React, { useState, useRef, useEffect } from 'react';

const QuickActions = ({ onQuick }) => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
    <button onClick={() => onQuick('I have a headache, what could it be?')} style={{ padding: '8px 12px', borderRadius: 999, background: '#FFF5F5', border: '1px solid #FEE2E2', color: '#C94A4A', cursor: 'pointer' }}>🩺 Ask symptoms</button>
    <button onClick={() => onQuick('What are common side effects of amoxicillin?')} style={{ padding: '8px 12px', borderRadius: 999, background: '#F3F4F6', border: '1px solid #E5E7EB', color: '#374151', cursor: 'pointer' }}>💊 Medications</button>
    <button onClick={() => onQuick('Give me some tips for healthy living')} style={{ padding: '8px 12px', borderRadius: 999, background: '#F3F4F6', border: '1px solid #E5E7EB', color: '#374151', cursor: 'pointer' }}>📋 Health tips</button>
  </div>
);

const ChatWindow = ({ messages }) => {
  const ref = useRef();
  useEffect(() => { if (ref.current) ref.current.scrollTop = ref.current.scrollHeight; }, [messages]);
  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: 12, overflow: 'auto', padding: 20 }}>
      {messages.map((m, i) => (
        <div key={i} style={{ maxWidth: '72%', padding: '12px 14px', borderRadius: 18, alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', background: m.role === 'user' ? 'rgba(201,74,74,0.08)' : '#FFFFFF', color: m.role === 'user' ? '#C94A4A' : '#111827', boxShadow: '0 4px 12px rgba(15,23,42,0.04)' }}>
          {m.content}
        </div>
      ))}
    </div>
  );
};

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello — I am the SMMG AI assistant. How can I help today?' },
  ]);
  const [text, setText] = useState('');

  function send(msg) {
    if (!msg) return;
    setMessages((s) => [...s, { role: 'user', content: msg }]);
    setText('');
    // fake assistant response
    setTimeout(() => {
      setMessages((s) => [...s, { role: 'assistant', content: 'Thanks for your question — please consult a doctor for a definitive diagnosis.' }]);
    }, 900);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: 16 }}>
      <div style={{ width: '100%', maxWidth: 980, display: 'flex', gap: 18 }}>
        {/* Left quick panel (optional on small screens) */}
        <div style={{ width: 220, flexShrink: 0 }}>
          <div style={{ background: '#FFFFFF', padding: 16, borderRadius: 12, boxShadow: '0 6px 18px rgba(15,23,42,0.04)' }}>
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>Quick Actions</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <button onClick={() => send('I have a headache, what could it be?')} style={{ textAlign: 'left', padding: '10px 12px', borderRadius: 8, background: 'transparent', border: '1px solid #F3F4F6', cursor: 'pointer' }}>🩺 Ask about symptoms</button>
              <button onClick={() => send('What are common side effects of amoxicillin?')} style={{ textAlign: 'left', padding: '10px 12px', borderRadius: 8, background: 'transparent', border: '1px solid #F3F4F6', cursor: 'pointer' }}>💊 Ask about medications</button>
              <button onClick={() => send('Give me some tips for healthy living')} style={{ textAlign: 'left', padding: '10px 12px', borderRadius: 8, background: 'transparent', border: '1px solid #F3F4F6', cursor: 'pointer' }}>📋 Ask for health tips</button>
            </div>
          </div>
        </div>

        {/* Chat area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* Quick actions row aligned with chat area */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <QuickActions onQuick={(q) => send(q)} />
          </div>

          <div style={{ background: '#F8FAFC', borderRadius: 12, padding: 0, display: 'flex', flexDirection: 'column', minHeight: 420, boxShadow: '0 8px 20px rgba(15,23,42,0.04)' }}>
            <div style={{ padding: 18, borderBottom: '1px solid #EEF2F7' }}>
              <div style={{ fontSize: 16, fontWeight: 700 }}>Chat with SMMG Assistant</div>
              <div style={{ fontSize: 13, color: '#6B7280', marginTop: 4 }}>Ask health-related questions, book appointments, or request tips.</div>
            </div>

            <div style={{ flex: 1, padding: 18, display: 'flex', flexDirection: 'column' }}>
              <ChatWindow messages={messages} />
            </div>

            {/* Input area */}
            <div style={{ padding: 14, borderTop: '1px solid #EEF2F7', display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type your message... e.g. 'I have a sore throat'" style={{ width: '100%', padding: '12px 16px', borderRadius: 999, border: '1px solid #E6E9EE', boxShadow: 'inset 0 1px 0 rgba(15,23,42,0.02)', fontSize: 14, outline: 'none' }} />
              </div>
              <button onClick={() => send(text)} style={{ marginLeft: 12, padding: '10px 14px', borderRadius: 10, background: '#C94A4A', color: '#fff', border: 'none', cursor: 'pointer', boxShadow: '0 6px 14px rgba(201,74,74,0.18)' }}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
