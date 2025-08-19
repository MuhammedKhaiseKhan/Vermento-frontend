import React, { useState } from "react";

interface UserData {
  name: string;
  gender: string;
  email: string;
  bio: string;
  skills: string[];
}

export const UserProfilePage: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    name: "Anonymous",
    gender: "male",
    email: "anonymous@gmail.com",
    bio: "I started programming at an age of 14 because I wanted to help people, specifically my mother who is an artist and who I made a website for.",
    skills: ["React", "Node.js", "JavaScript", "TypeScript", "AWS"],
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState<UserData>({ ...userData });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setEditData((prev) => ({ ...prev, [id.replace("edit-", "")]: value }));
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skills = e.target.value
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
    setEditData((prev) => ({ ...prev, skills }));
  };

  const saveChanges = () => {
    setUserData(editData);
    setIsModalOpen(false);
    alert("Profile updated successfully!");
  };

  return (
    <main className="flex-1 p-6 bg-bg-dark overflow-y-auto">
      <div className="max-w-[1200px] mx-auto bg-bg-medium rounded-xl border border-border-dark p-10 text-left">
        <div
          className="w-[calc(100%+5rem)] h-[120px] bg-[url('/placeholder.svg?height=120&width=1200')] bg-cover bg-center rounded-t-xl -mx-10 -mt-10 relative z-0"
        ></div>
        <div className="flex items-end -mt-16 mb-8 relative z-10 md:flex-row flex-col md:items-end md:text-left text-center">
          <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-text-primary flex-shrink-0 md:mr-6 mb-4 md:mb-0 bg-bg-light">
            <img
              src="/placeholder.svg?height=120&width=120"
              alt="User Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-text-primary"
              >
                <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                <path d="M15 5l4 4" />
              </svg>
            </div>
          </div>
          <div className="flex-grow flex flex-col md:items-start items-center justify-end">
            <h1 className="text-4xl font-extrabold text-text-primary mb-1">
              {userData.name}
            </h1>
            <div className="flex items-center gap-2 text-base text-text-tertiary mb-4 md:justify-start justify-center">
              <span className="font-medium">{userData.gender}</span>
              <span>{userData.email}</span>
            </div>
          </div>
          <div className="flex gap-3 md:ml-auto flex-col md:flex-row w-full md:w-auto">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium bg-edit-profile text-black rounded-md hover:bg-edit-profile-hover transition-colors w-full md:w-auto"
            >
              Edit Profile
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
                className="ml-2"
              >
                <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                <path d="M15 5l4 4" />
              </svg>
            </button>
            <a
              href="/change-password"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium bg-change-password text-black rounded-md hover:bg-change-password-hover transition-colors w-full md:w-auto"
            >
              Change Password
            </a>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-text-primary mb-4 border-b border-border-dark pb-2">
            Bio
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            {userData.bio}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-text-primary mb-4 border-b border-border-dark pb-2">
            Skills
          </h2>
          <ul className="flex flex-wrap gap-3 list-none p-0">
            {userData.skills.map((skill, index) => (
              <li
                key={index}
                className="bg-bg-light text-text-secondary px-4 py-2 rounded-full text-sm font-medium border border-border-dark"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[100] transition-opacity duration-300">
          <div className="bg-bg-medium rounded-xl border border-border-dark p-8 w-[90%] max-w-[600px] transform transition-transform duration-300 translate-y-0">
            <div className="flex justify-between items-center mb-6 pb-2 border-b border-border-dark">
              <h2 className="text-2xl font-semibold text-text-primary">
                Edit Profile
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-transparent text-text-secondary text-2xl cursor-pointer p-1 rounded-md hover:bg-bg-light hover:text-text-primary transition-colors"
              >
                &times;
              </button>
            </div>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="edit-name"
                  className="text-sm font-medium text-text-secondary mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="edit-name"
                  className="w-full px-3 py-2 rounded-md border border-border-dark bg-bg-light text-text-primary text-sm focus:outline-none focus:border-text-primary focus:bg-bg-medium"
                  value={editData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="edit-email"
                  className="text-sm font-medium text-text-secondary mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="edit-email"
                  className="w-full px-3 py-2 rounded-md border border-border-dark bg-bg-light text-text-primary text-sm focus:outline-none focus:border-text-primary focus:bg-bg-medium"
                  value={editData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="edit-gender"
                  className="text-sm font-medium text-text-secondary mb-2"
                >
                  Gender
                </label>
                <select
                  id="edit-gender"
                  className="w-full px-3 py-2 rounded-md border border-border-dark bg-bg-light text-text-primary text-sm focus:outline-none focus:border-text-primary focus:bg-bg-medium"
                  value={editData.gender}
                  onChange={handleInputChange}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="edit-bio"
                  className="text-sm font-medium text-text-secondary mb-2"
                >
                  Bio
                </label>
                <textarea
                  id="edit-bio"
                  className="w-full px-3 py-2 rounded-md border border-border-dark bg-bg-light text-text-primary text-sm min-h-[80px] resize-y focus:outline-none focus:border-text-primary focus:bg-bg-medium"
                  value={editData.bio}
                  onChange={handleInputChange}
                  placeholder="Tell us about yourself..."
                ></textarea>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="edit-skills"
                  className="text-sm font-medium text-text-secondary mb-2"
                >
                  Skills (comma-separated)
                </label>
                <input
                  type="text"
                  id="edit-skills"
                  className="w-full px-3 py-2 rounded-md border border-border-dark bg-bg-light text-text-primary text-sm focus:outline-none focus:border-text-primary focus:bg-bg-medium"
                  value={editData.skills.join(", ")}
                  onChange={handleSkillsChange}
                  placeholder="e.g., React, Node.js, AWS"
                />
              </div>
            </form>
            <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-border-dark">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-sm font-medium bg-transparent border border-border-dark text-text-secondary rounded-md hover:bg-bg-light hover:text-text-primary transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={saveChanges}
                className="px-4 py-2 text-sm font-medium bg-change-password text-black rounded-md hover:bg-change-password-hover transition-colors"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default UserProfilePage;