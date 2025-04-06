 
import React, { useState } from "react";
// Import your CSS module
import styles from "./Account.module.css";

const Account = () => {
  const [account, setAccount] = useState({
    name: "Arise",
    email: "Arise@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Cityville"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...account });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setAccount({ ...formData });
    setIsEditing(false);
    alert("Account details updated successfully!");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Account Details</h1>

      <div className={styles.card}>
        {isEditing ? (
          <>
            <label className={styles.label}>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
            />

            <label className={styles.label}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />

            <label className={styles.label}>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
            />

            <label className={styles.label}>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={styles.input}
            />

            <button onClick={handleSave} className={styles.buttonBlue}>
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className={styles.buttonGray}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <p>
              <strong>Name:</strong> {account.name}
            </p>
            <p>
              <strong>Email:</strong> {account.email}
            </p>
            <p>
              <strong>Phone:</strong> {account.phone}
            </p>
            <p>
              <strong>Address:</strong> {account.address}
            </p>

            <button
              onClick={handleEdit}
              className={`${styles.buttonBlue} ${styles.mt4}`}
            >
              Edit Account
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Account;

