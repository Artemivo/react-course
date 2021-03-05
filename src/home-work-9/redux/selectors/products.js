import { createSelector } from '@reduxjs/toolkit';

export const getProducts = createSelector(
  state => state.products.list,
  list => list
);