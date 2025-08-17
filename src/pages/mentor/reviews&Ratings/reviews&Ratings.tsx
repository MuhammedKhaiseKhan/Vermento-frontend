import React from 'react';

export const ReviewsRatings: React.FC = () => {
  const reviews = [
    {
      initials: 'SJ',
      name: 'Sarah Johnson',
      date: '2 days ago',
      rating: 5,
      text: "John is an exceptional mentor! His guidance on React development has been invaluable. He explains complex concepts in a way that's easy to understand and provides practical examples. The sessions are well-structured and he's always patient with questions. Highly recommend!",
      tags: ['React', 'JavaScript', 'Frontend'],
    },
    {
      initials: 'MC',
      name: 'Michael Chen',
      date: '1 week ago',
      rating: 5,
      text: 'Great experience working with John on my Node.js project. He helped me understand backend architecture and database design principles. His real-world experience shows in his teaching approach. Very professional and knowledgeable.',
      tags: ['Node.js', 'Backend', 'Database'],
    },
    {
      initials: 'ER',
      name: 'Emily Rodriguez',
      date: '2 weeks ago',
      rating: 4,
      text: "John helped me transition from design to frontend development. His approach to teaching CSS and responsive design was methodical and easy to follow. The only reason I'm giving 4 stars instead of 5 is that I wish we had more time to cover advanced animations.",
      tags: ['CSS', 'Responsive Design', 'UI/UX'],
    },
    {
      initials: 'DK',
      name: 'David Kim',
      date: '3 weeks ago',
      rating: 5,
      text: "Excellent mentor for full-stack development! John's expertise in both frontend and backend technologies is impressive. He helped me build my first complete web application from scratch. His code reviews were thorough and helped me improve my coding practices significantly.",
      tags: ['Full-Stack', 'Code Review', 'Best Practices'],
    },
    {
      initials: 'LT',
      name: 'Lisa Thompson',
      date: '1 month ago',
      rating: 5,
      text: "John is a fantastic mentor who really cares about his students' success. He helped me prepare for technical interviews and provided valuable career advice. His mock interview sessions were incredibly helpful. I landed my dream job thanks to his guidance!",
      tags: ['Career Guidance', 'Interview Prep', 'Technical Skills'],
    },
  ];

  const ratings = { 5: 99, 4: 19, 3: 6, 2: 2, 1: 1 };
  const totalReviews = 127;

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Reviews & Ratings</h1>
      <section className="card bg-[#1a1a1a] border border-[#333] rounded-lg p-6 mb-8 transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="text-6xl font-bold text-white">4.8</div>
            <div className="flex justify-center md:justify-start text-yellow-400 text-xl mb-2">
              {'★'.repeat(5)}
            </div>
            <p className="text-[#9ca3af]">Based on {totalReviews} reviews</p>
            <p className="text-white font-medium">Excellent mentor rating</p>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-lg font-semibold text-white mb-4">Rating Breakdown</h3>
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center mb-2">
                <span className="w-12 text-[#9ca3af] text-sm">{star} star</span>
                <div className="flex-1 bg-[#333] h-2 rounded mx-4">
                  <div
                    className="bg-yellow-400 h-2 rounded"
                    style={{ width: `${(ratings[star as keyof typeof ratings] / totalReviews) * 100}%` }}
                  ></div>
                </div>
                <span className="text-[#9ca3af] text-sm">{ratings[star as keyof typeof ratings]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">All Reviews</h2>
          <div className="flex gap-4 text-[#9ca3af]">
            <a href="#" className="hover:text-blue-600 text-sm">All Reviews</a>
            <a href="#" className="hover:text-blue-600 text-sm">5 Stars</a>
            <a href="#" className="hover:text-blue-600 text-sm">4 Stars</a>
            <a href="#" className="hover:text-blue-600 text-sm">3 Stars</a>
            <a href="#" className="hover:text-blue-600 text-sm">Recent</a>
            <a href="#" className="hover:text-blue-600 text-sm">Oldest</a>
          </div>
        </div>
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="card bg-[#1a1a1a] border border-[#333] rounded-lg p-6 transition-all hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]"
            >
              <div className="flex items-center mb-4">
                <div className="avatar w-10 h-10 mr-4">
                  <span className="avatar-fallback bg-[#333] text-[#eee] font-semibold">{review.initials}</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">{review.name}</h4>
                  <p className="text-[#9ca3af] text-sm">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 text-lg mb-4">
                {'★'.repeat(review.rating)}
                {'☆'.repeat(5 - review.rating)}
              </div>
              <p className="text-[#e5e7eb] mb-4">{review.text}</p>
              <div className="flex flex-wrap gap-2">
                {review.tags.map((tag, idx) => (
                  <span key={idx} className="bg-[#333] text-[#9ca3af] px-2 py-1 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
