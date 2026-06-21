import { useAuth } from "../../context/AuthContext";
import defaultImage from "../../assets/images/default-profile.png";

export default function UserAvatar({ onClick }) {
  const { user } = useAuth();

  // 🔥 FINAL SAFE FALLBACK LOGIC
  const avatar = user?.image || "/default-profile.png";
  return (
    <div onClick={onClick} className="cursor-pointer">
      <img
        src={avatar}
        alt="user"
        className="w-9 h-9 rounded-full object-cover border-2 border-white"
      />
    </div>
  );
}