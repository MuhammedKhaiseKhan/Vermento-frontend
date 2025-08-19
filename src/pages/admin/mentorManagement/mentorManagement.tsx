import React, { useState } from 'react';

interface MentorRequest {
  initials: string;
  name: string;
  id: string;
  jobTitle: string;
  category: string;
  appliedDate: string;
  status: string;
  actions: string[];
}

export const MentorManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'approved' | 'requests'>('approved');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState<MentorRequest | null>(null);
  const [reviewStatus, setReviewStatus] = useState<'Approve' | 'Reject' | ''>('');
  const [comments, setComments] = useState('');

  const approvedMentors = [
    {
      initials: 'JD',
      name: 'John Doe',
      id: 'MNT001',
      expertise: 'Software Engineering',
      joinDate: 'Dec 10, 2023',
      status: 'Active',
      rating: { score: 4.8, count: 24 },
      sessions: 87,
      actions: ['View', 'Block'],
    },
    {
      initials: 'EB',
      name: 'Emily Brown',
      id: 'MNT004',
      expertise: 'UX/UI Design',
      joinDate: 'Feb 14, 2024',
      status: 'Active',
      rating: { score: 4.7, count: 15 },
      sessions: 29,
      actions: ['View', 'Block'],
    },
  ];

  const mentorRequests = [
    {
      initials: 'SJ',
      name: 'Sarah Johnson',
      id: 'REQ001',
      jobTitle: 'Senior Data Scientist',
      category: 'Data Science',
      appliedDate: 'Jan 5, 2024',
      status: 'Under Review',
      actions: ['Review'],
    },
    {
      initials: 'MW',
      name: 'Michael Wilson',
      id: 'REQ002',
      jobTitle: 'Product Manager',
      category: 'Product Management',
      appliedDate: 'Jan 8, 2024',
      status: 'Under Review',
      actions: ['Review'],
    },
    {
      initials: 'DL',
      name: 'David Lee',
      id: 'REQ003',
      jobTitle: 'Marketing Director',
      category: 'Marketing Strategy',
      appliedDate: 'Jan 12, 2024',
      status: 'Under Review',
      actions: ['Review'],
    },
  ];

  const handleReviewClick = (mentor: MentorRequest) => {
    setSelectedMentor(mentor);
    setReviewStatus('');
    setComments('');
    setIsModalOpen(true);
  };

  const handleSubmitReview = () => {
    // Implement review submission logic here (e.g., API call)
    console.log('Review submitted:', { mentor: selectedMentor, status: reviewStatus, comments });
    setIsModalOpen(false);
    setSelectedMentor(null);
    setReviewStatus('');
    setComments('');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Mentor Management</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">
          Total Mentors: 89 &nbsp;&nbsp; Pending Requests: 3
        </h2>
      </section>
      <nav className="mb-8 flex gap-4 border-b border-[#333]">
        <button
          className={`pb-2 text-sm font-medium ${
            activeTab === 'approved' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-[#9ca3af] hover:text-blue-600'
          }`}
          onClick={() => setActiveTab('approved')}
        >
          Approved Mentors
        </button>
        <button
          className={`pb-2 text-sm font-medium ${
            activeTab === 'requests' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-[#9ca3af] hover:text-blue-600'
          }`}
          onClick={() => setActiveTab('requests')}
        >
          Mentor Requests
        </button>
      </nav>
      {activeTab === 'approved' ? (
        <section>
          <div className="card bg-[#1a1a1a] border border-[#333] rounded-lg p-6 transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
            <table className="w-full text-sm text-white">
              <thead>
                <tr className="text-[#9ca3af] border-b border-[#333]">
                  <th className="p-3 text-left">Mentor</th>
                  <th className="p-3 text-left">Expertise</th>
                  <th className="p-3 text-left">Join Date</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Rating</th>
                  <th className="p-3 text-left">Sessions</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {approvedMentors.map((mentor, index) => (
                  <tr key={index} className="border-b border-[#333] last:border-b-0">
                    <td className="p-3">
                      <div className="flex items-center">
                        <span className="avatar w-10 h-10 mr-4">
                          <span className="avatar-fallback bg-[#333] text-[#eee] font-semibold">{mentor.initials}</span>
                        </span>
                        <div>
                          <div className="font-medium text-white">{mentor.name}</div>
                          <div className="text-[#9ca3af] text-xs">ID: {mentor.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">{mentor.expertise}</td>
                    <td className="p-3">{mentor.joinDate}</td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          mentor.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {mentor.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        {mentor.rating.score} ({mentor.rating.count})
                      </span>
                    </td>
                    <td className="p-3">{mentor.sessions}</td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        {mentor.actions.map((action, idx) => (
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
      ) : (
        <section>
          <div className="card bg-[#1a1a1a] border border-[#333] rounded-lg p-6 transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
            <table className="w-full text-sm text-white">
              <thead>
                <tr className="text-[#9ca3af] border-b border-[#333]">
                  <th className="p-3 text-left">Applicant</th>
                  <th className="p-3 text-left">Job Title</th>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Applied Date</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mentorRequests.map((request, index) => (
                  <tr key={index} className="border-b border-[#333] last:border-b-0">
                    <td className="p-3">
                      <div className="flex items-center">
                        <span className="avatar w-10 h-10 mr-4">
                          <span className="avatar-fallback bg-[#333] text-[#eee] font-semibold">{request.initials}</span>
                        </span>
                        <div>
                          <div className="font-medium text-white">{request.name}</div>
                          <div className="text-[#9ca3af] text-xs">ID: {request.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">{request.jobTitle}</td>
                    <td className="p-3">{request.category}</td>
                    <td className="p-3">{request.appliedDate}</td>
                    <td className="p-3">
                      <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                        {request.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        {request.actions.map((action, idx) => (
                          <button
                            key={idx}
                            className="btn inline-flex items-center justify-center h-10 px-4 text-sm font-medium rounded-md bg-white text-black hover:bg-[#f0f0f0]"
                            onClick={() => handleReviewClick(request)}
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
      )}

      {isModalOpen && selectedMentor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="card bg-[#1a1a1a] border border-[#333] rounded-lg p-6 w-full max-w-lg transition-all">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Mentor Application Review</h2>
              <button
                className="text-[#9ca3af] hover:text-white"
                onClick={() => setIsModalOpen(false)}
              >
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
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6L18 18" />
                </svg>
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-sm text-[#9ca3af] mb-2">Applicant Name</label>
              <input
                type="text"
                value={selectedMentor.name}
                readOnly
                className="input w-full h-10 rounded-md border border-[#444] bg-[#222] px-3 text-sm text-white focus-visible:outline-none focus-visible:border-white focus-visible:bg-[#333] focus-visible:ring-2 focus-visible:ring-white/10"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-[#9ca3af] mb-2">Job Title</label>
              <input
                type="text"
                value={selectedMentor.jobTitle}
                readOnly
                className="input w-full h-10 rounded-md border border-[#444] bg-[#222] px-3 text-sm text-white focus-visible:outline-none focus-visible:border-white focus-visible:bg-[#333] focus-visible:ring-2 focus-visible:ring-white/10"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-[#9ca3af] mb-2">Category</label>
              <input
                type="text"
                value={selectedMentor.category}
                readOnly
                className="input w-full h-10 rounded-md border border-[#444] bg-[#222] px-3 text-sm text-white focus-visible:outline-none focus-visible:border-white focus-visible:bg-[#333] focus-visible:ring-2 focus-visible:ring-white/10"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-[#9ca3af] mb-2">Applied Date</label>
              <input
                type="text"
                value={selectedMentor.appliedDate}
                readOnly
                className="input w-full h-10 rounded-md border border-[#444] bg-[#222] px-3 text-sm text-white focus-visible:outline-none focus-visible:border-white focus-visible:bg-[#333] focus-visible:ring-2 focus-visible:ring-white/10"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-[#9ca3af] mb-2">Review Status</label>
              <select
                value={reviewStatus}
                onChange={(e) => setReviewStatus(e.target.value as 'Approve' | 'Reject')}
                className="input w-full h-10 rounded-md border border-[#444] bg-[#222] px-3 text-sm text-white focus-visible:outline-none focus-visible:border-white focus-visible:bg-[#333] focus-visible:ring-2 focus-visible:ring-white/10"
              >
                <option value="">Select Status</option>
                <option value="Approve">Approve</option>
                <option value="Reject">Reject</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm text-[#9ca3af] mb-2">Comments</label>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="input w-full h-32 rounded-md border border-[#444] bg-[#222] px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:border-white focus-visible:bg-[#333] focus-visible:ring-2 focus-visible:ring-white/10"
                placeholder="Enter any comments or notes..."
              />
            </div>
            <div className="flex gap-4 justify-end">
              <button
                className="btn btn-outline inline-flex items-center justify-center h-10 px-4 text-sm font-medium rounded-md border-[#888] text-white hover:bg-white hover:text-black"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary inline-flex items-center justify-center h-10 px-4 text-sm font-medium rounded-md bg-white text-black hover:bg-[#f0f0f0]"
                onClick={handleSubmitReview}
                disabled={!reviewStatus}
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

