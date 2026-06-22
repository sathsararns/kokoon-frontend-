import { useAuth } from "../../context/AuthContext";
import defaultImage from "../../assets/images/default-profile.png";

export default function UserAvatar({ onClick }) {
  const { user } = useAuth();

  const avatar = user?.image
    ? user.image
    : defaultImage;

  return (
    <img
      onClick={onClick}
      src={avatar}
      className="w-9 h-9 rounded-full object-cover border-2 cursor-pointer"
    />
  );
}