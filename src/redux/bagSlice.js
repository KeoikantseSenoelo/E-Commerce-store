import { createSlice } from "@reduxjs/toolkit";

// Function to load the initial state from localStorage
const loadBagFromLocalStorage = () => {
  const savedBag = JSON.parse(localStorage.getItem("bagItems"));
  return savedBag ? savedBag : { items: [], totalPrice: 0 };  // Default if no saved items
};

const initialState = loadBagFromLocalStorage();

export const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    // Adds an item to the bag or increases its quantity if it already exists
    addToBag: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      // Recalculate total price
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      // Save state to localStorage
      localStorage.setItem("bagItems", JSON.stringify(state));
    },

    // Removes an item from the bag and updates the total price
    removeFromBag: (state, action) => {
      const updatedItems = state.items.filter((item) => item.id !== action.payload);
      state.items = updatedItems;

      // Recalculate total price
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      // Save state to localStorage
      localStorage.setItem("bagItems", JSON.stringify(state));
    },

    // Increases the quantity of an item by 1 and updates the total price
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        // Recalculate the total price
        state.totalPrice += item.price;
        // Save state to localStorage
        localStorage.setItem("bagItems", JSON.stringify(state));
      }
    },

    // Decreases the quantity of an item by 1 and removes it if the quantity reaches 0
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
        // Recalculate the total price
        state.totalPrice -= item.price;
        // Save state to localStorage
        localStorage.setItem("bagItems", JSON.stringify(state));
      }
      // Remove the item if the quantity becomes 0
      if (item && item.quantity === 0) {
        state.items = state.items.filter((item) => item.id !== action.payload);
        // Recalculate the total price after removal
        state.totalPrice = state.items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
        // Save state to localStorage
        localStorage.setItem("bagItems", JSON.stringify(state));
      }
    },

    // Resets the bag by clearing items and setting total price to 0
    resetBag: (state) => {
      state.items = [];
      state.totalPrice = 0;
      // Save state to localStorage
      localStorage.setItem("bagItems", JSON.stringify(state));
    },
  },
});

// Selectors
export const selectItems = (state) => state.bag.items;
export const selectTotalPrice = (state) => state.bag.totalPrice; // Selector for total price

// Actions
export const {
  addToBag,
  removeFromBag,
  incrementQuantity,
  decrementQuantity,
  resetBag,
} = bagSlice.actions;

export default bagSlice.reducer;
