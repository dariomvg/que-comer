import type { Food } from "../types/types";
import { foods } from "./foods";

export const getFood = (): Food => {
    const newFood = foods[Math.floor(Math.random() * foods.length)];
    return newFood; 
};