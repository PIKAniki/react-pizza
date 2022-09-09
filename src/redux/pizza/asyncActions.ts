import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { PizzaItem, SearchPizzaParams } from './types';

export const fetchPizzas = createAsyncThunk<PizzaItem[], SearchPizzaParams>(
  'pizzas/fetchPizzasStatus',
  async (params) => {
    const { sortBy, category, order, currentPage } = params;
    const { data } = await axios.get<PizzaItem[]>(
      `https://63077dcec0d0f2b80131244e.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`,
    );
    return data;
  },
);
