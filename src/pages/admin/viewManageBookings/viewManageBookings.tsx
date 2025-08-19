import React, { useState } from 'react';

export const ViewManageBookings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bookings' | 'pricing'>('bookings');

  const bookings = [
    {
      id: '#BK001',
      user: { initials: 'SJ', name: 'Sarah Johnson', email: 'sarah@example.com' },
      mentor: { initials: 'JD', name: 'John Doe', expertise: 'Software Engineering' },
      dateTime: 'Dec 15, 2024 2:00 PM',
      duration: '1 Hour',
      amount: '₹1,000',
      status: 'Confirmed',
      actions: ['View'],
    },
    {
      id: '#BK002',
      user: { initials: 'MW', name: 'Michael Wilson', email: 'michael@example.com' },
      mentor: { initials: 'EB', name: 'Emily Brown', expertise: 'UX/UI Design' },
      dateTime: 'Dec 16, 2024 10:00 AM',
      duration: '30 Minutes',
      amount: '₹500',
      status: 'Pending',
      actions: ['View'],
    },
    {
      id: '#BK003',
      user: { initials: 'DL', name: 'David Lee', email: 'david@example.com' },
      mentor: { initials: 'SJ', name: 'Sarah Johnson', expertise: 'Data Science' },
      dateTime: 'Dec 14, 2024 4:00 PM',
      duration: '2 Hours',
      amount: '₹2,000',
      status: 'Completed',
      actions: ['View'],
    },
    {
      id: '#BK004',
      user: { initials: 'EB', name: 'Emily Brown', email: 'emily@example.com' },
      mentor: { initials: 'DL', name: 'David Lee', expertise: 'Marketing Strategy' },
      dateTime: 'Dec 13, 2024 11:00 AM',
      duration: '1.5 Hours',
      amount: '₹1,500',
      status: 'Cancelled',
      actions: ['View'],
    },
  ];

  const pricingConfigs = [
    { duration: '30 Minutes', price: 500, priceMin: 200, priceMax: 1000, fee: 10, feeMin: 5, feeMax: 25, companyGets: 50 },
    { duration: '1 Hour', price: 1000, priceMin: 500, priceMax: 2000, fee: 10, feeMin: 5, feeMax: 25, companyGets: 100 },
    { duration: '1.5 Hours', price: 1500, priceMin: 800, priceMax: 3000, fee: 10, feeMin: 5, feeMax: 25, companyGets: 150 },
    { duration: '2 Hours', price: 2000, priceMin: 1000, priceMax: 4000, fee: 10, feeMin: 5, feeMax: 25, companyGets: 200 },
    { duration: '3 Hours', price: 3000, priceMin: 1500, priceMax: 6000, fee: 10, feeMin: 5, feeMax: 25, companyGets: 300 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">View & Manage Bookings</h1>
      <nav className="mb-8 flex gap-4 border-b border-[#333]">
        <button
          className={`pb-2 text-sm font-medium ${
            activeTab === 'bookings' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-[#9ca3af] hover:text-blue-600'
          }`}
          onClick={() => setActiveTab('bookings')}
        >
          Recent Bookings
        </button>
        <button
          className={`pb-2 text-sm font-medium ${
            activeTab === 'pricing' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-[#9ca3af] hover:text-blue-600'
          }`}
          onClick={() => setActiveTab('pricing')}
        >
          Session Pricing Configuration
        </button>
      </nav>
      {activeTab === 'bookings' ? (
        <>
          <section className="mb-8">
            <div className="flex flex-wrap gap-4 justify-start">
              <div className="card flex-1 min-w-[200px] max-w-[calc(25%-1rem)] bg-[#1a1a1a] border border-[#333] rounded-lg transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
                <div className="card-content p-6 flex flex-col items-center text-center">
                  <h3 className="text-3xl font-bold text-white">2,847</h3>
                  <p className="text-[#9ca3af] text-sm mt-1">Total Bookings</p>
                </div>
              </div>
              <div className="card flex-1 min-w-[200px] max-w-[calc(25%-1rem)] bg-[#1a1a1a] border border-[#333] rounded-lg transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
                <div className="card-content p-6 flex flex-col items-center text-center">
                  <h3 className="text-3xl font-bold text-white">156</h3>
                  <p className="text-[#9ca3af] text-sm mt-1">Pending Bookings</p>
                </div>
              </div>
              <div className="card flex-1 min-w-[200px] max-w-[calc(25%-1rem)] bg-[#1a1a1a] border border-[#333] rounded-lg transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
                <div className="card-content p-6 flex flex-col items-center text-center">
                  <h3 className="text-3xl font-bold text-white">89</h3>
                  <p className="text-[#9ca3af] text-sm mt-1">Cancelled Bookings</p>
                </div>
              </div>
              <div className="card flex-1 min-w-[200px] max-w-[calc(25%-1rem)] bg-[#1a1a1a] border border-[#333] rounded-lg transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
                <div className="card-content p-6 flex flex-col items-center text-center">
                  <h3 className="text-3xl font-bold text-white">2,602</h3>
                  <p className="text-[#9ca3af] text-sm mt-1">Completed Sessions</p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-6">Recent Bookings</h2>
            <div className="card bg-[#1a1a1a] border border-[#333] rounded-lg p-6 transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
              <table className="w-full text-sm text-white">
                <thead>
                  <tr className="text-[#9ca3af] border-b border-[#333]">
                    <th className="p-3 text-left">Booking ID</th>
                    <th className="p-3 text-left">User</th>
                    <th className="p-3 text-left">Mentor</th>
                    <th className="p-3 text-left">Date & Time</th>
                    <th className="p-3 text-left">Duration</th>
                    <th className="p-3 text-left">Amount</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking, index) => (
                    <tr key={index} className="border-b border-[#333] last:border-b-0">
                      <td className="p-3">{booking.id}</td>
                      <td className="p-3">
                        <div className="flex items-center">
                          <span className="avatar w-10 h-10 mr-4">
                            <span className="avatar-fallback bg-[#333] text-[#eee] font-semibold">{booking.user.initials}</span>
                          </span>
                          <div>
                            <div className="font-medium text-white">{booking.user.name}</div>
                            <div className="text-[#9ca3af] text-xs">{booking.user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center">
                          <span className="avatar w-10 h-10 mr-4">
                            <span className="avatar-fallback bg-[#333] text-[#eee] font-semibold">{booking.mentor.initials}</span>
                          </span>
                          <div>
                            <div className="font-medium text-white">{booking.mentor.name}</div>
                            <div className="text-[#9ca3af] text-xs">{booking.mentor.expertise}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">{booking.dateTime}</td>
                      <td className="p-3">{booking.duration}</td>
                      <td className="p-3">{booking.amount}</td>
                      <td className="p-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            booking.status === 'Confirmed'
                              ? 'bg-green-100 text-green-800'
                              : booking.status === 'Pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : booking.status === 'Completed'
                              ? 'bg-gray-100 text-gray-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          {booking.actions.map((action, idx) => (
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
        </>
      ) : (
        <section>
          <h2 className="text-xl font-semibold text-white mb-6">Session Pricing Configuration</h2>
          <p className="text-[#9ca3af] mb-6">Set pricing for different session durations and configure service fees</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {pricingConfigs.map((config, index) => (
              <div
                key={index}
                className="card bg-[#1a1a1a] border border-[#333] rounded-lg p-6 transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]"
              >
                <h3 className="text-lg font-semibold text-white mb-4">{config.duration} Session</h3>
                <div className="mb-4">
                  <p className="text-white mb-2">
                    Price: ₹{config.price}
                    <span className="text-[#9ca3af] text-sm ml-2">₹{config.priceMin} - ₹{config.priceMax}</span>
                  </p>
                  <input
                    type="range"
                    min={config.priceMin}
                    max={config.priceMax}
                    value={config.price}
                    className="w-full h-2 bg-[#333] rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <p className="text-white mb-2">
                    Service Fee: {config.fee}%
                    <span className="text-[#9ca3af] text-sm ml-2">{config.feeMin}% - {config.feeMax}%</span>
                  </p>
                  <input
                    type="range"
                    min={config.feeMin}
                    max={config.feeMax}
                    value={config.fee}
                    className="w-full h-2 bg-[#333] rounded-lg"
                  />
                </div>
                <p className="text-white">Company gets: ₹{config.companyGets}</p>
              </div>
            ))}
          </div>
          <button className="btn inline-flex items-center justify-center h-12 px-8 text-lg font-medium rounded-md bg-white text-black hover:bg-[#f0f0f0]">
            Save Pricing Configuration
          </button>
        </section>
      )}
    </div>
  );
};

