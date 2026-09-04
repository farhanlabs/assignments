import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Product from "../../../lib/models/Product";

export async function GET() {
  try {
    await dbConnect();
    await Product.deleteMany({});

    const sampleProducts = [
      {
        slug: "apple-iphone-17-pro-silver-256gb",
        name: "iPhone 17 Pro",
        description:
          "Latest Apple iPhone 17 Pro with aluminium unibody design.",
        tag: "NEW",
        mrp: 134900,
        price: 127400,

        images: [
          "/Gray-iphone.png",
        ],

        colors: [
          {
            color: "Silver",
            image: "/Gray-iphone.png",
          },
          {
            color: "Orange",
            image: "/Orange-iphone.png",
          },
          {
            color: "Deep Blue",
            image: "/blue-iphone.png",
          },
        ],

        storageOptions: [
          {
            ram: "8GB RAM",
            storage: "256GB",
            price: 127400,
            mrp: 134900,
          },
          {
            ram: "12GB RAM",
            storage: "512GB",
            price: 139900,
            mrp: 149900,
          },
        ],
      },

      {
        slug: "samsung-galaxy-s24-ultra",
        name: "Samsung Galaxy S24 Ultra",
        description: "Flagship AI-powered smartphone.",
        tag: "BESTSELLER",
        mrp: 144900,
        price: 134900,

        images: [
          "/Samsung-TG.png",
        ],

        colors: [
          {
            color: "Titanium Gray",
            image: "/Samsung-TG.png",
          },
          {
            color: "Titanium Black",
            image: "/Samsung-TB.png",
          },
        ],

        storageOptions: [
          {
            ram: "12GB RAM",
            storage: "256GB",
            price: 134900,
            mrp: 144900,
          },
          {
            ram: "12GB RAM",
            storage: "512GB",
            price: 146900,
            mrp: 159900,
          },
        ],
      },

      {
        slug: "google-pixel-9-pro",
        name: "Google Pixel 9 Pro",
        description: "Advanced computational photography.",
        tag: "POPULAR",
        mrp: 109900,
        price: 99900,

        images: [
          "/Google-porcelain.png",
        ],

        colors: [
          {
            color: "Porcelain",
            image: "/Google-porcelain.png",
          },
          {
            color: "Obsidian",
            image: "/Google-obsidian.png",
          },
        ],

        storageOptions: [
          {
            ram: "16GB RAM",
            storage: "256GB",
            price: 99900,
            mrp: 109900,
          },
        ],
      },
    ];

    await Product.insertMany(sampleProducts);

    return NextResponse.json(
      {
        success: true,
        message: "3 Products seeded!",
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}