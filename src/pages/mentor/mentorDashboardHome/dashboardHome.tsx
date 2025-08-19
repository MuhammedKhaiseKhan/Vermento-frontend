import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

export const MentorDashboardHome: React.FC = () => {
  useEffect(() => {
    const revenueCtx = document.getElementById('revenueChart') as HTMLCanvasElement;
    const revenueChart = new Chart(revenueCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Revenue',
            data: [1200, 1900, 1500, 2200, 2100, 2450],
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
              callback: (value) => '$' + value,
            },
          },
        },
        elements: { point: { hoverBackgroundColor: '#fff' } },
      },
    });

    const sessionsCtx = document.getElementById('sessionsChart') as HTMLCanvasElement;
    const sessionsChart = new Chart(sessionsCtx, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [87, 13],
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
      sessionsChart.destroy();
    };
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Welcome back, John!</h1>
      <section id="overview" className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-6">Today's Overview</h2>
        <div className="flex flex-wrap gap-4 justify-start">
          <div className="card flex-1 min-w-[200px] max-w-[calc(33.333%-1rem)] bg-[#1a1a1a] border border-[#333] rounded-lg transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
            <div className="card-content p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="M12 16h.01" />
                  <path d="M8 16h.01" />
                  <path d="M16 16h.01" />
                  <path d="M12 12h.01" />
                  <path d="M8 12h.01" />
                  <path d="M16 12h.01" />
                </svg>
              </div>
              <p className="text-[#9ca3af] text-sm mb-1">Today's Sessions</p>
              <h3 className="text-3xl font-bold text-white">3</h3>
            </div>
          </div>
          <div className="card flex-1 min-w-[200px] max-w-[calc(33.333%-1rem)] bg-[#1a1a1a] border border-[#333] rounded-lg transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
            <div className="card-content p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <line x1="12" x2="12" y1="1" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <p className="text-[#9ca3af] text-sm mb-1">Monthly Revenue</p>
              <h3 className="text-3xl font-bold text-white">$2,450</h3>
            </div>
          </div>
          <div className="card flex-1 min-w-[200px] max-w-[calc(33.333%-1rem)] bg-[#1a1a1a] border border-[#333] rounded-lg transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
            <div className="card-content p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <p className="text-[#9ca3af] text-sm mb-1">Total Mentees</p>
              <h3 className="text-3xl font-bold text-white">24</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-6">Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="chart-card bg-[#1a1a1a] rounded-lg border border-[#333] p-6 transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
            <div className="chart-header mb-4">
              <h3 className="chart-title text-lg font-semibold text-white mb-1">Revenue Trend</h3>
              <p className="chart-description text-sm text-[#9ca3af]">January - June 2024</p>
            </div>
            <div className="h-[300px]">
              <canvas id="revenueChart"></canvas>
            </div>
            <div className="chart-footer mt-4 pt-4 border-t border-[#333]">
              <div className="chart-footer-text flex items-center gap-2 text-sm font-medium text-white mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                Trending up by 12.5% this month
              </div>
              <div className="chart-footer-description text-sm text-[#9ca3af]">
                Showing total revenue for the last 6 months
              </div>
            </div>
          </div>
          <div className="chart-card bg-[#1a1a1a] rounded-lg border border-[#333] p-6 transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
            <div className="chart-header mb-4">
              <h3 className="chart-title text-lg font-semibold text-white mb-1">Sessions Completed</h3>
              <p className="chart-description text-sm text-[#9ca3af]">This Month Progress</p>
            </div>
            <div className="h-[300px] flex items-center justify-center">
              <div className="relative w-[250px] h-[250px]">
                <canvas id="sessionsChart"></canvas>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-[2.5rem] font-bold text-white">87</div>
                  <div className="text-sm text-[#9ca3af]">Sessions</div>
                </div>
              </div>
            </div>
            <div className="chart-footer mt-4 pt-4 border-t border-[#333]">
              <div className="chart-footer-text flex items-center gap-2 text-sm font-medium text-white mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                Trending up by 8.2% this month
              </div>
              <div className="chart-footer-description text-sm text-[#9ca3af]">
                87 out of 100 sessions completed this month
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
