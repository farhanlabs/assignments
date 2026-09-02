import mongoose, { Schema, Document, Model } from "mongoose";

export interface IEMIPlan extends Document {
  variantId: mongoose.Types.ObjectId;
  tenure: number;
  monthlyAmount: number;
  interestRate: number;
  cashback: number;
}

const EMIPlanSchema = new Schema<IEMIPlan>(
  {
    variantId: {
      type: Schema.Types.ObjectId,
      ref: "ProductVariant",
      required: true,
    },

    tenure: {
      type: Number,
      required: true,
    },

    monthlyAmount: {
      type: Number,
      required: true,
    },

    interestRate: {
      type: Number,
      required: true,
    },

    cashback: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const EMIPlan: Model<IEMIPlan> =
  mongoose.models.EMIPlan ||
  mongoose.model<IEMIPlan>("EMIPlan", EMIPlanSchema);

export default EMIPlan;