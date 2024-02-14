import create from 'zustand';

const useStore = create((set) => ({
  name: '',
  isLoggedIn: false,
  setUsername: (username) => set({ name: username }),
  setLoggedIn: (loggedIn) => set({ isLoggedIn: loggedIn }),
}));

export default useStore;