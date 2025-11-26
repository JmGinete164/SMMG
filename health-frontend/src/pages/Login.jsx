import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #FFF8F8 0%, #F7F7F8 100%)' }}>
      <div className="max-w-xl w-full rounded-lg shadow-soft bg-card p-8">
        <div className="flex flex-col items-center mb-6">
          <img src="/logo192.png" alt="SMMG Medical Plaza" className="w-28 h-28 rounded-md shadow-sm" />
          <h2 className="text-2xl font-semibold mt-4">SMMG Medical Plaza</h2>
          <p className="text-sm text-muted">Patient Portal — Sign in to continue</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium">Username</label>
            <input className="mt-1 w-full border border-gray-100 rounded-lg px-4 py-3" placeholder="username@example.com" />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input type="password" className="mt-1 w-full border border-gray-100 rounded-lg px-4 py-3" placeholder="••••••" />
          </div>

          <div className="flex gap-3">
            <button type="submit" className="flex-1 btn-primary">Login</button>
            <button type="button" className="flex-1 btn-ghost">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
