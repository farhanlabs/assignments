import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProductVariant extends Document {
  productId: mongoose.Types.ObjectId;
  color: string;
  storage: string;
  image: string;
  mrp: number;
  price: number;
}

const ProductVariantSchema = new Schema<IProductVariant>(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    color: {
      type: String,
      required: true,
      trim: true,
    },

    storage: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
      trim: true,
    },

    mrp: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductVariant: Model<IProductVariant> =
  mongoose.models.ProductVariant ||
  mongoose.model<IProductVariant>("ProductVariant", ProductVariantSchema);

export default ProductVariant;