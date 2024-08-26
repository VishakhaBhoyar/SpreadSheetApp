import { create } from "zustand";

const useStore = create((set) => ({
    grid: Array.from({ length: 1000 }, () => ''),
    history: [],
    future: [],
    setCell: (index, value) => set((state) => {
      const newGrid = [...state.grid];
      newGrid[index] = value;
      return { 
        grid: newGrid,
        history: [...state.history, state.grid],
        future: [] 
      };
    }),
    redo: () => set((state) => {
        if (state.future.length === 0) return state;
        const nextGrid = state.future[0];
        return {
            grid: nextGrid,
            history: [...state.history, state.grid],
            future: state.future.slice(1),
        };
    }),
}));
  
  export default useStore;