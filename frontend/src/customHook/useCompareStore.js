import create from "zustand";

const useCompareStore = create((set) => ({
  selectedGadgets: [],
  // addGadget: (gadget) =>
  //   set((state) => ({
  //     selectedGadgets: [...state.selectedGadgets, gadget],
  //   })),
  clearGadgets: () => set({ selectedGadgets: [] }),
  updateGadget: (index, gadget) =>
    set((state) => {
      const newSelectedGadgets = [...state.selectedGadgets];
      newSelectedGadgets[index] = gadget;
      return { selectedGadgets: newSelectedGadgets };
    }),
  removeGadget: (index) =>
    set((state) => {
      const newSelectedGadgets = [...state.selectedGadgets];
      newSelectedGadgets[index] = null;
      return { selectedGadgets: newSelectedGadgets };
    }),
}));

export default useCompareStore;
