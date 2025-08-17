import React, { useState, useEffect } from "react";

interface Mentor {
  id: number;
  name: string;
  title: string;
  company: string;
  category: string;
  expertise: string[];
  rating: number;
  reviews: number;
  price: number;
  experience: string;
  sessions: number;
  image: string;
  available: boolean;
}

export const ExplorePage: React.FC = () => {
  const [mentors, setMentors] = useState<Mentor[]>([
    {
      id: 1,
      name: "Sarah Mitchell",
      title: "Senior Product Manager",
      company: "Google",
      category: "tech",
      expertise: ["Product Strategy", "Team Leadership", "User Research"],
      rating: 4.9,
      reviews: 127,
      price: 150,
      experience: "8+ years",
      sessions: 250,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
      available: true
    },
    // Add other mentors here as in the HTML script
    {
      id: 2,
      name: "Marcus Johnson",
      title: "Startup Founder & CEO",
      company: "TechVenture Inc",
      category: "business",
      expertise: ["Entrepreneurship", "Fundraising", "Business Strategy"],
      rating: 4.8,
      reviews: 89,
      price: 200,
      experience: "12+ years",
      sessions: 180,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
      available: true
    },
    {
      id: 3,
      name: "Alex Rivera",
      title: "Creative Director",
      company: "DesignCorp",
      category: "design",
      expertise: ["Brand Design", "Creative Leadership", "Design Systems"],
      rating: 4.9,
      reviews: 156,
      price: 120,
      experience: "10+ years",
      sessions: 320,
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      available: true
    },
    {
      id: 4,
      name: "Jennifer Kim",
      title: "Software Engineering Manager",
      company: "Microsoft",
      category: "tech",
      expertise: ["JavaScript", "React", "Team Management", "System Design"],
      rating: 4.7,
      reviews: 203,
      price: 140,
      experience: "9+ years",
      sessions: 415,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      available: true
    },
    {
      id: 5,
      name: "David Chen",
      title: "Marketing Director",
      company: "HubSpot",
      category: "marketing",
      expertise: ["Digital Marketing", "Growth Hacking", "Content Strategy"],
      rating: 4.6,
      reviews: 134,
      price: 110,
      experience: "7+ years",
      sessions: 267,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      available: true
    },
    {
      id: 6,
      name: "Lisa Wong",
      title: "UX Research Lead",
      company: "Airbnb",
      category: "design",
      expertise: ["User Research", "Data Analysis", "Design Thinking"],
      rating: 4.8,
      reviews: 178,
      price: 135,
      experience: "11+ years",
      sessions: 298,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      available: true
    }
  ]);
  const [filteredMentors, setFilteredMentors] = useState<Mentor[]>([...mentors]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [currentSort, setCurrentSort] = useState('rating');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let updatedMentors = [...mentors];

    if (currentFilter !== 'all') {
      updatedMentors = updatedMentors.filter(mentor => mentor.category === currentFilter);
    }

    if (searchQuery) {
      updatedMentors = updatedMentors.filter(mentor =>
        mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    updatedMentors.sort((a, b) => {
      switch (currentSort) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'experience':
          return parseInt(b.experience) - parseInt(a.experience);
        case 'rating':
        default:
          return b.rating - a.rating;
      }
    });

    setFilteredMentors(updatedMentors);
  }, [currentFilter, currentSort, searchQuery]);

  const createStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < Math.floor(rating) ? "star-filled" : "star-empty"}>★</span>
    ));
  };

  return (   
      <div className="main-content-wrapper">
        
        <section className="gradient-bg py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 fade-in">
              <h1 className="text-4xl md:text-6xl font-black mb-6 text-gradient leading-tight">
                Find Your Perfect Mentor
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Connect with industry experts who can accelerate your growth and help you achieve your professional goals
              </p>
            </div>

            <div className="max-w-4xl mx-auto fade-in stagger-2">
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <button onClick={() => setCurrentFilter('all')} className={`filter-button px-6 py-3 rounded-lg border border-gray-700 text-gray-300 hover:border-white hover:text-white transition-all duration-300 ${currentFilter === 'all' ? 'active' : ''}`}>All Mentors</button>
                <button onClick={() => setCurrentFilter('tech')} className={`filter-button px-6 py-3 rounded-lg border border-gray-700 text-gray-300 hover:border-white hover:text-white transition-all duration-300 ${currentFilter === 'tech' ? 'active' : ''}`}>Technology</button>
                <button onClick={() => setCurrentFilter('business')} className={`filter-button px-6 py-3 rounded-lg border border-gray-700 text-gray-300 hover:border-white hover:text-white transition-all duration-300 ${currentFilter === 'business' ? 'active' : ''}`}>Business</button>
                <button onClick={() => setCurrentFilter('design')} className={`filter-button px-6 py-3 rounded-lg border border-gray-700 text-gray-300 hover:border-white hover:text-white transition-all duration-300 ${currentFilter === 'design' ? 'active' : ''}`}>Design</button>
                <button onClick={() => setCurrentFilter('marketing')} className={`filter-button px-6 py-3 rounded-lg border border-gray-700 text-gray-300 hover:border-white hover:text-white transition-all duration-300 ${currentFilter === 'marketing' ? 'active' : ''}`}>Marketing</button>
              </div>
              
              <div className="flex justify-center">
                <select onChange={(e) => setCurrentSort(e.target.value)} className="search-input px-4 py-2 rounded-lg focus:outline-none">
                  <option value="rating">Sort by Rating</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="experience">Experience</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </section>

        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div id="mentorsGrid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMentors.map((mentor, index) => (
                <div key={mentor.id} className="mentor-card card-hover bg-gray-900/50 border border-gray-800 rounded-xl p-6 fade-in stagger-1">
                  <div className="text-center">
                    <img src={mentor.image} alt={mentor.name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-gray-700" />
                    <h3 className="text-xl font-bold text-white mb-1">{mentor.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">{mentor.title}</p>
                    <p className="text-gray-500 text-xs mb-4">{mentor.company}</p>
                    
                    <div className="flex justify-center items-center mb-4">
                      <div className="flex mr-2">
                        {createStars(mentor.rating)}
                      </div>
                      <span className="text-gray-400 text-sm">({mentor.reviews})</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 justify-center mb-4">
                      {mentor.expertise.slice(0, 3).map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">{skill}</span>
                      ))}
                    </div>
                    
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-white mb-1">${mentor.price}</div>
                      <div className="text-gray-400 text-sm">per hour</div>
                    </div>
                    
                    <div className="flex justify-between text-xs text-gray-400 mb-6">
                      <span>{mentor.experience}</span>
                      <span>{mentor.sessions} sessions</span>
                    </div>
                    
                    <button className="btn-primary w-full py-3 rounded-lg font-semibold">
                      Book Session
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div id="noResults" className="text-center py-16 hidden">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2 text-white">No mentors found</h3>
              <p className="text-gray-400">Try adjusting your search or filters</p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Can't Find the Right Mentor?</h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">Let us know what you're looking for and we'll help you find the perfect match for your goals.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold">Request Custom Match</button>
                <button className="btn-secondary px-8 py-4 rounded-lg text-lg font-semibold">Become a Mentor</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    
  );
};
