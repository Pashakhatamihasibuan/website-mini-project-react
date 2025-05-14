import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userActivity, setUserActivity] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`, {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        });
        setUser(response.data.data);

        // Generate dummy activity data
        const activities = [
          { id: 1, action: "Logged in", time: "2 hours ago", icon: "🔒" },
          { id: 2, action: "Updated profile", time: "1 day ago", icon: "✏️" },
          { id: 3, action: "Created new document", time: "3 days ago", icon: "📄" },
          { id: 4, action: "Commented on post", time: "1 week ago", icon: "💬" },
        ];
        setUserActivity(activities);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center">
        <div className="w-8 h-8 border-4 border-indigo-500 rounded-full animate-spin border-t-transparent"></div>
      </div>
    );
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Dashboard
        </button>

        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white"
              >
                Dashboard
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                  {user.first_name} {user.last_name}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* User Profile Card */}
        <div className="lg:col-span-1">
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center">
              <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="w-32 h-32 mb-4 rounded-full" />
              <h2 className="mb-1 text-2xl font-bold">
                {user.first_name} {user.last_name}
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">{user.email}</p>

              <div className="w-full mb-6">
                <h3 className="mb-3 text-lg font-semibold">User Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">User ID</span>
                    <span>{user.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Status</span>
                    <span className="text-green-600 dark:text-green-400">Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Member Since</span>
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              <button className="w-full px-4 py-2 mb-4 font-medium text-white transition-all duration-200 bg-indigo-600 rounded-md hover:bg-indigo-700">
                Send Message
              </button>

              <div className="w-full">
                <h3 className="mb-3 text-lg font-semibold">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-blue-100 rounded-full dark:bg-blue-900/30">React</span>
                  <span className="px-3 py-1 text-sm bg-green-100 rounded-full dark:bg-green-900/30">JavaScript</span>
                  <span className="px-3 py-1 text-sm bg-purple-100 rounded-full dark:bg-purple-900/30">UI/UX</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Details */}
        <div className="lg:col-span-2">
          <div className="p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h3 className="mb-4 text-xl font-semibold">About</h3>
            <p className="text-left text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Activity Feed */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h3 className="mb-4 text-xl font-semibold">Recent Activity</h3>
            <div className="space-y-4">
              {userActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 mt-1 text-lg bg-gray-100 rounded-full dark:bg-gray-700">{activity.icon}</div>
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h3 className="mb-3 text-lg font-semibold">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h3 className="mb-3 text-lg font-semibold">Team Members</h3>
              <div className="space-y-3">
                {[
                  { id: 1, name: "Jane Cooper", role: "Frontend Developer", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
                  { id: 2, name: "John Smith", role: "Backend Developer", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
                  { id: 3, name: "Emma Watson", role: "UI Designer", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
                ].map((member) => (
                  <div key={member.id} className="flex items-center space-x-3">
                    <img className="w-8 h-8 rounded-full" src={member.avatar} alt={member.name} />
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
