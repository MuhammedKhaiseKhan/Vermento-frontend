import React, { useState, useEffect } from "react";

interface Booking {
  id: number;
  mentorName: string;
  mentorImage: string;
  sessionType: string;
  date: string;
  time: string;
  duration: string;
  status: string;
  price: string;
  meetingLink?: string;
  rating?: number;
}

export const BookingsPage: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: 1,
      mentorName: "Sarah Mitchell",
      mentorImage: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
      sessionType: "Product Strategy Session",
      date: "2025-01-15",
      time: "14:00",
      duration: "1h 30m",
      status: "upcoming",
      price: "$150",
      meetingLink: "https://meet.google.com/abc-defg-hij"
    },
    // Add other bookings here as in the HTML script
    {
      id: 2,
      mentorName: "Marcus Johnson",
      mentorImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
      sessionType: "Startup Fundraising",
      date: "2025-01-17",
      time: "10:00",
      duration: "2h 00m",
      status: "upcoming",
      price: "$200",
      meetingLink: "https://meet.google.com/xyz-uvwx-yz"
    },
    {
      id: 3,
      mentorName: "Alex Rivera",
      mentorImage: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      sessionType: "Design System Review",
      date: "2025-01-20",
      time: "15:30",
      duration: "1h 15m",
      status: "upcoming",
      price: "$120",
      meetingLink: "https://meet.google.com/def-ghij-klm"
    },
    {
      id: 4,
      mentorName: "Jennifer Kim",
      mentorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      sessionType: "React Development Session",
      date: "2025-01-10",
      time: "16:00",
      duration: "1h 45m",
      status: "completed",
      price: "$140",
      rating: 5
    },
    {
      id: 5,
      mentorName: "David Chen",
      mentorImage: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      sessionType: "Marketing Strategy Review",
      date: "2025-01-08",
      time: "11:00",
      duration: "1h 30m",
      status: "completed",
      price: "$110",
      rating: 4
    },
    {
      id: 6,
      mentorName: "Lisa Wong",
      mentorImage: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      sessionType: "UX Research Session",
      date: "2025-01-05",
      time: "13:00",
      duration: "2h 00m",
      status: "cancelled",
      price: "$135"
    }
  ]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([...bookings]);
  const [currentTab, setCurrentTab] = useState('upcoming');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  };

  const createStars = (rating: number | undefined) => {
    if (!rating) return '';
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-600"}>★</span>
    ));
  };

  useEffect(() => {
    let updatedBookings = [...bookings];

    if (searchQuery) {
      updatedBookings = updatedBookings.filter(booking =>
        booking.mentorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        booking.sessionType.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterStatus !== 'all') {
      updatedBookings = updatedBookings.filter(booking => booking.status === filterStatus);
    }

    setFilteredBookings(updatedBookings);
  }, [searchQuery, filterStatus]);

  const renderBookings = () => {
    let bookingsToRender = filteredBookings;
    if (currentTab === 'upcoming') {
      bookingsToRender = bookingsToRender.filter(b => b.status === 'upcoming');
    } else if (currentTab === 'past') {
      bookingsToRender = bookingsToRender.filter(b => b.status === 'completed' || b.status === 'cancelled');
    }

    if (bookingsToRender.length === 0) {
      return (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📅</div>
          <h3 className="text-2xl font-bold mb-2 text-white">No bookings found</h3>
          <p className="text-gray-400">Try adjusting your search or book a new session</p>
        </div>
      );
    }

    return bookingsToRender.map((booking, index) => (
      <div key={booking.id} className="booking-card bg-gray-900/50 border border-gray-800 rounded-xl p-6 card-hover fade-in stagger-1">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <img src={booking.mentorImage} alt={booking.mentorName} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h3 className="font-semibold text-white">{booking.mentorName}</h3>
              <p className="text-sm text-gray-400">{booking.sessionType}</p>
            </div>
          </div>
          <span className={`status-${booking.status} px-3 py-1 rounded-full text-xs font-medium capitalize`}>
            {booking.status}
          </span>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            <span className="text-sm">{formatDate(booking.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span className="text-sm">{formatTime(booking.time)} • {booking.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span className="text-sm font-medium text-white">{booking.price}</span>
          </div>
          {booking.rating && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Your rating:</span>
              <div className="flex">{createStars(booking.rating)}</div>
            </div>
          )}
        </div>
        
        <div className="flex gap-3">
          {booking.status === 'upcoming' ? (
            <>
              <button className="btn-primary flex-1 py-2 rounded-lg text-sm font-medium" onClick={() => joinSession(booking.meetingLink || '')}>
                Join Session
              </button>
              <button className="btn-outline px-4 py-2 rounded-lg text-sm font-medium" onClick={() => rescheduleBooking(booking.id)}>
                Reschedule
              </button>
              <button className="btn-outline px-4 py-2 rounded-lg text-sm font-medium text-red-400 border-red-400 hover:bg-red-400 hover:text-white" onClick={() => cancelBooking(booking.id)}>
                Cancel
              </button>
            </>
          ) : booking.status === 'completed' ? (
            <>
              <button className="btn-secondary flex-1 py-2 rounded-lg text-sm font-medium" onClick={() => bookAgain(booking.mentorName)}>
                Book Again
              </button>
              <button className="btn-outline px-4 py-2 rounded-lg text-sm font-medium" onClick={() => viewRecording(booking.id)}>
                View Recording
              </button>
            </>
          ) : (
            <button className="btn-secondary flex-1 py-2 rounded-lg text-sm font-medium" onClick={() => bookAgain(booking.mentorName)}>
              Book Again
            </button>
          )}
        </div>
      </div>
    ));
  };

  const joinSession = (meetingLink: string) => {
    window.open(meetingLink, '_blank');
  };

  const rescheduleBooking = (bookingId: number) => {
    alert(`Reschedule booking ${bookingId} - This would open a reschedule modal`);
  };

  const cancelBooking = (bookingId: number) => {
    if (confirm('Are you sure you want to cancel this booking?')) {
      alert(`Booking ${bookingId} cancelled`);
    }
  };

  const bookAgain = (mentorName: string) => {
    alert(`Book again with ${mentorName} - This would open the booking modal with pre-selected mentor`);
  };

  const viewRecording = (bookingId: number) => {
    alert(`View recording for booking ${bookingId} - This would open the recording`);
  };

  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    let calendarHTML = '';
    let currentCalendarDate = new Date(startDate);

    for (let week = 0; week < 6; week++) {
      for (let day = 0; day < 7; day++) {
        const isCurrentMonth = currentCalendarDate.getMonth() === month;
        const isToday = currentCalendarDate.toDateString() === new Date().toDateString();
        const dateString = currentCalendarDate.toISOString().split('T')[0];

        const dayBookings = bookings.filter(booking => booking.date === dateString);

        calendarHTML += `
          <div class="calendar-day ${!isCurrentMonth ? 'other-month' : ''} ${isToday ? 'today' : ''}" data-date="${dateString}">
            <div class="font-medium">${currentCalendarDate.getDate()}</div>
            ${dayBookings.map(booking => `
              <div class="calendar-event" title="${booking.mentorName} - ${booking.sessionType}">
                ${formatTime(booking.time)} ${booking.mentorName}
              </div>
            `).join('')}
          </div>
        `;

        currentCalendarDate.setDate(currentCalendarDate.getDate() + 1);
      }
    }

    return calendarHTML;
  };

  return (
      <div className="main-content-wrapper">
        
        <main className="flex-1 p-6">
          <div className="flex gap-2 mb-6 fade-in">
            <button onClick={() => setCurrentTab('upcoming')} className={`tab-button px-6 py-3 rounded-lg border border-gray-700 text-gray-300 hover:border-white hover:text-white transition-all duration-300 ${currentTab === 'upcoming' ? 'active' : ''}`}>Upcoming</button>
            <button onClick={() => setCurrentTab('past')} className={`tab-button px-6 py-3 rounded-lg border border-gray-700 text-gray-300 hover:border-white hover:text-white transition-all duration-300 ${currentTab === 'past' ? 'active' : ''}`}>Past Sessions</button>
            <button onClick={() => setCurrentTab('calendar')} className={`tab-button px-6 py-3 rounded-lg border border-gray-700 text-gray-300 hover:border-white hover:text-white transition-all duration-300 ${currentTab === 'calendar' ? 'active' : ''}`}>Calendar View</button>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6 fade-in stagger-1">
            <div className="relative flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input type="text" onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search bookings..." className="search-input w-full pl-10 pr-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none" />
            </div>
            <select onChange={(e) => setFilterStatus(e.target.value)} className="search-input px-4 py-3 rounded-lg focus:outline-none">
              <option value="all">All Status</option>
              <option value="upcoming">Upcoming</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          {currentTab === 'upcoming' && (
            <div id="upcomingTab" className="tab-content">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {renderBookings()}
              </div>
            </div>
          )}

          {currentTab === 'past' && (
            <div id="pastTab" className="tab-content">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {renderBookings()}
              </div>
            </div>
          )}

          {currentTab === 'calendar' && (
            <div id="calendarTab" className="tab-content">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
                  <div className="flex gap-2">
                    <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))} className="btn-outline px-4 py-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                    </button>
                    <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))} className="btn-outline px-4 py-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-gray-400 font-medium py-2">{day}</div>
                  ))}
                </div>
                
                <div className="calendar-grid" dangerouslySetInnerHTML={{ __html: generateCalendar() }} />
              </div>
            </div>
          )}

          {/* New Booking Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 w-full max-w-md mx-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Book New Session</h2>
                  <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
                  </button>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Select Mentor</label>
                    <select className="search-input w-full px-4 py-3 rounded-lg focus:outline-none">
                      <option value="">Choose a mentor...</option>
                      <option value="sarah">Sarah Mitchell - Product Strategy</option>
                      <option value="marcus">Marcus Johnson - Business Strategy</option>
                      <option value="alex">Alex Rivera - Design Leadership</option>
                      <option value="jennifer">Jennifer Kim - Software Engineering</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Session Type</label>
                    <select className="search-input w-full px-4 py-3 rounded-lg focus:outline-none">
                      <option value="1on1">1-on-1 Mentoring</option>
                      <option value="review">Code/Portfolio Review</option>
                      <option value="career">Career Guidance</option>
                      <option value="interview">Mock Interview</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Preferred Date</label>
                    <input type="date" className="search-input w-full px-4 py-3 rounded-lg focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Preferred Time</label>
                    <input type="time" className="search-input w-full px-4 py-3 rounded-lg focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Session Notes (Optional)</label>
                    <textarea className="search-input w-full px-4 py-3 rounded-lg focus:outline-none" rows={3} placeholder="What would you like to discuss?"></textarea>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <button type="button" onClick={() => setIsModalOpen(false)} className="btn-outline flex-1 py-3 rounded-lg font-medium">Cancel</button>
                    <button type="submit" className="btn-primary flex-1 py-3 rounded-lg font-medium">Book Session</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
   
  );
};
