import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActiveItemState {
  activeIndex: number;
}
// Пример структуры состояния

  
export interface RootState {
    activeItem: ActiveItemState; // Все редьюсеры будут добавлены сюда
  }
  

const initialState: ActiveItemState = {
  activeIndex: 0, // Начальный активный элемент
};

const activeItemSlice = createSlice({
  name: "activeItem",
  initialState,
  reducers: {
    setActiveIndex: (state, action: PayloadAction<number>) => {
      state.activeIndex = action.payload;
    },
  },
});
export const slice  = activeItemSlice
export const { setActiveIndex } = activeItemSlice.actions;
export default activeItemSlice.reducer;
