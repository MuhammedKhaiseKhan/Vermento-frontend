import React, { useState, useEffect } from "react";

interface Conversation {
  id: number;
  name: string;
  title: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  online: boolean;
  messages: Message[];
}

interface Message {
  id: number;
  text: string;
  sent: boolean;
  timestamp: string;
}

export const MessagesPage: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 1,
      name: "Sarah Mitchell",
      title: "Senior Product Manager at Google",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
      lastMessage: "Thanks for the session! The product strategy insights were really helpful.",
      timestamp: "2 min ago",
      unread: 2,
      online: true,
      messages: [
        { id: 1, text: "Hi John! Ready for our session today?", sent: false, timestamp: "10:30 AM" },
        { id: 2, text: "Yes, absolutely! Looking forward to discussing product strategy.", sent: true, timestamp: "10:32 AM" },
        { id: 3, text: "Great! Let's start with your current challenges.", sent: false, timestamp: "10:33 AM" },
        { id: 4, text: "Thanks for the session! The product strategy insights were really helpful.", sent: false, timestamp: "11:45 AM" },
      ],
    },
    {
      id: 2,
      name: "Marcus Johnson",
      title: "Startup Founder & CEO",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
      lastMessage: "Let's schedule our next session for next week",
      timestamp: "1 hour ago",
      unread: 0,
      online: false,
      messages: [
        { id: 1, text: "How's the fundraising going?", sent: false, timestamp: "Yesterday 3:20 PM" },
        { id: 2, text: "Making good progress! We've had some promising conversations with VCs.", sent: true, timestamp: "Yesterday 3:25 PM" },
        { id: 3, text: "That's excellent news! Keep me updated.", sent: false, timestamp: "Yesterday 3:26 PM" },
        { id: 4, text: "Let's schedule our next session for next week", sent: false, timestamp: "1 hour ago" },
      ],
    },
    {
      id: 3,
      name: "Alex Rivera",
      title: "Creative Director at DesignCorp",
      avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      lastMessage: "The design system documentation looks great!",
      timestamp: "3 hours ago",
      unread: 1,
      online: true,
      messages: [
        { id: 1, text: "I've reviewed your portfolio. Impressive work!", sent: false, timestamp: "Today 9:15 AM" },
        { id: 2, text: "Thank you! I'd love to get your feedback on my latest project.", sent: true, timestamp: "Today 9:20 AM" },
        { id: 3, text: "The design system documentation looks great!", sent: false, timestamp: "3 hours ago" },
      ],
    },
    {
      id: 4,
      name: "Jennifer Kim",
      title: "Software Engineering Manager",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      lastMessage: "Your React code structure is improving nicely",
      timestamp: "Yesterday",
      unread: 0,
      online: false,
      messages: [
        { id: 1, text: "How's the React learning going?", sent: false, timestamp: "Yesterday 2:00 PM" },
        { id: 2, text: "Really well! I've been practicing with the exercises you gave me.", sent: true, timestamp: "Yesterday 2:05 PM" },
        { id: 3, text: "Your React code structure is improving nicely", sent: false, timestamp: "Yesterday 2:10 PM" },
      ],
    },
    {
      id: 5,
      name: "David Chen",
      title: "Marketing Director at HubSpot",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      lastMessage: "The growth metrics are looking promising",
      timestamp: "2 days ago",
      unread: 0,
      online: true,
      messages: [
        { id: 1, text: "Let's review your marketing campaign performance", sent: false, timestamp: "2 days ago 4:30 PM" },
        { id: 2, text: "I have the latest analytics ready.", sent: true, timestamp: "2 days ago 4:35 PM" },
        { id: 3, text: "The growth metrics are looking promising", sent: false, timestamp: "2 days ago 5:00 PM" },
      ],
    },
  ]);
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectConversation = (conversationId: number) => {
    const conversation = conversations.find((conv) => conv.id === conversationId);
    if (conversation) {
      setActiveConversation({ ...conversation, unread: 0 });
      setConversations((prev) =>
        prev.map((conv) =>
          conv.id === conversationId ? { ...conv, unread: 0 } : conv
        )
      );
    }
  };

  const sendMessage = () => {
    if (messageInput.trim() && activeConversation) {
      const newMessage = {
        id: activeConversation.messages.length + 1,
        text: messageInput,
        sent: true,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      const updatedConversations = conversations.map((conv) =>
        conv.id === activeConversation.id
          ? {
              ...conv,
              messages: [...conv.messages, newMessage],
              lastMessage: messageInput,
              timestamp: "Just now",
            }
          : conv
      );

      setConversations(updatedConversations);
      setActiveConversation({
        ...activeConversation,
        messages: [...activeConversation.messages, newMessage],
        lastMessage: messageInput,
        timestamp: "Just now",
      });
      setMessageInput("");
    }
  };

  useEffect(() => {
    if (activeConversation) {
      const chatMessages = document.getElementById("chatMessages");
      if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    }
  }, [activeConversation]);

  return (
    <main className="flex-1 bg-gradient-bg animate-gradient-shift">
      <div className="messages-container mx-auto flex flex-col md:flex-row h-[calc(100vh-5rem)]">
        {/* Chat List */}
        <div className="chat-list w-full md:w-[25rem] bg-bg-medium border-r border-border-dark flex flex-col">
          <div className="p-4">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-bg-light border border-border-dark text-text-primary placeholder-text-tertiary focus:outline-none focus:border-text-primary focus:bg-bg-light/80 transition-all"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conv, index) => (
              <div
                key={conv.id}
                className={`chat-item p-4 border-b border-border-dark hover:bg-bg-light transition-colors cursor-pointer fade-in stagger-${index + 1} ${
                  activeConversation?.id === conv.id ? "bg-bg-light border-r-4 border-btn-primary" : ""
                }`}
                onClick={() => selectConversation(conv.id)}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <img
                      src={conv.avatar}
                      alt={conv.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    {conv.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-online-green rounded-full border-2 border-bg-medium"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-semibold text-text-primary truncate">{conv.name}</h4>
                      <span className="text-xs text-text-tertiary flex-shrink-0 ml-2">{conv.timestamp}</span>
                    </div>
                    <p className="text-xs text-text-tertiary mb-1 truncate">{conv.title}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-text-secondary truncate flex-1">{conv.lastMessage}</p>
                      {conv.unread > 0 && (
                        <span className="bg-red-error text-text-primary text-xs rounded-full px-2 py-1 min-w-[1.25rem] h-5 flex items-center justify-center">
                          {conv.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="chat-area flex-1 flex flex-col bg-bg-dark">
          {activeConversation ? (
            <>
              {/* Chat Header */}
              <div className="chat-header p-4 border-b border-border-dark bg-bg-medium flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={activeConversation.avatar}
                      alt={activeConversation.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    {activeConversation.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-online-green rounded-full border-2 border-bg-medium"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">{activeConversation.name}</h3>
                    <p className="text-sm text-text-tertiary">{activeConversation.online ? "Online" : "Last seen recently"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-text-tertiary hover:text-text-primary transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </button>
                  <button className="p-2 text-text-tertiary hover:text-text-primary transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="14" x="2" y="3" rx="2" />
                      <line x1="8" x2="16" y1="21" y2="21" />
                      <line x1="12" x2="12" y1="17" y2="21" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <div id="chatMessages" className="chat-messages flex-1 overflow-y-auto p-4 flex flex-col gap-4">
                {activeConversation.messages.map((message, index) => (
                  <div
                    key={message.id}
                    className={`message max-w-[70%] p-3 rounded-xl word-break fade-in stagger-${index + 1} ${
                      message.sent ? "self-end bg-btn-primary text-black" : "self-start bg-bg-light text-text-primary"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <div className="message-time text-xs text-text-tertiary mt-1 text-right opacity-70">{message.timestamp}</div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="chat-input-area p-4 border-t border-border-dark bg-bg-medium">
                <div className="flex items-end gap-3">
                  <button className="p-2 text-text-tertiary hover:text-text-primary transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                  </button>
                  <div className="flex-1">
                    <textarea
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          sendMessage();
                        }
                      }}
                      placeholder="Type your message..."
                      className="w-full px-4 py-3 rounded-lg bg-bg-light border border-border-dark text-text-primary placeholder-text-tertiary focus:outline-none focus:border-text-primary focus:bg-bg-light/80 transition-all resize-none"
                      rows={1}
                    ></textarea>
                  </div>
                  <button
                    onClick={sendMessage}
                    className="px-4 py-3 rounded-lg bg-btn-primary text-black font-semibold hover:bg-btn-primary-hover hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-text-tertiary fade-in">
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto mb-4 opacity-50"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Select a conversation</h3>
                <p className="text-sm text-text-tertiary">Choose from your existing conversations or start a new one</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MessagesPage;