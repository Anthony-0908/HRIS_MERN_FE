import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const ViewEmployee: React.FC = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
  const [users, setUsers] = useState<User[]>([]); // State with type User[]
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${API_URL}/User/users`); // Adjust endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data: User[] = await response.json(); // Specify the type of data
        setUsers(data); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false); // Stop loading once the request completes
      }
    };

    fetchUsers();
  }, [API_URL]);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">#</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Email</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={3} className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user.id} className="border-b">
                  <td className="px-6 py-3 text-sm text-gray-700">{index + 1}</td>
                  <td className="px-6 py-3 text-sm text-gray-700">{user.name}</td>
                  <td className="px-6 py-3 text-sm text-gray-700">{user.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center py-4">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewEmployee;
