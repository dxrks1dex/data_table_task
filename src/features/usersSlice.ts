import { createSlice } from "@reduxjs/toolkit";
import avatar1 from "@/pictures/avatar1.png";
import avatar2 from "@/pictures/avatar2.png";
import avatar3 from "@/pictures/avatar3.png";
import avatar4 from "@/pictures/avatar4.png";
import avatar5 from "@/pictures/avatar5.png";
import avatar6 from "@/pictures/avatar6.png";

const initialState = {
  users: [
    {
      name: "Darlene Robertson",
      email: "trungkien@gmail.com",
      status: "Free",
      role: "Reporter",
      place: "employee",
      avatar: avatar1,
    },
    {
      name: "Devon Lane",
      email: "tranthynute@gmail.com",
      status: "Busy",
      role: "Bot Analyst",
      place: "employee",
      avatar: avatar2,
    },
    {
      name: "Cody Fisher",
      email: "tienlappsktnd@gmail.com",
      status: "Workin",
      role: "Sales Manager",
      place: "employee",
      avatar: avatar3,
    },
    {
      name: "Theresa Webb",
      email: "thu.langute@gmail.com",
      status: "Free",
      role: "Broadcaster",
      place: "employee",
      avatar: avatar4,
    },
    {
      name: "Savannah Nguyen",
      email: "manhhacht08@gmail.com",
      status: "Workin",
      role: "Marketer",
      place: "employee",
      avatar: avatar5,
    },
    {
      name: "Eleanor Pena",
      email: "vuhaihtongnute@gmail.com",
      status: "On Vacation",
      role: "Analytics Admin",
      place: "employee",
      avatar: avatar6,
    },
  ],

  searchQuery: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.email !== action.payload); // Удаляем по email
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.email === action.payload.email,
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
});

export const { addUser, updateUser, setSearchQuery, removeUser } =
  usersSlice.actions;
