import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileInfo from "../../components/profile/ProfileInfo";
import ProfileActions from "../../components/profile/ProfileActions";

import {
  getProfile,
  updateProfile,
} from "../../services/userService";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      setLoading(true);

      const data = await getProfile();

      setProfile(data);
    } catch (err) {
      console.log(err);

      toast.error("Failed to load profile");
    } finally {
      setLoading(false);
    }
  }

  async function handleSave() {
    try {
      await updateProfile(profile);

      toast.success("Profile updated successfully");

      setEditing(false);
    } catch (err) {
      console.log(err);

      toast.error("Update failed");
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-xl font-semibold">
          Loading Profile...
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-5">

      {/* Header */}
      <ProfileHeader profile={profile} />

      {/* Personal Information */}
      <ProfileInfo
        profile={profile}
        setProfile={setProfile}
        editing={editing}
      />

      {/* Buttons */}
      <ProfileActions
        editing={editing}
        setEditing={setEditing}
        handleSave={handleSave}
      />

    </div>
  );
}