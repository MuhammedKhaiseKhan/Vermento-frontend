import React from 'react';

export const UserManagement: React.FC = () => {
  const users = [
    {
      initials: 'AJ',
      name: 'Alice Johnson',
      id: 'USR001',
      email: 'alice.johnson@email.com',
      joinDate: 'Jan 15, 2024',
      status: 'Active',
      sessions: 12,
      actions: ['View', 'Block'],
    },
    {
      initials: 'BS',
      name: 'Bob Smith',
      id: 'USR002',
      email: 'bob.smith@email.com',
      joinDate: 'Feb 3, 2024',
      status: 'Blocked',
      sessions: 5,
      actions: ['View', 'Unblock'],
    },
    {
      initials: 'CD',
      name: 'Carol Davis',
      id: 'USR003',
      email: 'carol.davis@email.com',
      joinDate: 'Mar 12, 2024',
      status: 'Active',
      sessions: 8,
      actions: ['View', 'Block'],
    },
    {
      initials: 'DW',
      name: 'David Wilson',
      id: 'USR004',
      email: 'david.wilson@email.com',
      joinDate: 'Apr 8, 2024',
      status: 'Active',
      sessions: 15,
      actions: ['View', 'Block'],
    },
    {
      initials: 'EM',
      name: 'Emma Miller',
      id: 'USR005',
      email: 'emma.miller@email.com',
      joinDate: 'May 20, 2024',
      status: 'Active',
      sessions: 3,
      actions: ['View', 'Block'],
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">User Management</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Total Users: 1,247</h2>
      </section>
      <section>
        <div className="card bg-[#1a1a1a] border border-[#333] rounded-lg p-6 transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
          <table className="w-full text-sm text-white">
            <thead>
              <tr className="text-[#9ca3af] border-b border-[#333]">
                <th className="p-3 text-left">User</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Join Date</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Sessions</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b border-[#333] last:border-b-0">
                  <td className="p-3">
                    <div className="flex items-center">
                      <span className="avatar w-10 h-10 mr-4">
                        <span className="avatar-fallback bg-[#333] text-[#eee] font-semibold">{user.initials}</span>
                      </span>
                      <div>
                        <div className="font-medium text-white">{user.name}</div>
                        <div className="text-[#9ca3af] text-xs">ID: {user.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.joinDate}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-3">{user.sessions}</td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      {user.actions.map((action, idx) => (
                        <button
                          key={idx}
                          className="btn inline-flex items-center justify-center h-10 px-4 text-sm font-medium rounded-md bg-white text-black hover:bg-[#f0f0f0]"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

