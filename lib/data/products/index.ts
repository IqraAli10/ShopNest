import { clothingProducts } from './clothing';
import { shoesProducts } from './shoes';
import { accessoriesProducts } from './accessories';
import { jewelryProducts } from './jewelry';
import { beautyProducts } from './beauty';

export const allProducts = [
  ...clothingProducts,
  ...shoesProducts,
  ...accessoriesProducts,
  ...jewelryProducts,
  ...beautyProducts,
];