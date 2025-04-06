// src/features/tasks/useTasksStore.js
import { create } from "zustand";

const useTasksStore = create((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
}));

export default useTasksStore;
