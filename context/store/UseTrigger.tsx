import { create} from "zustand"
interface IStore {
  isOpen: boolean;
  setIsOpen: () => void;
  toggleIsOpen: () => void;
}

export const useTrigger = create<IStore>((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: true })),
  toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
