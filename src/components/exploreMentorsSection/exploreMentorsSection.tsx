import React from "react";

const ExploreMentorsSection: React.FC = () => {
  return (
    <section className="explore-mentors-section">
      <h2 className="text-4xl font-extrabold mb-4 text-white">Find Your Perfect Mentor</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-[600px]">
        Discover a diverse range of experienced professionals ready to guide you on your journey. Filter by industry, expertise, and availability to find your ideal match.
      </p>
      <button className="btn bg-white text-black hover:bg-[#f0f0f0] py-3 px-8 text-base font-semibold rounded-lg">
        Explore All Mentors
      </button>
    </section>
  );
};

export default ExploreMentorsSection;
