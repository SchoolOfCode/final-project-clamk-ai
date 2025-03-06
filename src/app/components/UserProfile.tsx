export default function UserProfile() {
  const user = {
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@example.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
  };
  return (
    <>
      <div className="bg-custom-green min-h-screen pt-20">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-white/20 rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold text-custom-white mb-6">
              User Profile
            </h1>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <p className="text-gray-800 p-2 bg-custom-green/50 rounded border border-gray-200">
                    {user.firstName}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <p className="text-gray-800 p-2 bg-custom-green/50 rounded border border-custom-white">
                    {user.lastName}
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <p className="text-gray-800 p-2 bg-custom-green/50 rounded border border-gray-200">
                  {user.email}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <p className="text-gray-800 p-2 bg-custom-green/50 rounded border border-gray-200">
                  {user.phone}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <p className="text-gray-800 p-2 bg-custom-green/50 rounded border border-gray-200">
                  {user.location}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button className="w-full py-2 px-4 rounded bg-green-200 text-gray-700 font-medium shadow-sm hover:text-custom-white hover:bg-custom-green">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
