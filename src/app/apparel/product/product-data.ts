import mongoose from 'mongoose';

export interface ProductData {
    id: Number;
    name: String;
    price: Number;
    category: {
      type: mongoose.Schema.Types.ObjectId;
      ref: 'Category';
    };
    size: [String],
    color: String,
    imageUrl: String
  }