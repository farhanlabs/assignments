# 🚀 1Fi E-Commerce EMI Suite

A full-stack, production-ready web application built for the **1Fi SDE1 Assignment**. This platform allows users to browse premium smartphones and purchase them using **Mutual Fund-backed Zero-Cost EMI plans**. It features a modern, responsive UI tailored to fintech standards.

---

## 🔗 Quick Links

* **Live Demo (Vercel):** [Insert your Vercel link here]
* **Walkthrough Video:** [Insert your YouTube/Drive link here]

---

## ✨ Key Features & Assignment Compliances

* **Dynamic Routing:** Unique, SEO-friendly URLs for each product (e.g., `/products/iphone-17-pro`).
* **Dynamic Pricing Engine:** Real-time updates to product price and EMI calculations based on the selected RAM/Storage configuration.
* **RESTful APIs:** Fully functional serverless API routes bridging the frontend with the MongoDB database.
* **Interactive UI/UX:** Smooth scroll navigation, image gallery with thumbnails, color finishes mapped to specific HEX codes, and a comprehensive modal-based Digital KYC application form.
* **Minimum Criteria Met:** Pre-configured with 3+ distinct products, each having multiple variants (Colors, RAM, Storage).

---

## 🛠️ Tech Stack

* **Frontend:** Next.js (App Router), React, Tailwind CSS
* **Backend:** Next.js Serverless API Routes (`app/api`)
* **Database:** MongoDB, Mongoose (ODM)
* **Deployment:** Vercel

---

## 🗄️ Database Schema (Mongoose)

The application utilizes a normalized NoSQL schema design.

```typescript
const ProductSchema = new Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  tag: { type: String },
  mrp: { type: Number, required: true },
  price: { type: Number, required: true },
  images: [{ type: String, required: true }],

  // Color Variants
  colors: [{
    color: { type: String, required: true },
    image: { type: String, required: true },
  }],

  // Storage Configurations
  storageOptions: [{
    ram: { type: String, required: true },
    storage: { type: String, required: true },
    price: { type: Number, required: true },
    mrp: { type: Number, required: true },
  }],
});
```

> **Note:** EMI Plans are dynamically calculated on the client side based on the active variant's price to ensure accurate real-time financial data.

---

## 📡 API Endpoints

The app exposes the following serverless endpoints:

| Method | Endpoint               | Description                                                                    |
| ------ | ---------------------- | ------------------------------------------------------------------------------ |
| `GET`  | `/api/products`        | Fetches the catalog of all available products.                                 |
| `GET`  | `/api/products/[slug]` | Fetches detailed data for a specific product using its unique slug.            |
| `GET`  | `/api/seed`            | Drops the existing collection and seeds the database with initial sample data. |

### Example Response (`/api/products/google-pixel-9-pro`)

```json
{
  "success": true,
  "data": {
    "_id": "64f...a12",
    "slug": "google-pixel-9-pro",
    "name": "Google Pixel 9 Pro",
    "price": 99900,
    "storageOptions": [
      {
        "ram": "16GB RAM",
        "storage": "256GB",
        "price": 99900,
        "mrp": 109900
      }
    ]
  }
}
```

---

## 🚀 Local Setup & Installation

Follow these steps to run the project locally on your machine.

### 1. Clone the Repository

```bash
git clone https://github.com/farhanlabs/assignments.git
cd assignments
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory and add your MongoDB connection string:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/1fi_assignment?retryWrites=true&w=majority
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Seed the Database (Crucial Step)

Before interacting with the UI, you **must seed the database** to load the initial products.

Open your browser and visit:

`http://localhost:3000/api/seed`

Wait for the **"Database seeded successfully!"** message.

### 6. Open the Application

Navigate to:

`http://localhost:3000`

---

## 🧠 Architectural Decisions & Highlights

* **Next.js 15 Readiness:** The dynamic routing is built using `React.use(params)` to unwrap asynchronous route parameters, adhering strictly to the latest Next.js architectural changes.

* **Client-Side Computations:** Instead of bloating the database with hundreds of static EMI combinations, the EMI calculation engine runs dynamically on the frontend based on the currently selected storage configuration's price.

* **Hydration & State Management:** Form interactions (like the Application KYC modal) are heavily optimized to prevent unnecessary re-renders while ensuring a smooth feedback loop (Loading → Success).

---

*Designed & Developed by Md Farhan Rza*
