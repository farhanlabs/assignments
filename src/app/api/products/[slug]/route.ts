import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Product from "../../../../lib/models/Product"; // Dhyan dein, path verify kar lein

// Naye Next.js mein params ek Promise hota hai
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await dbConnect();
    
    // Await lagana zaruri hai params ko unwrap karne ke liye
    const { slug } = await params;
    
    const product = await Product.findOne({ slug: slug });
    
    if (!product) {
      return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, data: product }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}