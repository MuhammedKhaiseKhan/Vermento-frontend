import React, { useState } from 'react';

export const Bookings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sessions' | 'availability'>('sessions');

  const sessions = [
    {
      initials: 'SJ',
      name: 'Sarah Johnson',
      title: 'React Development Session',
      status: 'Confirmed',
      time: 'Today, 2:00 PM',
      duration: '1 hour',
      price: '$75',
      actions: ['Message', 'Join Session'],
      statusColor: 'bg-green-100 text-green-800',
      actionColors: ['bg-white text-black hover:bg-[#f0f0f0]', 'bg-white text-black hover:bg-[#f0f0f0]'],
    },
    {
      initials: 'MC',
      name: 'Michael Chen',
      title: 'Node.js Backend Development',
      status: 'Pending',
      time: 'Tomorrow, 10:00 AM',
      duration: '1.5 hours',
      price: '$100',
      actions: ['Decline', 'Accept'],
      statusColor: 'bg-yellow-100 text-yellow-800',
      actionColors: ['bg-white text-black hover:bg-[#f0f0f0]', 'bg-white text-black hover:bg-[#f0f0f0]'],
    },
    {
      initials: 'ER',
      name: 'Emily Rodriguez',
      title: 'CSS & Responsive Design',
      status: 'Completed',
      time: 'Yesterday, 3:00 PM',
      duration: '1 hour',
      price: '$75',
      actions: ['View Notes', 'Message'],
      statusColor: 'bg-gray-100 text-gray-800',
      actionColors: ['bg-white text-black hover:bg-[#f0f0f0]', 'bg-white text-black hover:bg-[#f0f0f0]'],
    },
    {
      initials: 'DK',
      name: 'David Kim',
      title: 'Full-Stack Development',
      status: 'Confirmed',
      time: 'Friday, 4:00 PM',
      duration: '2 hours',
      price: '$150',
      actions: ['Reschedule', 'Message'],
      statusColor: 'bg-green-100 text-green-800',
      actionColors: ['bg-white text-black hover:bg-[#f0f0f0]', 'bg-white text-black hover:bg-[#f0f0f0]'],
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Bookings Management</h1>
      <nav className="mb-8 flex gap-4 border-b border-[#333]">
        <button
          className={`pb-2 text-sm font-medium ${
            activeTab === 'sessions'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-[#9ca3af] hover:text-blue-600'
          }`}
          onClick={() => setActiveTab('sessions')}
        >
          Scheduled Sessions
        </button>
        <button
          className={`pb-2 text-sm font-medium ${
            activeTab === 'availability'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-[#9ca3af] hover:text-blue-600'
          }`}
          onClick={() => setActiveTab('availability')}
        >
          Manage Availability
        </button>
      </nav>
      {activeTab === 'sessions' ? (
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-6">Scheduled Sessions</h2>
          <div className="space-y-4">
            {sessions.map((session, index) => (
              <div
                key={index}
                className="card bg-[#1a1a1a] border border-[#333] rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]"
              >
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="avatar w-10 h-10 mr-4">
                    <span className="avatar-fallback bg-[#333] text-[#eee] font-semibold">{session.initials}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{session.name}</h4>
                    <p className="text-[#9ca3af]">{session.title}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${session.statusColor}`}>
                  {session.status}
                </span>
                <div className="text-[#9ca3af] text-right">
                  <p>{session.time}</p>
                  <p>{session.duration}</p>
                  <p>{session.price}</p>
                </div>
                <div className="flex gap-2">
                  {session.actions.map((action, idx) => (
                    <button
                      key={idx}
                      className={`btn inline-flex items-center justify-center h-10 px-4 text-sm font-medium rounded-md transition-all ${session.actionColors[idx]}`}
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section>
          <h2 className="text-xl font-semibold text-white mb-6">Manage Availability</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card bg-[#1a1a1a] border border-[#333] rounded-lg p-6 transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
              <h3 className="text-lg font-semibold text-white mb-4">January 2024</h3>
              <div className="flex justify-between mb-4">
                <button className="text-[#9ca3af] hover:text-white">←</button>
                <span className="text-white font-medium">January 2024</span>
                <button className="text-[#9ca3af] hover:text-white">→</button>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-[#9ca3af] text-sm">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                  <div key={idx} className="font-medium">{day}</div>
                ))}
                {Array.from({ length: 31 }, (_, i) => (
                  <div
                    key={i}
                    className={`p-2 rounded ${i + 1 === 25 ? 'bg-blue-100 text-blue-600' : 'hover:bg-[#222]'}`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <h4 className="text-lg font-semibold text-white mt-6 mb-2">Available Time Slots - Jan 25</h4>
              <div className="grid grid-cols-2 gap-2">
                {['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'].map(
                  (time, idx) => (
                    <div key={idx} className="bg-[#333] p-2 rounded text-[#9ca3af] text-sm">
                      {time}
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="card bg-[#1a1a1a] border border-[#333] rounded-lg p-6 transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
              <h3 className="text-lg font-semibold text-white mb-4">Availability Settings</h3>
              <div className="mb-6">
                <h4 className="text-white font-medium mb-2">Weekly Schedule</h4>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                  <div key={day} className="flex items-center mb-2">
                    <span className="w-24 text-white">{day}</span>
                    <input
                      type="time"
                      className="input h-10 rounded-md border border-[#444] bg-[#222] text-white text-sm focus-visible:outline-none focus-visible:border-white focus-visible:bg-[#333] focus-visible:ring-2 focus-visible:ring-white/10"
                      defaultValue="09:00"
                    />
                    <span className="mx-2 text-[#9ca3af]">to</span>
                    <input
                      type="time"
                      className="input h-10 rounded-md border border-[#444] bg-[#222] text-white text-sm focus-visible:outline-none focus-visible:border-white focus-visible:bg-[#333] focus-visible:ring-2 focus-visible:ring-white/10"
                      defaultValue="17:00"
                    />
                  </div>
                ))}
                <div className="flex items-center mb-2">
                  <span className="w-24 text-white">Sunday</span>
                  <span className="text-[#9ca3af]">Unavailable</span>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-white font-medium mb-2">Session Duration</h4>
                <select className="input w-full h-10 rounded-md border border-[#444] bg-[#222] text-white text-sm focus-visible:outline-none focus-visible:border-white focus-visible:bg-[#333] focus-visible:ring-2 focus-visible:ring-white/10">
                  <option>30 minutes</option>
                  <option>1 hour</option>
                  <option>1.5 hours</option>
                  <option>2 hours</option>
                </select>
              </div>
              <div className="mb-6">
                <h4 className="text-white font-medium mb-2">Buffer Time</h4>
                <select className="input w-full h-10 rounded-md border border-[#444] bg-[#222] text-white text-sm focus-visible:outline-none focus-visible:border-white focus-visible:bg-[#333] focus-visible:ring-2 focus-visible:ring-white/10">
                  <option>No buffer</option>
                  <option>15 minutes</option>
                  <option>30 minutes</option>
                  <option>45 minutes</option>
                </select>
              </div>
              <div className="flex gap-4">
                <button className="btn inline-flex items-center justify-center h-10 px-4 text-sm font-medium rounded-md bg-white text-black hover:bg-[#f0f0f0]">
                  Save Changes
                </button>
                <button className="btn inline-flex items-center justify-center h-10 px-4 text-sm font-medium rounded-md bg-transparent border border-[#888] text-white hover:bg-white hover:text-black">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
