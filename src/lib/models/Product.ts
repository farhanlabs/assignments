import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IColorVariant {
  color: string;
  image: string;
}

export interface IStorageVariant {
  ram: string;
  storage: string;
  price: number;
  mrp: number;
}

export interface IProduct extends Document {
  slug: string;
  name: string;
  description?: string;
  tag?: string;
  mrp: number;
  price: number;
  images: string[];
  colors: IColorVariant[];
  storageOptions: IStorageVariant[];
}

const ColorSchema = new Schema<IColorVariant>({
  color: { type: String, required: true },
  image: { type: String, required: true },
});

const StorageSchema = new Schema<IStorageVariant>({
  ram: { type: String, required: true },
  storage: { type: String, required: true },
  price: { type: Number, required: true },
  mrp: { type: Number, required: true },
});

const ProductSchema = new Schema<IProduct>({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  tag: { type: String },
  mrp: { type: Number, required: true },
  price: { type: Number, required: true },
  images: [{ type: String, required: true }],
  colors: [ColorSchema],
  storageOptions: [StorageSchema],
});

// Fix for Next.js hot-reload model caching
if (mongoose.models.Product) {
  delete mongoose.models.Product;
}

export default mongoose.model<IProduct>('Product', ProductSchema);