import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserDataState {
  email: string | undefined;
  password: string | undefined;
  setSignupData: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => void;
  setPassword: (password: string) => void;
}

export const useUserDataStore = create<UserDataState>()(
  persist(
    (set) => ({
      email: undefined,
      password: undefined,

      setSignupData: ({
        email,
        password,
      }: {
        email: string;
        password: string;
      }) => {
        set({ email, password });
      },

      setPassword: (password: string) => {
        set({ password });
      },
    }),
    {
      name: 'user-data-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ email: state.email, password: state.password }),
    },
  ),
);
