import { create } from "zustand";
import { StepStoreState } from "@/types/types";

export const useStepStore = create<StepStoreState>((set) => ({
  currentStep: 1,
  completedSteps: [],
  collectedData: {
    email: "",
    phone: 0,
    name: "",
    surname: "",
    salary: "",
    href: "",
  },
  isValidEmail: true,
  setStep: (step) => set({ currentStep: step }),
  completeStep: (step) =>
    set((state) => ({ completedSteps: [...state.completedSteps, step] })),
  updateData: (data) =>
    set((state) => ({ collectedData: { ...state.collectedData, ...data } })),
  setValidEmail: (isValidEmail) => set({ isValidEmail }),
}));
