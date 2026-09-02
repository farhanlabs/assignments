import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Product from "../../../lib/models/Product"; // Adjust path if needed

export async function GET() {
  try {
    await dbConnect();
    await Product.deleteMany({});

    const sampleProducts = [
      {
        slug: "apple-iphone-17-pro-silver-256gb",
        name: "iPhone 17 Pro",
        description: "Latest Apple iPhone 17 Pro with aluminium unibody design.",
        tag: "NEW",
        mrp: 134900,
        price: 127400,
        images: [
          "https://images.unsplash.com/photo-1695048065844-42f4c9c1b9b9?w=800",
        ],
        colors: [
          { color: "Silver", image: "https://images.unsplash.com/photo-1695048065844-42f4c9c1b9b9?w=800" },
          { color: "Orange", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800" },
          { color: "Deep Blue", image: "https://images.unsplash.com/photo-1695048132959-1e247413c683?w=800" },
        ],
        storageOptions: [
          { ram: "8GB RAM", storage: "256GB", price: 127400, mrp: 134900 },
          { ram: "12GB RAM", storage: "512GB", price: 139900, mrp: 149900 },
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
          "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800",
        ],
        colors: [
          { color: "Titanium Gray", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800" },
          { color: "Titanium Black", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800" },
        ],
        storageOptions: [
          { ram: "12GB RAM", storage: "256GB", price: 134900, mrp: 144900 },
          { ram: "12GB RAM", storage: "512GB", price: 146900, mrp: 159900 },
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
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",
        ],
        colors: [
          { color: "Porcelain", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800" },
          { color: "Obsidian", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800" },
        ],
        storageOptions: [
          { ram: "16GB RAM", storage: "256GB", price: 99900, mrp: 109900 },
        ],
      }
    ];

    await Product.insertMany(sampleProducts);
    return NextResponse.json({ success: true, message: "3 Products seeded!" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}