// features/sortSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    key: null, // Поле для сортировки
    direction: 'ascending', // Направление сортировки
};

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSortKey: (state, action) => {
            const { key } = action.payload;
            // Меняем направление сортировки, если выбрано одно и то же поле
            if (state.key === key) {
                state.direction = state.direction === 'ascending' ? 'descending' : 'ascending';
            } else {
                state.key = key;
                state.direction = 'ascending'; // Сбрасываем направление на восходящее при смене поля
            }
        },
    },
});

export const { setSortKey } = sortSlice.actions;

