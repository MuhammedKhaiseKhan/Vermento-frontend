import React from "react";

export const WalletPage: React.FC = () => {
  return (
    
      
      <div className="main-content-wrapper">
        
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2 balance-card rounded-xl p-8 card-hover fade-in stagger-1">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-medium text-gray-300 mb-2">Available Balance</h2>
                  <p className="text-4xl font-bold text-white">$2,847.50</p>
                </div>
                <div className="p-3 bg-white/10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4H5a2 2 0 0 0 0 4h12a2 2 0 0 0 2-2v-3"/><path d="M10 12H7a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3"/></svg>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="btn-primary px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20m5-5H7"/></svg>
                  Add Funds
                </button>
                <button className="btn-secondary px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20m-5-5h10"/></svg>
                  Withdraw
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 fade-in stagger-2">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6 text-green-400"><path d="M12 2v20m5-5H7"/></svg>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-white mb-1">$1,240</p>
                  <p className="text-sm text-gray-400">This Month Earnings</p>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 fade-in stagger-3">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6 text-blue-400"><path d="M12 2v20m-5-5h10"/></svg>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-white mb-1">$580</p>
                  <p className="text-sm text-gray-400">This Month Spent</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-gray-900/50 border border-gray-800 rounded-xl p-6 fade-in stagger-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Recent Transactions</h2>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">All</button>
                  <button className="px-3 py-1 text-sm text-gray-400 rounded-lg hover:bg-gray-800 transition-colors">Income</button>
                  <button className="px-3 py-1 text-sm text-gray-400 rounded-lg hover:bg-gray-800 transition-colors">Expenses</button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="transaction-item flex items-center gap-4 p-4 rounded-lg">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-green-400"><path d="M12 2v20m5-5H7"/></svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-white">Session Payment</h3>
                    <p className="text-sm text-gray-400">From Sarah Mitchell • Product Strategy Session</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-400">+$120.00</p>
                    <p className="text-xs text-gray-400">2 hours ago</p>
                  </div>
                  <span className="status-badge status-completed">Completed</span>
                </div>
                {/* Add other transaction items similarly */}
              </div>
              <div className="mt-6 text-center">
                <button className="text-blue-400 hover:text-blue-300 font-medium">View All Transactions</button>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 fade-in stagger-5">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Payment Methods</h2>
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">+ Add New</button>
              </div>
              <div className="space-y-4">
                <div className="payment-method-card selected bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-blue-400"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Visa ****1234</h3>
                      <p className="text-sm text-gray-400">Expires 12/26</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-green-400 font-medium">Primary</span>
                    <button className="text-gray-400 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                    </button>
                  </div>
                </div>
                {/* Add other payment method cards similarly */}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-900/50 border border-gray-800 rounded-xl p-6 fade-in stagger-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Earnings Overview</h2>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">This Month</button>
                <button className="px-3 py-1 text-sm text-gray-400 rounded-lg hover:bg-gray-800 transition-colors">Last Month</button>
                <button className="px-3 py-1 text-sm text-gray-400 rounded-lg hover:bg-gray-800 transition-colors">This Year</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <p className="text-2xl font-bold text-white mb-1">$1,240</p>
                <p className="text-sm text-gray-400">Total Earned</p>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <p className="text-2xl font-bold text-white mb-1">18</p>
                <p className="text-sm text-gray-400">Sessions Completed</p>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <p className="text-2xl font-bold text-white mb-1">$68.89</p>
                <p className="text-sm text-gray-400">Avg per Session</p>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <p className="text-2xl font-bold text-white mb-1">+24%</p>
                <p className="text-sm text-gray-400">vs Last Month</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    
  );
};

