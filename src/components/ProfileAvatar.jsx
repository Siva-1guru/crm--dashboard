// frontend/src/components/ProfileAvatar.jsx
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";  
import { Label } from "../components/ui/label";

const ProfileAvatar = ({ avatar, onAvatarChange, userName }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Avatar className="w-24 h-24">
        <AvatarImage src={avatar} alt="Profile" />
        <AvatarFallback>{userName[0]}</AvatarFallback>
      </Avatar>
      <input
        type="file"
        accept="image/*"
        onChange={onAvatarChange}
        className="hidden"
        id="avatar-upload"
      />
      <Label htmlFor="avatar-upload" className="cursor-pointer text-blue-500">
        Change Avatar
      </Label>
    </div>
  );
};

export default ProfileAvatar;
