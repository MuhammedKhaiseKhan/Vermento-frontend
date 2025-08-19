import React from "react";

const MentorsSection: React.FC = () => {
  const mentors = [
    { name: "Jane Doe", title: "Senior Software Engineer", category: "Technology", rating: 4.8 },
    { name: "Mark Smith", title: "Product Management Lead", category: "Business", rating: 4.5 },
    { name: "Emily White", title: "UX Designer", category: "Design", rating: 4.9 },
    { name: "David Lee", title: "Marketing Strategist", category: "Marketing", rating: 4.7 },
  ];

  return (
    <section id="mentors" className="mb-10">
      <h2 className="text-xl font-semibold mb-6 text-white">Available Mentors</h2>
      <div className="flex-cards-container mentors">
        {mentors.map((mentor, index) => (
          <div key={index} className="card card-violet-border w-full max-w-xs mx-auto">
            <div className="card-content p-6 flex flex-col items-center text-center">
              <span className="avatar h-20 w-20 mb-4">
                <img
                  src={`/placeholder.svg?height=80&width=80`}
                  alt={mentor.name}
                  className="avatar-image"
                />
                <span className="avatar-fallback">{mentor.name[0] + mentor.name.split(" ")[1][0]}</span>
              </span>
              <h3 className="text-lg font-semibold mb-1">{mentor.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{mentor.title}</p>
              <p className="text-gray-500 text-xs mb-3">{mentor.category}</p>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={i < Math.floor(mentor.rating) ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-4 w-4 ${i < Math.floor(mentor.rating) ? "fill-white text-white" : "text-gray-300"}`}
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-600">{mentor.rating}</span>
              </div>
              <button className="btn btn-outline border-black text-white hover:bg-white hover:text-black bg-transparent">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MentorsSection;