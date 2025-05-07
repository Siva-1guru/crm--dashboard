// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import axios from 'axios';
// // // // // // import { Button, List, ListItem, ListItemText, CircularProgress } from '@mui/material';

// // // // // // const DocumentSection = () => {
// // // // // //   const [documents, setDocuments] = useState([]);
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [file, setFile] = useState(null);

// // // // // //   useEffect(() => {
// // // // // //     fetchDocuments();
// // // // // //   }, []);

// // // // // //   const fetchDocuments = async () => {
// // // // // //     setLoading(true);
// // // // // //     try {
// // // // // //       const response = await axios.get('/api/documents'); // Replace with your API route
// // // // // //       setDocuments(response.data);
// // // // // //     } catch (error) {
// // // // // //       console.error('Error fetching documents', error);
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleFileChange = (e) => {
// // // // // //     setFile(e.target.files[0]);
// // // // // //   };

// // // // // //   const handleUpload = async () => {
// // // // // //     if (!file) return;
// // // // // //     const formData = new FormData();
// // // // // //     formData.append('document', file);
// // // // // //     setLoading(true);

// // // // // //     try {
// // // // // //       await axios.post('/api/documents/upload', formData); // Replace with your API route
// // // // // //       setFile(null);
// // // // // //       fetchDocuments(); // Refresh document list
// // // // // //     } catch (error) {
// // // // // //       console.error('Error uploading document', error);
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleDelete = async (docId) => {
// // // // // //     setLoading(true);
// // // // // //     try {
// // // // // //       await axios.delete(`/api/documents/${docId}`); // Replace with your API route
// // // // // //       fetchDocuments(); // Refresh document list
// // // // // //     } catch (error) {
// // // // // //       console.error('Error deleting document', error);
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h2>Documents</h2>
// // // // // //       {loading && <CircularProgress />}
// // // // // //       <input type="file" onChange={handleFileChange} />
// // // // // //       <Button onClick={handleUpload} disabled={!file || loading}>Upload</Button>
      
// // // // // //       <List>
// // // // // //         {documents.map((doc) => (
// // // // // //           <ListItem key={doc._id}>
// // // // // //             <ListItemText primary={doc.name} />
// // // // // //             <Button onClick={() => handleDelete(doc._id)} color="secondary" disabled={loading}>
// // // // // //               Delete
// // // // // //             </Button>
// // // // // //           </ListItem>
// // // // // //         ))}
// // // // // //       </List>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default DocumentSection;
// // // // import React, { useEffect, useState } from "react";
// // // // import {
// // // //   Typography,
// // // //   Button,
// // // //   Box,
// // // //   Card,
// // // //   CardContent,
// // // //   CardActions,
// // // //   IconButton,
// // // //   Grid,
// // // //   CircularProgress
// // // // } from "@mui/material";
// // // // import { UploadFile, Delete, Download } from "@mui/icons-material";
// // // // import axios from "axios";

// // // // const DocumentSection = () => {
// // // //   const [documents, setDocuments] = useState([]);
// // // //   const [uploading, setUploading] = useState(false);
// // // //   const [selectedFile, setSelectedFile] = useState(null);

// // // //   // Fetch documents on load
// // // //   useEffect(() => {
// // // //     fetchDocuments();
// // // //   }, []);

// // // //   const fetchDocuments = async () => {
// // // //     try {
// // // //       const res = await axios.get("/api/documents");
// // // //       setDocuments(res.data);
// // // //     } catch (err) {
// // // //       console.error("Error fetching documents:", err);
// // // //     }
// // // //   };

// // // //   const handleFileChange = (e) => {
// // // //     setSelectedFile(e.target.files[0]);
// // // //   };

// // // //   const handleUpload = async () => {
// // // //     if (!selectedFile) return;

// // // //     const formData = new FormData();
// // // //     formData.append("document", selectedFile);

// // // //     try {
// // // //       setUploading(true);
// // // //       await axios.post("/api/documents", formData);
// // // //       setSelectedFile(null);
// // // //       fetchDocuments();
// // // //     } catch (err) {
// // // //       console.error("Upload failed:", err);
// // // //     } finally {
// // // //       setUploading(false);
// // // //     }
// // // //   };

// // // //   const handleDelete = async (id) => {
// // // //     try {
// // // //       await axios.delete(`/api/documents/${id}`);
// // // //       fetchDocuments();
// // // //     } catch (err) {
// // // //       console.error("Delete failed:", err);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <Box p={3}>
// // // //       <Typography variant="h4" gutterBottom>
// // // //         Document Management
// // // //       </Typography>

// // // //       <Box display="flex" alignItems="center" gap={2} mb={4}>
// // // //         <input
// // // //           type="file"
// // // //           onChange={handleFileChange}
// // // //           accept=".pdf,.doc,.docx,.xls,.xlsx"
// // // //         />
// // // //         <Button
// // // //           variant="contained"
// // // //           color="primary"
// // // //           startIcon={<UploadFile />}
// // // //           onClick={handleUpload}
// // // //           disabled={uploading || !selectedFile}
// // // //         >
// // // //           {uploading ? <CircularProgress size={20} /> : "Upload"}
// // // //         </Button>
// // // //       </Box>

// // // //       <Grid container spacing={2}>
// // // //         {documents.map((doc) => (
// // // //           <Grid item xs={12} md={6} lg={4} key={doc._id}>
// // // //             <Card>
// // // //               <CardContent>
// // // //                 <Typography variant="h6">{doc.name}</Typography>
// // // //                 <Typography variant="body2" color="text.secondary">
// // // //                   Uploaded: {new Date(doc.createdAt).toLocaleString()}
// // // //                 </Typography>
// // // //               </CardContent>
// // // //               <CardActions>
// // // //                 <Button
// // // //                   startIcon={<Download />}
// // // //                   href={doc.url}
// // // //                   target="_blank"
// // // //                   rel="noopener noreferrer"
// // // //                 >
// // // //                   Download
// // // //                 </Button>
// // // //                 <IconButton
// // // //                   color="error"
// // // //                   onClick={() => handleDelete(doc._id)}
// // // //                 >
// // // //                   <Delete />
// // // //                 </IconButton>
// // // //               </CardActions>
// // // //             </Card>
// // // //           </Grid>
// // // //         ))}
// // // //       </Grid>
// // // //     </Box>
// // // //   );
// // // // };

// // // // export default DocumentSection;
// // // // // import React from "react";

// // // // // const DocumentSection = () => {
// // // // //   return (
// // // // //     <div>
// // // // //       <h1>Document Section</h1>
// // // // //       {/* Add more content or testing elements */}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default DocumentSection;
// // // import React, { useEffect, useState } from "react";
// // // import {
// // //   Typography,
// // //   Button,
// // //   Box,
// // //   Card,
// // //   CardContent,
// // //   CardActions,
// // //   IconButton,
// // //   Grid,
// // //   CircularProgress,
// // //   Input,
// // //   Divider,
// // //   Stack
// // // } from "@mui/material";
// // // import { UploadFile, Delete, Download } from "@mui/icons-material";
// // // import axios from "axios";

// // // const DocumentSection = () => {
// // //   const [documents, setDocuments] = useState([]);
// // //   const [uploading, setUploading] = useState(false);
// // //   const [loading, setLoading] = useState(false);
// // //   const [selectedFile, setSelectedFile] = useState(null);

// // //   useEffect(() => {
// // //     fetchDocuments();
// // //   }, []);

// // //   const fetchDocuments = async () => {
// // //     try {
// // //       setLoading(true);
// // //       const res = await axios.get("/api/documents");
// // //       setDocuments(res.data || []);
// // //     } catch (err) {
// // //       console.error("Failed to fetch documents:", err);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleFileChange = (e) => {
// // //     setSelectedFile(e.target.files[0]);
// // //   };

// // //   const handleUpload = async () => {
// // //     if (!selectedFile) return;

// // //     const formData = new FormData();
// // //     formData.append("document", selectedFile);

// // //     try {
// // //       setUploading(true);
// // //       await axios.post("/api/documents", formData);
// // //       setSelectedFile(null);
// // //       fetchDocuments();
// // //     } catch (err) {
// // //       console.error("Upload error:", err);
// // //     } finally {
// // //       setUploading(false);
// // //     }
// // //   };

// // //   const handleDelete = async (id) => {
// // //     try {
// // //       await axios.delete(`/api/documents/${id}`);
// // //       fetchDocuments();
// // //     } catch (err) {
// // //       console.error("Delete error:", err);
// // //     }
// // //   };

// // //   return (
// // //     <Box p={4}>
// // //       <Typography variant="h4" mb={3}>
// // //         Document Management
// // //       </Typography>

// // //       <Stack direction="row" spacing={2} alignItems="center" mb={4}>
// // //         <Input type="file" onChange={handleFileChange} />
// // //         <Button
// // //           variant="contained"
// // //           startIcon={<UploadFile />}
// // //           onClick={handleUpload}
// // //           disabled={!selectedFile || uploading}
// // //         >
// // //           {uploading ? <CircularProgress size={20} /> : "Upload"}
// // //         </Button>
// // //       </Stack>

// // //       <Divider sx={{ mb: 3 }} />

// // //       {loading ? (
// // //         <CircularProgress />
// // //       ) : documents.length === 0 ? (
// // //         <Typography variant="body1" color="text.secondary">
// // //           No documents uploaded yet.
// // //         </Typography>
// // //       ) : (
// // //         <Grid container spacing={3}>
// // //           {documents.map((doc) => (
// // //             <Grid item xs={12} sm={6} md={4} key={doc._id}>
// // //               <Card>
// // //                 <CardContent>
// // //                   <Typography variant="h6">{doc.name}</Typography>
// // //                   <Typography variant="body2" color="text.secondary">
// // //                     Uploaded: {new Date(doc.createdAt).toLocaleString()}
// // //                   </Typography>
// // //                 </CardContent>
// // //                 <CardActions>
// // //                   <Button
// // //                     startIcon={<Download />}
// // //                     href={doc.url}
// // //                     target="_blank"
// // //                     rel="noopener noreferrer"
// // //                   >
// // //                     Download
// // //                   </Button>
// // //                   <IconButton onClick={() => handleDelete(doc._id)} color="error">
// // //                     <Delete />
// // //                   </IconButton>
// // //                 </CardActions>
// // //               </Card>
// // //             </Grid>
// // //           ))}
// // //         </Grid>
// // //       )}
// // //     </Box>
// // //   );
// // // };

// // // export default DocumentSection;
// // import React, { useState } from "react";
// // import {
// //   Typography,
// //   Button,
// //   Box,
// //   Card,
// //   CardContent,
// //   CardActions,
// //   IconButton,
// //   Grid,
// //   CircularProgress,
// // } from "@mui/material";
// // import { UploadFile, Delete, Download } from "@mui/icons-material";

// // const DocumentSection = () => {
// //   const [documents, setDocuments] = useState([]);
// //   const [selectedFile, setSelectedFile] = useState(null);
// //   const [uploading, setUploading] = useState(false);

// //   const handleFileChange = (e) => {
// //     setSelectedFile(e.target.files[0]);
// //   };

// //   const handleUpload = () => {
// //     if (!selectedFile) return;

// //     setUploading(true);

// //     const newDoc = {
// //       id: Date.now(),
// //       name: selectedFile.name,
// //       createdAt: new Date().toISOString(),
// //       url: URL.createObjectURL(selectedFile),
// //     };

// //     setTimeout(() => {
// //       setDocuments((prevDocs) => [...prevDocs, newDoc]);
// //       setSelectedFile(null);
// //       setUploading(false);
// //     }, 1000);
// //   };

// //   const handleDelete = (id) => {
// //     setDocuments((prevDocs) => prevDocs.filter((doc) => doc.id !== id));
// //   };

// //   return (
// //     <Box p={4}>
// //       <Typography variant="h4" gutterBottom>
// //         Document Management
// //       </Typography>

// //       <Box display="flex" alignItems="center" gap={2} mb={4}>
// //         <input
// //           type="file"
// //           accept=".pdf,.doc,.docx,.xls,.xlsx"
// //           onChange={handleFileChange}
// //         />
// //         <Button
// //           variant="contained"
// //           color="primary"
// //           startIcon={<UploadFile />}
// //           onClick={handleUpload}
// //           disabled={!selectedFile || uploading}
// //         >
// //           {uploading ? <CircularProgress size={20} /> : "Upload"}
// //         </Button>
// //       </Box>

// //       <Grid container spacing={3}>
// //         {documents.map((doc) => (
// //           <Grid item xs={12} sm={6} md={4} key={doc.id}>
// //             <Card>
// //               <CardContent>
// //                 <Typography variant="h6">{doc.name}</Typography>
// //                 <Typography variant="body2" color="text.secondary">
// //                   Uploaded: {new Date(doc.createdAt).toLocaleString()}
// //                 </Typography>
// //               </CardContent>
// //               <CardActions>
// //                 <Button
// //                   startIcon={<Download />}
// //                   href={doc.url}
// //                   download={doc.name}
// //                 >
// //                   Download
// //                 </Button>
// //                 <IconButton color="error" onClick={() => handleDelete(doc.id)}>
// //                   <Delete />
// //                 </IconButton>
// //               </CardActions>
// //             </Card>
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Box>
// //   );
// // };

// // export default DocumentSection;
// import React, { useState } from "react";
// import {
//   Typography,
//   Button,
//   Box,
//   Card,
//   CardContent,
//   CardActions,
//   IconButton,
//   Grid,
//   CircularProgress,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";
// import { UploadFile, Delete, Download, Visibility } from "@mui/icons-material";

// const DocumentSection = () => {
//   const [documents, setDocuments] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [openViewer, setOpenViewer] = useState(false);
//   const [selectedDocument, setSelectedDocument] = useState(null);

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (!selectedFile) return;

//     setUploading(true);

//     const newDoc = {
//       id: Date.now(),
//       name: selectedFile.name,
//       createdAt: new Date().toISOString(),
//       url: URL.createObjectURL(selectedFile),
//       type: selectedFile.type,
//       uploadedOn: new Date().toLocaleString(),
//     };

//     setTimeout(() => {
//       setDocuments((prevDocs) => [...prevDocs, newDoc]);
//       setSelectedFile(null);
//       setUploading(false);
//     }, 1000);
//   };

//   const handleDelete = (id) => {
//     setDocuments((prevDocs) => prevDocs.filter((doc) => doc.id !== id));
//   };

//   const handleView = (doc) => {
//     setSelectedDocument(doc);
//     setOpenViewer(true);
//   };

//   const handleCloseViewer = () => {
//     setOpenViewer(false);
//     setSelectedDocument(null);
//   };

//   return (
//     <Box p={4}>
//       <Typography variant="h4" gutterBottom>
//         Document Management
//       </Typography>

//       <Box display="flex" alignItems="center" gap={2} mb={4}>
//         <input
//           type="file"
//           accept=".pdf,.doc,.docx,.xls,.xlsx"
//           onChange={handleFileChange}
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           startIcon={<UploadFile />}
//           onClick={handleUpload}
//           disabled={!selectedFile || uploading}
//         >
//           {uploading ? <CircularProgress size={20} /> : "Upload"}
//         </Button>
//       </Box>

//       <Grid container spacing={3}>
//         {documents.map((doc) => (
//           <Grid item xs={12} sm={6} md={4} key={doc.id}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6">{doc.name}</Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Uploaded: {new Date(doc.createdAt).toLocaleString()}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button
//                   startIcon={<Download />}
//                   href={doc.url}
//                   download={doc.name}
//                 >
//                   Download
//                 </Button>
//                 <Button
//                   startIcon={<Visibility />}
//                   onClick={() => handleView(doc)}
//                 >
//                   View
//                 </Button>
//                 <IconButton color="error" onClick={() => handleDelete(doc.id)}>
//                   <Delete />
//                 </IconButton>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Document Viewer Modal */}
//       <Dialog open={openViewer} onClose={handleCloseViewer}>
//         <DialogTitle>Document Details</DialogTitle>
//         <DialogContent>
//           {selectedDocument && (
//             <>
//               <p><strong>Name:</strong> {selectedDocument.name}</p>
//               <p><strong>Type:</strong> {selectedDocument.type}</p>
//               <p><strong>Uploaded On:</strong> {selectedDocument.uploadedOn}</p>
//             </>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseViewer} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// // export default DocumentSection;
// import React, { useState } from "react";
// import {
//   Typography,
//   Button,
//   Box,
//   Card,
//   CardContent,
//   CardActions,
//   IconButton,
//   Grid,
//   CircularProgress,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Tooltip,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import {
//   UploadFile,
//   Delete,
//   Download,
//   Visibility,
//   ClearAll,
// } from "@mui/icons-material";

// const DocumentSection = () => {
//   const [documents, setDocuments] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [openViewer, setOpenViewer] = useState(false);
//   const [selectedDocument, setSelectedDocument] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
//   const [deleteTarget, setDeleteTarget] = useState(null);
//   const [snackbar, setSnackbar] = useState({ open: false, message: "", type: "success" });

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (!selectedFile) return;

//     setUploading(true);
//     const newDoc = {
//       id: Date.now(),
//       name: selectedFile.name,
//       size: (selectedFile.size / 1024).toFixed(2) + " KB",
//       createdAt: new Date().toISOString(),
//       url: URL.createObjectURL(selectedFile),
//       type: selectedFile.type,
//       uploadedOn: new Date().toLocaleString(),
//     };

//     setTimeout(() => {
//       setDocuments((prev) => [newDoc, ...prev]);
//       setSelectedFile(null);
//       setUploading(false);
//       setSnackbar({ open: true, message: "File uploaded successfully!", type: "success" });
//     }, 800);
//   };

//   const handleDelete = () => {
//     setDocuments((prevDocs) => prevDocs.filter((doc) => doc.id !== deleteTarget.id));
//     setOpenDeleteConfirm(false);
//     setSnackbar({ open: true, message: "Document deleted.", type: "info" });
//   };

//   const handleView = (doc) => {
//     setSelectedDocument(doc);
//     setOpenViewer(true);
//   };

//   const handleCloseViewer = () => {
//     setOpenViewer(false);
//     setSelectedDocument(null);
//   };

//   const filteredDocs = documents.filter((doc) =>
//     doc.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Box p={4}>
//       <Typography variant="h4" gutterBottom>
//         Document Management
//       </Typography>

//       <Box display="flex" alignItems="center" gap={2} mb={3} flexWrap="wrap">
//         <input
//           type="file"
//           accept=".pdf,.doc,.docx,.xls,.xlsx"
//           onChange={handleFileChange}
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           startIcon={<UploadFile />}
//           onClick={handleUpload}
//           disabled={!selectedFile || uploading}
//         >
//           {uploading ? <CircularProgress size={20} /> : "Upload"}
//         </Button>
//         <Button
//           variant="outlined"
//           color="error"
//           startIcon={<ClearAll />}
//           onClick={() => setDocuments([])}
//           disabled={documents.length === 0}
//         >
//           Clear All
//         </Button>
//         <TextField
//           label="Search Documents"
//           variant="outlined"
//           size="small"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </Box>

//       <Grid container spacing={3}>
//         {filteredDocs.map((doc) => (
//           <Grid item xs={12} sm={6} md={4} key={doc.id}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6" gutterBottom noWrap>
//                   {doc.name}
//                 </Typography>
//                 <Typography variant="body2">Size: {doc.size}</Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Uploaded: {new Date(doc.createdAt).toLocaleString()}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Tooltip title="Download">
//                   <IconButton
//                     color="primary"
//                     href={doc.url}
//                     download={doc.name}
//                   >
//                     <Download />
//                   </IconButton>
//                 </Tooltip>
//                 <Tooltip title="View">
//                   <IconButton color="success" onClick={() => handleView(doc)}>
//                     <Visibility />
//                   </IconButton>
//                 </Tooltip>
//                 <Tooltip title="Delete">
//                   <IconButton
//                     color="error"
//                     onClick={() => {
//                       setOpenDeleteConfirm(true);
//                       setDeleteTarget(doc);
//                     }}
//                   >
//                     <Delete />
//                   </IconButton>
//                 </Tooltip>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* View Dialog */}
//       <Dialog open={openViewer} onClose={handleCloseViewer} maxWidth="sm" fullWidth>
//         <DialogTitle>Document Preview</DialogTitle>
//         <DialogContent dividers>
//           {selectedDocument && (
//             <>
//               <Typography><strong>Name:</strong> {selectedDocument.name}</Typography>
//               <Typography><strong>Type:</strong> {selectedDocument.type}</Typography>
//               <Typography><strong>Uploaded:</strong> {selectedDocument.uploadedOn}</Typography>
//               <Box mt={2}>
//                 {selectedDocument.type.includes("pdf") ? (
//                   <iframe
//                     src={selectedDocument.url}
//                     width="100%"
//                     height="400px"
//                     title="PDF Viewer"
//                   />
//                 ) : (
//                   <Typography variant="body2" color="text.secondary">
//                     Preview not available for this file type.
//                   </Typography>
//                 )}
//               </Box>
//             </>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseViewer} color="primary">Close</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Confirm Delete Dialog */}
//       <Dialog
//         open={openDeleteConfirm}
//         onClose={() => setOpenDeleteConfirm(false)}
//       >
//         <DialogTitle>Confirm Delete</DialogTitle>
//         <DialogContent>Are you sure you want to delete this document?</DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenDeleteConfirm(false)}>Cancel</Button>
//           <Button onClick={handleDelete} color="error">Delete</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Snackbar */}
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={3000}
//         onClose={() => setSnackbar({ ...snackbar, open: false })}
//       >
//         <Alert
//           severity={snackbar.type}
//           onClose={() => setSnackbar({ ...snackbar, open: false })}
//         >
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// // export default DocumentSection;
// import React, { useState } from "react";
// import {
//   Typography,
//   Button,
//   Box,
//   Card,
//   CardContent,
//   CardActions,
//   IconButton,
//   Grid,
//   CircularProgress,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Tooltip,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import {
//   UploadFile,
//   Delete,
//   Download,
//   Visibility,
//   ClearAll,
// } from "@mui/icons-material";

// const DocumentSection = () => {
//   const [documents, setDocuments] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [openViewer, setOpenViewer] = useState(false);
//   const [selectedDocument, setSelectedDocument] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
//   const [deleteTarget, setDeleteTarget] = useState(null);
//   const [snackbar, setSnackbar] = useState({ open: false, message: "", type: "success" });

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (!selectedFile) return;

//     setUploading(true);
//     const newDoc = {
//       id: Date.now(),
//       name: selectedFile.name,
//       size: (selectedFile.size / 1024).toFixed(2) + " KB",
//       createdAt: new Date().toISOString(),
//       url: URL.createObjectURL(selectedFile),
//       type: selectedFile.type,
//       uploadedOn: new Date().toLocaleString(),
//     };

//     setTimeout(() => {
//       setDocuments((prev) => [newDoc, ...prev]);
//       setSelectedFile(null);
//       setUploading(false);
//       setSnackbar({ open: true, message: "File uploaded successfully!", type: "success" });
//     }, 800);
//   };

//   const handleDelete = () => {
//     setDocuments((prevDocs) => prevDocs.filter((doc) => doc.id !== deleteTarget.id));
//     setOpenDeleteConfirm(false);
//     setSnackbar({ open: true, message: "Document deleted.", type: "info" });
//   };

//   const handleView = (doc) => {
//     setSelectedDocument(doc);
//     setOpenViewer(true);
//   };

//   const handleCloseViewer = () => {
//     setOpenViewer(false);
//     setSelectedDocument(null);
//   };

//   const filteredDocs = documents.filter((doc) =>
//     doc.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Box p={4}>
//       <Typography variant="h4" gutterBottom>
//         Document Management
//       </Typography>

//       <Box display="flex" alignItems="center" gap={2} mb={2} flexWrap="wrap">
//         <input
//           type="file"
//           accept=".pdf,.doc,.docx,.xls,.xlsx"
//           onChange={handleFileChange}
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           startIcon={<UploadFile />}
//           onClick={handleUpload}
//           disabled={!selectedFile || uploading}
//         >
//           {uploading ? <CircularProgress size={20} /> : "Upload"}
//         </Button>
//         <Button
//           variant="outlined"
//           color="error"
//           startIcon={<ClearAll />}
//           onClick={() => setDocuments([])}
//           disabled={documents.length === 0}
//         >
//           Clear All
//         </Button>
//       </Box>

//       <Box mb={3}>
//         <TextField
//           fullWidth
//           label="Search Documents"
//           variant="outlined"
//           size="small"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           sx={{ width: "300px" }}
//         />
//       </Box>

//       <Grid container spacing={3}>
//         {filteredDocs.map((doc) => (
//           <Grid item xs={12} sm={6} md={4} key={doc.id}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6" gutterBottom noWrap>
//                   {doc.name}
//                 </Typography>
//                 <Typography variant="body2">Size: {doc.size}</Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Uploaded: {new Date(doc.createdAt).toLocaleString()}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Tooltip title="Download">
//                   <IconButton
//                     color="primary"
//                     href={doc.url}
//                     download={doc.name}
//                   >
//                     <Download />
//                   </IconButton>
//                 </Tooltip>
//                 <Tooltip title="View">
//                   <IconButton color="success" onClick={() => handleView(doc)}>
//                     <Visibility />
//                   </IconButton>
//                 </Tooltip>
//                 <Tooltip title="Delete">
//                   <IconButton
//                     color="error"
//                     onClick={() => {
//                       setOpenDeleteConfirm(true);
//                       setDeleteTarget(doc);
//                     }}
//                   >
//                     <Delete />
//                   </IconButton>
//                 </Tooltip>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* View Dialog */}
//       <Dialog open={openViewer} onClose={handleCloseViewer} maxWidth="sm" fullWidth>
//         <DialogTitle>Document Preview</DialogTitle>
//         <DialogContent dividers>
//           {selectedDocument && (
//             <>
//               <Typography><strong>Name:</strong> {selectedDocument.name}</Typography>
//               <Typography><strong>Type:</strong> {selectedDocument.type}</Typography>
//               <Typography><strong>Uploaded:</strong> {selectedDocument.uploadedOn}</Typography>
//               <Box mt={2}>
//                 {selectedDocument.type.includes("pdf") ? (
//                   <iframe
//                     src={selectedDocument.url}
//                     width="100%"
//                     height="400px"
//                     title="PDF Viewer"
//                   />
//                 ) : (
//                   <Typography variant="body2" color="text.secondary">
//                     Preview not available for this file type.
//                   </Typography>
//                 )}
//               </Box>
//             </>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseViewer} color="primary">Close</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Confirm Delete Dialog */}
//       <Dialog
//         open={openDeleteConfirm}
//         onClose={() => setOpenDeleteConfirm(false)}
//       >
//         <DialogTitle>Confirm Delete</DialogTitle>
//         <DialogContent>Are you sure you want to delete this document?</DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenDeleteConfirm(false)}>Cancel</Button>
//           <Button onClick={handleDelete} color="error">Delete</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Snackbar */}
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={3000}
//         onClose={() => setSnackbar({ ...snackbar, open: false })}
//       >
//         <Alert
//           severity={snackbar.type}
//           onClose={() => setSnackbar({ ...snackbar, open: false })}
//         >
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default DocumentSection;
// frontend/src/pages/DocumentSection.jsx
import React, { useEffect, useState } from "react";
import {
  Box, Button, Card, CardContent, Typography, Snackbar, IconButton, Dialog,
  DialogTitle, DialogContent, DialogContentText, DialogActions, Grid
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import axios from "axios";

const DocumentSection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", type: "success" });
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const handleFileChange = (event) => setSelectedFile(event.target.files[0]);

  const handleUpload = async () => {
    if (!selectedFile) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      const res = await axios.post("http://localhost:5000/api/documents", formData);
      setDocuments((prev) => [res.data, ...prev]);
      setSelectedFile(null);
      setSnackbar({ open: true, message: "File uploaded!", type: "success" });
    } catch (err) {
      setSnackbar({ open: true, message: "Upload failed", type: "error" });
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteClick = (doc) => {
    setDeleteTarget(doc);
    setOpenDeleteConfirm(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/documents/${deleteTarget._id}`);
      setDocuments((prevDocs) => prevDocs.filter((d) => d._id !== deleteTarget._id));
      setSnackbar({ open: true, message: "Document deleted.", type: "info" });
    } catch (err) {
      setSnackbar({ open: true, message: "Delete failed", type: "error" });
    } finally {
      setOpenDeleteConfirm(false);
    }
  };

  useEffect(() => {
    const fetchDocuments = async () => {
      const res = await axios.get("http://localhost:5000/api/documents");
      setDocuments(res.data);
    };
    fetchDocuments();
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>Document Management</Typography>

      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 3 }}>
        <input type="file" onChange={handleFileChange} />
        <Button
          variant="contained"
          color="primary"
          startIcon={<UploadFileIcon />}
          onClick={handleUpload}
          disabled={uploading || !selectedFile}
        >
          {uploading ? "Uploading..." : "Upload"}
        </Button>
      </Box>

      <Grid container spacing={2}>
        {documents.map((doc) => (
          <Grid item xs={12} sm={6} md={4} key={doc._id}>
            <Card>
              <CardContent>
                <Typography variant="h6" noWrap>{doc.name}</Typography>
                <Typography variant="body2">Type: {doc.type}</Typography>
                <Typography variant="body2">Size: {doc.size}</Typography>
                <Typography variant="body2">Uploaded: {doc.uploadedOn}</Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  href={doc.url}
                  target="_blank"
                  sx={{ mt: 1, mr: 1 }}
                >
                  View
                </Button>
                <IconButton color="error" onClick={() => handleDeleteClick(doc)}>
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDeleteConfirm} onClose={() => setOpenDeleteConfirm(false)}>
        <DialogTitle>Delete Document</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete "{deleteTarget?.name}"?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteConfirm(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error">Delete</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
      />
    </Box>
  );
};

export default DocumentSection;
