import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

export const FinancialOverview: React.FC = () => {
  useEffect(() => {
    const revenueCtx = document.getElementById('revenueTrendChart') as HTMLCanvasElement;
    const revenueChart = new Chart(revenueCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Revenue',
            data: [12000, 13000, 14000, 15000, 16000, 17000, 17500, 18000, 18500, 19000, 19500, 20000],
            borderColor: '#fff',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#fff',
            pointRadius: 4,
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, ticks: { color: '#9ca3af' } },
          y: {
            grid: { color: '#333' },
            ticks: {
              color: '#9ca3af',
              callback: (value) => '₹' + (value / 1000) + 'k',
            },
          },
        },
        elements: { point: { hoverBackgroundColor: '#fff' } },
      },
    });

    const distributionCtx = document.getElementById('revenueDistributionChart') as HTMLCanvasElement;
    const distributionChart = new Chart(distributionCtx, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [234890, 252360],
            backgroundColor: ['#fff', '#333'],
            borderWidth: 0,
            cutout: '80%',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
      },
    });

    return () => {
      revenueChart.destroy();
      distributionChart.destroy();
    };
  }, []);

  const transactions = [
    {
      id: '#TXN001',
      type: 'Service Fee',
      description: 'Session booking fee - John Doe & Sarah Johnson',
      date: 'Dec 15, 2024',
      amount: '+₹100',
      balance: '₹4,87,250',
    },
    {
      id: '#TXN002',
      type: 'Service Fee',
      description: 'Session booking fee - Michael Wilson & Emily Brown',
      date: 'Dec 15, 2024',
      amount: '+₹50',
      balance: '₹4,87,150',
    },
    {
      id: '#TXN003',
      type: 'Platform Expense',
      description: 'Server hosting and maintenance costs',
      date: 'Dec 14, 2024',
      amount: '-₹15,000',
      balance: '₹4,87,100',
    },
    {
      id: '#TXN004',
      type: 'Service Fee',
      description: 'Session booking fee - David Lee & Sarah Johnson',
      date: 'Dec 14, 2024',
      amount: '+₹200',
      balance: '₹5,02,100',
    },
    {
      id: '#TXN005',
      type: 'Marketing',
      description: 'Digital marketing campaign expenses',
      date: 'Dec 13, 2024',
      amount: '-₹25,000',
      balance: '₹5,01,900',
    },
    {
      id: '#TXN006',
      type: 'Service Fee',
      description: 'Session booking fee - Emily Brown & David Lee',
      date: 'Dec 13, 2024',
      amount: '+₹150',
      balance: '₹5,26,900',
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Financial Overview</h1>
      <section className="mb-8">
        <div className="flex justify-end mb-6">
          <button className="btn inline-flex items-center justify-center h-12 px-8 text-lg font-medium rounded-md bg-white text-black hover:bg-[#f0f0f0]">
            Export Report
          </button>
        </div>
        <div className="flex flex-wrap gap-4 justify-start">
          <div className="card flex-1 min-w-[200px] max-w-[calc(25%-1rem)] bg-[#1a1a1a] border border-[#333] rounded-lg transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
            <div className="card-content p-6 flex flex-col items-center text-center">
              <h3 className="text-3xl font-bold text-white">₹4,87,250</h3>
              <p className="text-[#9ca3af] text-sm mt-1">Company Wallet Balance</p>
              <p className="text-green-400 text-sm mt-2">+12.5% from last month</p>
            </div>
          </div>
          <div className="card flex-1 min-w-[200px] max-w-[calc(25%-1rem)] bg-[#1a1a1a] border border-[#333] rounded-lg transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
            <div className="card-content p-6 flex flex-col items-center text-center">
              <h3 className="text-3xl font-bold text-white">₹18,750</h3>
              <p className="text-[#9ca3af] text-sm mt-1">Monthly Revenue</p>
              <p className="text-green-400 text-sm mt-2">+8.2% from last month</p>
            </div>
          </div>
          <div className="card flex-1 min-w-[200px] max-w-[calc(25%-1rem)] bg-[#1a1a1a] border border-[#333] rounded-lg transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
            <div className="card-content p-6 flex flex-col items-center text-center">
              <h3 className="text-3xl font-bold text-white">₹2,34,890</h3>
              <p className="text-[#9ca3af] text-sm mt-1">Total Service Fees Collected</p>
              <p className="text-green-400 text-sm mt-2">+15.7% from last month</p>
            </div>
          </div>
          <div className="card flex-1 min-w-[200px] max-w-[calc(25%-1rem)] bg-[#1a1a1a] border border-[#333] rounded-lg transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
            <div className="card-content p-6 flex flex-col items-center text-center">
              <h3 className="text-3xl font-bold text-white">₹45,670</h3>
              <p className="text-[#9ca3af] text-sm mt-1">Monthly Expenses</p>
              <p className="text-green-400 text-sm mt-2">+3.1% from last month</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="chart-card bg-[#1a1a1a] rounded-lg border border-[#333] p-6 transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
            <div className="chart-header mb-4">
              <h3 className="chart-title text-lg font-semibold text-white mb-1">Revenue & Turnover Trend</h3>
              <p className="chart-description text-sm text-[#9ca3af]">Monthly performance over the last 12 months</p>
            </div>
            <div className="h-[300px]">
              <canvas id="revenueTrendChart"></canvas>
            </div>
          </div>
          <div className="chart-card bg-[#1a1a1a] rounded-lg border border-[#333] p-6 transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
            <div className="chart-header mb-4">
              <h3 className="chart-title text-lg font-semibold text-white mb-1">Revenue Distribution</h3>
              <p className="chart-description text-sm text-[#9ca3af]">Service fees vs Platform revenue</p>
            </div>
            <div className="h-[300px] flex items-center justify-center">
              <div className="relative w-[250px] h-[250px]">
                <canvas id="revenueDistributionChart"></canvas>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-[2.5rem] font-bold text-white">₹4.87L</div>
                  <div className="text-sm text-[#9ca3af]">Total Balance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white mb-6">Recent Transactions</h2>
        <div className="card bg-[#1a1a1a] border border-[#333] rounded-lg p-6 transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
          <table className="w-full text-sm text-white">
            <thead>
              <tr className="text-[#9ca3af] border-b border-[#333]">
                <th className="p-3 text-left">Transaction ID</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">Balance</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className="border-b border-[#333] last:border-b-0">
                  <td className="p-3">{transaction.id}</td>
                  <td className="p-3">{transaction.type}</td>
                  <td className="p-3">{transaction.description}</td>
                  <td className="p-3">{transaction.date}</td>
                  <td className={`p-3 ${transaction.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {transaction.amount}
                  </td>
                  <td className="p-3">{transaction.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
