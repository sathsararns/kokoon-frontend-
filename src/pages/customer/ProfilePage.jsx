import { useEffect, useState } from "react";
import api from "../../utils/api";
import defaultAvatar from "../../assets/images/default-avatar.png";

export default function ProfilePage() {
  const [user, setUser] =useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    location: "",
    image: "",
  });

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      const res = await api.get("/users/profile");

      setUser(res.data);

      setFormData({
        firstName: res.data.firstName || "",
        lastName: res.data.lastName || "",
        email: res.data.email || "",
        phone: res.data.phone || "",
        address: res.data.address || "",
        location: res.data.location || "",
        image: res.data.image || "",
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function saveProfile() {
    try {
      const res = await api.put("/users/profile", formData);

      setUser(res.data);

      setEditMode(false);

      alert("Profile updated successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Update failed");
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">

        {/* Avatar */}

        <div className="flex flex-col items-center">

          <img
            src={user.image || defaultAvatar}
            alt="avatar"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-600"
          />

          <h2 className="text-2xl font-bold mt-4">
            {user.firstName} {user.lastName}
          </h2>

          <p className="text-gray-500 capitalize">
            {user.role}
          </p>

        </div>

        <hr className="my-8" />

        {/* Information */}

        <div className="space-y-5">

          <div>
            <label className="font-semibold">
              First Name
            </label>

            <input
              name="firstName"
              value={formData.firstName}
              disabled={!editMode}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1"
            />
          </div>

          <div>
            <label className="font-semibold">
              Last Name
            </label>

            <input
              name="lastName"
              value={formData.lastName}
              disabled={!editMode}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1"
            />
          </div>

          <div>
            <label className="font-semibold">
              Email
            </label>

            <input
              value={formData.email}
              disabled
              className="w-full border rounded p-2 mt-1 bg-gray-100"
            />
          </div>

          <div>
            <label className="font-semibold">
              Phone
            </label>

            <input
              name="phone"
              value={formData.phone}
              disabled={!editMode}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1"
            />
          </div>

          <div>
            <label className="font-semibold">
              Address
            </label>

            <input
              name="address"
              value={formData.address}
              disabled={!editMode}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1"
            />
          </div>

          <div>
            <label className="font-semibold">
              Location
            </label>

            <input
              name="location"
              value={formData.location}
              disabled={!editMode}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1"
            />
          </div>

        </div>

        <div className="mt-8 flex gap-4">

          {!editMode ? (
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-600 text-white px-5 py-2 rounded"
            >
              Edit Profile
            </button>
          ) : (
            <>
              <button
                onClick={saveProfile}
                className="bg-green-600 text-white px-5 py-2 rounded"
              >
                Save Changes
              </button>

              <button
                onClick={() => {
                  setEditMode(false);
                  loadProfile();
                }}
                className="bg-gray-500 text-white px-5 py-2 rounded"
              >
                Cancel
              </button>
            </>
          )}

        </div>

      </div>

    </div>
  );
}