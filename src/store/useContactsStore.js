// src/store/useContactsStore.js
import { create } from "zustand";

const useContactsStore = create((set) => ({
  contacts: [],
  addContact: (contact) => set((state) => ({ contacts: [...state.contacts, contact] })),
}));

export default useContactsStore;
