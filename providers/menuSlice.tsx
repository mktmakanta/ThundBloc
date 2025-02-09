import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
  isOpen: boolean;
  activeCategory: string | null;
}

const initialState: MenuState = {
  isOpen: false,
  activeCategory: null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isOpen = true;
    },
    closeMenu: (state) => {
      state.isOpen = false;
      state.activeCategory = null; // Reset active category when closing
    },
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { openMenu, closeMenu, toggleMenu, setActiveCategory } =
  menuSlice.actions;
export default menuSlice.reducer;
