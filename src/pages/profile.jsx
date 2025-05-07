 
// // // import { useState, useEffect } from "react";
// // // import { useForm, Controller } from "react-hook-form";
// // // import {
// // //   Card,
// // //   CardContent,
// // //   Typography,
// // //   TextField,
// // //   Button,
// // //   Avatar,
// // //   Grid,
// // //   Box,
// // // } from "@mui/material";
// // // import { toast } from "react-hot-toast";

// // // const Profile = ({ user, onUpdate }) => {
// // //   const {
// // //     control,
// // //     handleSubmit,
// // //     formState: { errors },
// // //   } = useForm({ defaultValues: user });

// // //   const [avatar, setAvatar] = useState("");

// // //   // Load avatar from localStorage on mount
// // //   useEffect(() => {
// // //     const savedAvatar = localStorage.getItem("profile-avatar");
// // //     if (savedAvatar) {
// // //       setAvatar(savedAvatar);
// // //     }
// // //   }, []);

// // //   // Save avatar to localStorage when updated
// // //   useEffect(() => {
// // //     if (avatar) {
// // //       localStorage.setItem("profile-avatar", avatar);
// // //     }
// // //   }, [avatar]);

// // //   const onSubmit = (data) => {
// // //     toast.success("Profile updated successfully!");
// // //     onUpdate({ ...data, avatar });
// // //   };

// // //   const handleAvatarChange = (e) => {
// // //     const file = e.target.files[0];
// // //     if (!file) return;

// // //     const reader = new FileReader();

// // //     reader.onload = (event) => {
// // //       const imageDataUrl = event.target.result;

// // //       const img = new Image();
// // //       img.src = imageDataUrl;

// // //       img.onload = () => {
// // //         const { width, height } = img;

// // //         if (width !== height) {
// // //           toast.error("Please upload a square passport-size photo.");
// // //           return;
// // //         }

// // //         if (width < 300 || width > 600) {
// // //           toast.error("Image resolution must be between 300x600 pixels.");
// // //           return;
// // //         }

// // //         if (file.size > 200 * 1024) {
// // //           toast.error("Image size should not exceed 200KB.");
// // //           return;
// // //         }

// // //         // ✅ All validations passed
// // //         setAvatar(imageDataUrl);
// // //         toast.success("Avatar uploaded successfully!");
// // //       };

// // //       img.onerror = () => {
// // //         toast.error("Invalid image file.");
// // //       };
// // //     };

// // //     reader.readAsDataURL(file);
// // //   };

// // //   return (
// // //     <Card sx={{ maxWidth: 500, mx: "auto", mt: 5, p: 3, boxShadow: 3 }}>
// // //       <CardContent>
// // //         <Typography variant="h5" align="center" gutterBottom>
// // //           Edit Profile
// // //         </Typography>

// // //         {/* Avatar Preview */}
// // //         <Box display="flex" justifyContent="center" mb={2}>
// // //           {avatar ? (
// // //             <>
// // //               <Avatar
// // //                 src={avatar}
// // //                 alt="Profile Preview"
// // //                 sx={{ width: 100, height: 100, border: "2px solid #ccc" }}
// // //               />
// // //               {/* Optional: Debug preview */}
// // //               <img
// // //                 src={avatar}
// // //                 alt="Image Preview"
// // //                 style={{
// // //                   width: 100,
// // //                   height: 100,
// // //                   border: "1px solid red",
// // //                   marginLeft: 10,
// // //                 }}
// // //               />
// // //             </>
// // //           ) : (
// // //             <Avatar sx={{ width: 100, height: 100, border: "2px solid #ccc" }}>
// // //               {user?.name?.[0] || "U"}
// // //             </Avatar>
// // //           )}
// // //         </Box>

// // //         {/* Upload button */}
// // //         {/* <Box mb={2} textAlign="center">
// // //           <Button variant="outlined" component="label">
// // //             Upload Avatar
// // //             <input
// // //               type="file"
// // //               hidden
// // //               accept="image/png, image/jpeg"
// // //               onChange={handleAvatarChange}
// // //             />
// // //           </Button>
// // //         </Box> */}

// // //         {/* Profile Form */}
// // //         <form onSubmit={handleSubmit(onSubmit)} noValidate>
// // //           <Grid container spacing={2}>
// // //             <Grid item xs={12}>
// // //               <Controller
// // //                 name="name"
// // //                 control={control}
// // //                 rules={{ required: "Name is required" }}
// // //                 render={({ field }) => (
// // //                   <TextField
// // //                     {...field}
// // //                     label="Name"
// // //                     fullWidth
// // //                     error={!!errors.name}
// // //                     helperText={errors.name?.message}
// // //                   />
// // //                 )}
// // //               />
// // //             </Grid>

// // //             <Grid item xs={12}>
// // //               <Controller
// // //                 name="email"
// // //                 control={control}
// // //                 render={({ field }) => (
// // //                   <TextField {...field} label="Email" fullWidth disabled />
// // //                 )}
// // //               />
// // //             </Grid>

// // //             <Grid item xs={12}>
// // //               <Controller
// // //                 name="role"
// // //                 control={control}
// // //                 render={({ field }) => (
// // //                   <TextField {...field} label="Role" fullWidth disabled />
// // //                 )}
// // //               />
// // //             </Grid>

// // //             <Grid item xs={12}>
// // //               <Button
// // //                 type="submit"
// // //                 variant="contained"
// // //                 color="primary"
// // //                 fullWidth
// // //               >
// // //                 Update Profile
// // //               </Button>
// // //             </Grid>
// // //           </Grid>
// // //         </form>
// // //       </CardContent>
// // //     </Card>
// // //   );
// // // };

// // // export default Profile;
// // import { useState, useEffect } from "react";
// // import { useForm, Controller } from "react-hook-form";
// // import {
// //   Card,
// //   CardContent,
// //   Typography,
// //   TextField,
// //   Button,
// //   Avatar,
// //   Grid,
// //   Box,
// // } from "@mui/material";
// // import { toast } from "react-hot-toast";

// // const Profile = ({ user, onUpdate }) => {
// //   const {
// //     control,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm({ defaultValues: user });

// //   const [avatar, setAvatar] = useState("");

// //   // Load avatar from localStorage on mount
// //   useEffect(() => {
// //     const savedAvatar = localStorage.getItem("profile-avatar");
// //     if (savedAvatar) {
// //       setAvatar(savedAvatar);
// //     }
// //   }, []);

// //   // Save avatar to localStorage when updated
// //   useEffect(() => {
// //     if (avatar) {
// //       localStorage.setItem("profile-avatar", avatar);
// //     }
// //   }, [avatar]);

// //   const onSubmit = (data) => {
// //     toast.success("Profile updated successfully!");
// //     onUpdate({ ...data, avatar });
// //   };

// //   const handleAvatarChange = (e) => {
// //     const file = e.target.files[0];
// //     if (!file) return;

// //     const reader = new FileReader();

// //     reader.onload = (event) => {
// //       const imageDataUrl = event.target.result;

// //       const img = new Image();
// //       img.src = imageDataUrl;

// //       img.onload = () => {
// //         const { width, height } = img;

// //         if (width !== height) {
// //           toast.error("Please upload a square passport-size photo.");
// //           return;
// //         }

// //         if (width < 300 || width > 600) {
// //           toast.error("Image resolution must be between 300x600 pixels.");
// //           return;
// //         }

// //         if (file.size > 200 * 1024) {
// //           toast.error("Image size should not exceed 200KB.");
// //           return;
// //         }

// //         // ✅ All validations passed
// //         setAvatar(imageDataUrl);
// //         toast.success("Avatar uploaded successfully!");
// //       };

// //       img.onerror = () => {
// //         toast.error("Invalid image file.");
// //       };
// //     };

// //     reader.readAsDataURL(file);
// //   };

// //   return (
// //     <Card sx={{ maxWidth: 500, mx: "auto", mt: 5, p: 3, boxShadow: 3 }}>
// //       <CardContent>
// //         <Typography variant="h5" align="center" gutterBottom>
// //           Edit Profile
// //         </Typography>

// //         {/* Avatar Preview */}
// //         <Box display="flex" justifyContent="center" mb={2}>
// //           {avatar ? (
// //             <Avatar
// //               src={avatar}
// //               alt="Profile Preview"
// //               sx={{ width: 100, height: 100, border: "2px solid #ccc" }}
// //             />
// //           ) : (
// //             <Avatar sx={{ width: 100, height: 100, border: "2px solid #ccc" }}>
// //               {user?.name?.[0] || "U"}
// //             </Avatar>
// //           )}
// //         </Box>

// //         {/* Avatar Upload Button */}
// //         <Box mb={2} textAlign="center">
// //           <Button variant="outlined" component="label">
// //             Upload Avatar
// //             <input
// //               type="file"
// //               hidden
// //               accept="image/png, image/jpeg"
// //               onChange={handleAvatarChange}
// //             />
// //           </Button>
// //         </Box>

// //         {/* Profile Form */}
// //         <form onSubmit={handleSubmit(onSubmit)} noValidate>
// //           <Grid container spacing={2}>
// //             <Grid item xs={12}>
// //               <Controller
// //                 name="name"
// //                 control={control}
// //                 rules={{ required: "Name is required" }}
// //                 render={({ field }) => (
// //                   <TextField
// //                     {...field}
// //                     label="Name"
// //                     fullWidth
// //                     error={!!errors.name}
// //                     helperText={errors.name?.message}
// //                   />
// //                 )}
// //               />
// //             </Grid>

// //             <Grid item xs={12}>
// //               <Controller
// //                 name="email"
// //                 control={control}
// //                 render={({ field }) => (
// //                   <TextField {...field} label="Email" fullWidth disabled />
// //                 )}
// //               />
// //             </Grid>

// //             <Grid item xs={12}>
// //               <Controller
// //                 name="role"
// //                 control={control}
// //                 render={({ field }) => (
// //                   <TextField {...field} label="Role" fullWidth disabled />
// //                 )}
// //               />
// //             </Grid>

// //             <Grid item xs={12}>
// //               <Button
// //                 type="submit"
// //                 variant="contained"
// //                 color="primary"
// //                 fullWidth
// //               >
// //                 Update Profile
// //               </Button>
// //             </Grid>
// //           </Grid>
// //         </form>
// //       </CardContent>
// //     </Card>
// //   );
// // };

// // export default Profile;
// import { useState, useEffect } from "react";
// import { Card, CardContent, Typography, TextField, Button, Avatar, Box, Grid } from "@mui/material";
// import { toast } from "react-hot-toast";

// const Profile = () => {
//   const [user, setUser] = useState({ name: "", email: "" });
//   const [avatar, setAvatar] = useState("");

//   // Load user data from localStorage
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//       setUser(storedUser); // Set user data from localStorage
//     }
//   }, []);

//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();

//     reader.onload = (event) => {
//       setAvatar(event.target.result);
//       localStorage.setItem("profile-avatar", event.target.result); // Store avatar in localStorage
//       toast.success("Avatar updated!");
//     };

//     reader.readAsDataURL(file);
//   };

//   const onSubmit = () => {
//     toast.success("Profile updated successfully!");
//   };

//   return (
//     <Card sx={{ maxWidth: 500, mx: "auto", mt: 5, p: 3, boxShadow: 3 }}>
//       <CardContent>
//         <Typography variant="h5" align="center" gutterBottom>
//           Edit Profile
//         </Typography>

//         {/* Avatar Section */}
//         <Box display="flex" justifyContent="center" mb={2}>
//           <Avatar
//             src={avatar}
//             alt="Profile Avatar"
//             sx={{ width: 100, height: 100, border: "2px solid #ccc" }}
//           >
//             {user?.name?.[0] || "U"}
//           </Avatar>
//         </Box>

//         <Box mb={2} textAlign="center">
//           <Button variant="outlined" component="label">
//             Upload Avatar
//             <input
//               type="file"
//               hidden
//               accept="image/png, image/jpeg"
//               onChange={handleAvatarChange}
//             />
//           </Button>
//         </Box>

//         {/* Profile Form */}
//         <form onSubmit={onSubmit} noValidate>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 label="Name"
//                 fullWidth
//                 value={user.name}
//                 disabled
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 label="Email"
//                 fullWidth
//                 value={user.email}
//                 disabled
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <Button type="submit" variant="contained" color="primary" fullWidth>
//                 Update Profile
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// export default Profile;
import { useState, useEffect } from "react";
import { Card, CardContent, Typography, TextField, Button, Avatar, Box, Grid } from "@mui/material";
import { toast } from "react-hot-toast";

const Profile = () => {
  const [user, setUser] = useState({ name: "", email: "", role: "User" });
  const [avatar, setAvatar] = useState("");

  // Load user data from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedAvatar = localStorage.getItem("profile-avatar");

    if (storedUser) {
      setUser(storedUser); // Set user data from localStorage
    }
    if (storedAvatar) {
      setAvatar(storedAvatar); // Set avatar from localStorage if available
    }
  }, []);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      setAvatar(event.target.result);
      localStorage.setItem("profile-avatar", event.target.result); // Store avatar in localStorage
      toast.success("Avatar updated!");
    };

    reader.readAsDataURL(file);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    toast.success("Profile updated successfully!");
  };

  return (
    <Card sx={{ maxWidth: 500, mx: "auto", mt: 5, p: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Edit Profile
        </Typography>

        {/* Avatar Section */}
        <Box display="flex" justifyContent="center" mb={2}>
          <Avatar
            src={avatar}
            alt="Profile Avatar"
            sx={{ width: 100, height: 100, border: "2px solid #ccc" }}
          >
            {user?.name?.[0] || "U"}
          </Avatar>
        </Box>

        <Box mb={2} textAlign="center">
          <Button variant="outlined" component="label">
            Upload Avatar
            <input
              type="file"
              hidden
              accept="image/png, image/jpeg"
              onChange={handleAvatarChange}
            />
          </Button>
        </Box>

        {/* Profile Form */}
        <form onSubmit={onSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                fullWidth
                value={user.name}
                disabled
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                value={user.email}
                disabled
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Role"
                fullWidth
                value={user.role} // Display role
                disabled
              />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Update Profile
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default Profile;
