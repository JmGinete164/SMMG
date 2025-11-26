import React, { useState, useRef, useEffect } from 'react';

const LeftPanel = ({ onQuick }) => (
  <aside className="w-80 p-4 card-clean rounded-lg-14">
    <div className="text-sm font-semibold mb-3">Quick Actions</div>
    <div className="space-y-2">
      <button onClick={() => onQuick('I have a headache, what could it be?')} className="w-full text-left p-3 rounded-md hover:bg-gray-50">🩺 Ask about symptoms</button>
      <button onClick={() => onQuick('What are common side effects of amoxicillin?')} className="w-full text-left p-3 rounded-md hover:bg-gray-50">💊 Ask about medications</button>
      <button onClick={() => onQuick('Give me some tips for healthy living')} className="w-full text-left p-3 rounded-md hover:bg-gray-50">📋 Ask for health tips</button>
    </div>
  </aside>
);

const ChatWindow = ({ messages }) => {
  const ref = useRef();
  useEffect(() => { if (ref.current) ref.current.scrollTop = ref.current.scrollHeight; }, [messages]);
  return (
    <div ref={ref} className="flex-1 p-6 flex flex-col gap-4 overflow-auto bg-card rounded-lg-14 shadow-soft" style={{ maxHeight: '62vh' }}>
      {messages.map((m, i) => (
        <div key={i} className={`max-w-3/4 p-3 rounded-2xl ${m.role === 'user' ? 'self-end bg-primary-red-50 text-primary-red' : 'self-start bg-white text-gray-800'} shadow-sm`}>
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
    <div className="flex flex-col md:flex-row gap-6 min-h-0">
      <div className="md:w-80 flex-shrink-0">
        <LeftPanel onQuick={(q) => send(q)} />
      </div>

      <div className="flex-1 flex flex-col gap-3 min-h-0">
        <ChatWindow messages={messages} />

        <div className="p-4 flex gap-3 items-center bg-card rounded-lg-14 shadow-sm">
          <input value={text} onChange={(e) => setText(e.target.value)} className="flex-1 border border-gray-100 rounded-full px-4 py-3" placeholder="Type your message... e.g. 'I have a sore throat'" />
          <button onClick={() => send(text)} className="btn-primary">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
