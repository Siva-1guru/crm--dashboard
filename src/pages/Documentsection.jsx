
import React, { useEffect, useState } from "react";
import {
  Box, Button, Card, CardContent, Typography, Snackbar, IconButton, Dialog,
  DialogTitle, DialogContent, DialogContentText, DialogActions, Grid, TextField,
  Avatar
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
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>Document Management</Typography>

      {/* Search */}
      <TextField
        label="Search documents"
        variant="outlined"
        size="small"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          mb: 3,
          maxWidth: 400,
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(5px)",
          borderRadius: 2,
        }}
      />

      {/* Upload */}
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 3 }}>
        <input
          type="file"
          onChange={handleFileChange}
          style={{ maxWidth: 200 }}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<UploadFileIcon />}
          onClick={handleUpload}
          disabled={uploading || !selectedFile}
          size="small"
          sx={{
            background: "linear-gradient(45deg, #6e7f7f, #79b7b7)",
            '&:hover': { background: "#60a0a0" }
          }}
        >
          {uploading ? "Uploading..." : "Upload"}
        </Button>
      </Box>

      {/* Uploaded Documents in Card */}
      <Card sx={{
        mt: 2,
        p: 2,
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: 2,
        '&:hover': {
          transform: "scale(1.02)",
          transition: "transform 0.3s ease-in-out"
        }
      }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Uploaded Documents</Typography>
          <Grid container spacing={2}>
            {filteredDocuments.map((doc) => (
              <Grid item xs={12} sm={6} md={4} key={doc._id}>
                <Card sx={{
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(5px)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                  borderRadius: 2,
                  transition: "transform 0.3s ease-in-out",
                  '&:hover': {
                    transform: "scale(1.05)",
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)"
                  }
                }}>
                  <CardContent>
                    <Typography variant="subtitle1" noWrap>{doc.name}</Typography>
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
                    {/* Avatar with Initials */}
                    <Avatar sx={{
                      width: 24, height: 24, bgcolor: "primary.main", fontSize: 14,
                      position: "absolute", top: 8, right: 8
                    }}>
                      {doc.name.charAt(0).toUpperCase()}
                    </Avatar>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
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

      {/* Snackbar */}
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
