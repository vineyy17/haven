import { create } from 'zustand';

export const useStore = create((set) => ({
  showTransition: true,
  showApp: false,
  showAltTrans: false,
  closeTransition: () =>
    set((state) => ({ showTransition: !state.showTransition })),
  closeAltTransition: () =>
    set((state) => ({ showAltTrans: !state.showAltTrans })),
  toggleApp: () => set((state) => ({ showApp: !state.showApp })),
}));

// export default useStore;
