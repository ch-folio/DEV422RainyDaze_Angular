import { Schema, Document } from 'mongoose';

// Category interface
export interface Category {
  name: string;
}

// Product interface
export interface Product extends Document {
  id: number;
  name: string;
  price: number;
  category: Category;
  size: string[];
  color: string;
  imageUrl: string;
}