// // import { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import { Card, CardContent } from "../components/ui/card";
// // import { Button } from "../components/ui/button";
// // import { Input } from "../components/ui/input";
// // import { Label } from "../components/ui/label";
// // import ProfileAvatar from "../components/ProfileAvatar";
// // import { toast } from "react-hot-toast";
// // import styles from "../style/Profile.module.css";  // Adjust the path accordingly

// // // Reusable Input component
// // const FormInput = ({ id, label, type = "text", register, errors, disabled }) => (
// //   <div>
// //     <Label htmlFor={id}>{label}</Label>
// //     <Input
// //       id={id}
// //       type={type}
// //       {...register(id, { required: `${label} is required` })}
// //       className={`w-full p-2 border ${errors[id] ? "border-red-500" : "border-gray-300"} rounded-md`}
// //       disabled={disabled}
// //     />
// //     {errors[id] && (
// //       <p className="text-red-500 text-sm mt-1">{errors[id]?.message}</p>
// //     )}
// //   </div>
// // );

// // const Profile = ({ user, onUpdate }) => {
// //   const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: user });
// //   const [avatar, setAvatar] = useState(user.avatar || "");

// //   const onSubmit = (data) => {
// //     toast.success("Profile updated successfully!");
// //     onUpdate({ ...data, avatar });
// //   };

// //   const handleAvatarChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => setAvatar(reader.result);
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   return (
// //     <Card className="max-w-lg mx-auto p-6 shadow-lg rounded-lg bg-white">
// //       <CardContent>
// //         {/* Avatar Section */}
// //         <ProfileAvatar avatar={avatar} onAvatarChange={handleAvatarChange} userName={user.name} />

// //         {/* Profile Form */}
// //         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
// //           {/* Name */}
// //           <FormInput
// //             id="name"
// //             label="Name"
// //             register={register}
// //             errors={errors}
// //           />

// //           {/* Email */}
// //           <FormInput
// //             id="email"
// //             label="Email"
// //             type="email"
// //             register={register}
// //             errors={errors}
// //             disabled
// //           />

// //           {/* Role */}
// //           <FormInput
// //             id="role"
// //             label="Role"
// //             register={register}
// //             errors={errors}
// //             disabled
// //           />

// //           {/* Submit Button */}
// //           <Button
// //             type="submit"
// //             className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-md"
// //           >
// //             Update Profile
// //           </Button>
// //         </form>
// //       </CardContent>
// //     </Card>
// //   );
// // };

// // export default Profile;
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Card, CardContent } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import { Label } from "../components/ui/label";
// import ProfileAvatar from "../components/ProfileAvatar";
// import { toast } from "react-hot-toast";
// import styles from "../style/Profile.module.css"; // Adjust the path accordingly

// // Reusable Input component
// const FormInput = ({ id, label, type = "text", register, errors, disabled }) => (
//   <div>
//     <Label htmlFor={id}>{label}</Label>
//     <Input
//       id={id}
//       type={type}
//       {...register(id, { required: `${label} is required` })}
//       className={`w-full p-2 border ${errors[id] ? "border-red-500" : "border-gray-300"} rounded-md`}
//       disabled={disabled}
//     />
//     {errors[id] && <p className="text-red-500 text-sm mt-1">{errors[id]?.message}</p>}
//   </div>
// );

// const Profile = ({ user, onUpdate }) => {
//   const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: user });
//   const [avatar, setAvatar] = useState(user.avatar || "");

//   const onSubmit = (data) => {
//     toast.success("Profile updated successfully!");
//     onUpdate({ ...data, avatar });
//   };

//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       const img = new Image();
//       const reader = new FileReader();

//       reader.onload = () => {
//         img.src = reader.result;
//       };

//       img.onload = () => {
//         const { width, height } = img;

//         // Ensure it's a square image (1:1 aspect ratio)
//         if (width !== height) {
//           toast.error("Please upload a square passport-size photo.");
//           return;
//         }

//         // Restrict resolution (300x600 pixels)
//         if (width < 300 || width > 600) {
//           toast.error("Image resolution must be between 300x600 pixels.");
//           return;
//         }

//         // Restrict file size (max 200KB)
//         if (file.size > 200 * 1024) {
//           toast.error("Image size should not exceed 200KB.");
//           return;
//         }

//         setAvatar(reader.result);
//       };

//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <Card className="max-w-lg mx-auto p-6 shadow-lg rounded-lg bg-white">
//       <CardContent>
//         {/* Avatar Section */}
//         <ProfileAvatar avatar={avatar} onAvatarChange={handleAvatarChange} userName={user.name} />

//         {/* File Input for Avatar */}
//         <input
//           type="file"
//           accept="image/png, image/jpeg"
//           onChange={handleAvatarChange}
//           className="mt-4"
//         />

//         {/* Profile Form */}
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
//           {/* Name */}
//           <FormInput id="name" label="Name" register={register} errors={errors} />

//           {/* Email */}
//           <FormInput id="email" label="Email" type="email" register={register} errors={errors} disabled />

//           {/* Role */}
//           <FormInput id="role" label="Role" register={register} errors={errors} disabled />

//           {/* Submit Button */}
//           <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-md">
//             Update Profile
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// export default Profile;
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { toast } from "react-hot-toast";
import styles from "../style/Profile.module.css"; // Adjust the path accordingly

// Reusable Input component
const FormInput = ({ id, label, type = "text", register, errors, disabled }) => (
  <div>
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      type={type}
      {...register(id, { required: `${label} is required` })}
      className={`w-full p-2 border ${errors[id] ? "border-red-500" : "border-gray-300"} rounded-md`}
      disabled={disabled}
    />
    {errors[id] && <p className="text-red-500 text-sm mt-1">{errors[id]?.message}</p>}
  </div>
);

const Profile = ({ user, onUpdate }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: user });
  const [avatar, setAvatar] = useState(user.avatar || "");

  const onSubmit = (data) => {
    toast.success("Profile updated successfully!");
    onUpdate({ ...data, avatar });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = () => {
        img.src = reader.result;
        setAvatar(reader.result); // Show image in UI immediately
      };

      img.onload = () => {
        const { width, height } = img;

        // Ensure it's a square image (1:1 aspect ratio)
        if (width !== height) {
          toast.error("Please upload a square passport-size photo.");
          return;
        }

        // Restrict resolution (300x600 pixels)
        if (width < 300 || width > 600) {
          toast.error("Image resolution must be between 300x600 pixels.");
          return;
        }

        // Restrict file size (max 200KB)
        if (file.size > 200 * 1024) {
          toast.error("Image size should not exceed 200KB.");
          return;
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="max-w-lg mx-auto p-6 shadow-lg rounded-lg bg-white">
      <CardContent>
        {/* Avatar Preview */}
        {avatar && (
          <div className="flex justify-center mb-4">
            <img src={avatar} alt="Profile Preview" className="w-36 h-36 rounded-full border-2 border-gray-300 shadow-md" />
          </div>
        )}

        {/* File Input for Avatar */}
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleAvatarChange}
          className="mt-4"
        />

        {/* Profile Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
          {/* Name */}
          <FormInput id="name" label="Name" register={register} errors={errors} />

          {/* Email */}
          <FormInput id="email" label="Email" type="email" register={register} errors={errors} disabled />

          {/* Role */}
          <FormInput id="role" label="Role" register={register} errors={errors} disabled />

          {/* Submit Button */}
          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-md">
            Update Profile
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Profile;
