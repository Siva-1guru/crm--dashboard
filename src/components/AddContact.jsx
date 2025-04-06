// src/components/AddContact.jsx
import useContactsStore from "../store/useContactsStore";
import { useState } from "react";

const AddContact = () => {
  const { addContact } = useContactsStore();
  const [name, setName] = useState("");

  const handleAdd = () => {
    addContact({ id: Date.now(), name });
    setName("");
  };

  return (
    <div>
      <input type="text" placeholder="Contact Name" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAdd}>Add Contact</button>
    </div>
  );
};
// src/pages/Contacts.jsx
// export default function Contacts() {
//   return (
//     <div>
//       <h1>Contacts Page</h1>
//       <p>Manage your contacts here.</p>
//     </div>
//   );
// }


export default AddContact;
