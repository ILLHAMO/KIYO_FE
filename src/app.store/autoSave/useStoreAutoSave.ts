import create from 'zustand';

export const useStoreAutoSave: any = create((set) => ({
  autoSave: true,

  updateAutoSave: (data) => {
    set((state) => ({
      ...state,
      autoSave: data,
    }));
  },
}));

export const useGetAutoSave = () => {
  return useStoreAutoSave((state) => state.autoSave);
};
