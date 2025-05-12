import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface RememberMeState {
  rememberMe: boolean;
  setRememberMe: (value: boolean) => void;
  clearRememberMe: () => void;
}

export const useRememberMeStore = create<RememberMeState>()(
  persist(
    (set, get) => ({
      rememberMe: false,

      setRememberMe: (value: boolean) => {
        set({ rememberMe: value });
        if (!value) {
          get().clearRememberMe();
        }
      },

      clearRememberMe: () => {
        useRememberMeStore.persist.clearStorage();
        set({ rememberMe: false });
      },
    }),
    {
      name: 'remember-me-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ rememberMe: state.rememberMe }),
    },
  ),
);
