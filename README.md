# 1Fi SDE1 — E-Commerce EMI Platform

> A full-stack smartphone e-commerce application built for the **1Fi SDE1 Full Stack Developer Assignment**, extended with a production-grade cloud and DevOps infrastructure using Kubernetes, GitOps, monitoring, and observability.

---

## 🚀 Overview

This project implements a dynamic smartphone shopping experience where users can:

- Browse smartphone products
- View detailed product information
- Select color, RAM, and storage variants
- View dynamic pricing and MRP
- Explore multiple EMI plans
- Select an EMI plan
- Proceed through a Digital KYC application flow

The application retrieves product data from **MongoDB through REST APIs** rather than relying on hardcoded product data.

Beyond the core assignment requirements, the application has been deployed with a complete **production-oriented DevOps architecture** using AWS EC2, K3s Kubernetes, ArgoCD GitOps, Prometheus, Alertmanager, and Grafana.

---

## 🔗 Project Links

| Resource | Link |
|---|---|
| **Live Production Application** | https://1fi.duckdns.org |
| **ArgoCD Dashboard** | https://argocd-1fi.duckdns.org |
| **Grafana Dashboard** | https://grafana-1fi.duckdns.org/ |
| **GitHub Repository** | https://github.com/farhanlabs/assignments.git |
| **Demo Video** | https://youtu.be/rOIkaTlwpyo?si=JfIg6OrzHv3Q2Nzc |

---

## 🎯 Assignment Requirements

The original assignment required a dynamic full-stack application with:

- Product details
- Product variants
- MRP and selling price
- Multiple EMI plans
- Monthly payment amount
- EMI tenure
- Interest rate
- Cashback information
- EMI plan selection
- Backend APIs
- Database integration
- At least 3 products
- Multiple variants per product
- Unique product URLs
- Responsive frontend
- Database schema and seed data
- Deployed application
- Demonstration video

All of these requirements have been implemented.

The project was additionally extended with a production-grade DevOps environment.

---

# ✨ Application Features

## Product Catalog

The application provides a dynamic smartphone catalog backed by MongoDB.

Product information includes:

- Product name
- Description
- Product images
- MRP
- Selling price
- Available colors
- RAM configurations
- Storage configurations
- Variant-specific pricing

---

## Dynamic Product Pages

Each product is accessible through a unique, SEO-friendly URL.

Example:

```text
/products/iphone-17-pro
/products/samsung-s24-ultra
/products/google-pixel-9-pro

Product details are fetched dynamically using the product slug.


---

💰 Dynamic Pricing

The application dynamically updates pricing based on the selected product configuration.

Product
   ├── Color
   ├── RAM
   ├── Storage
   └── Variant Price

When the user changes the configuration, the active price is updated accordingly.


---

💳 EMI Plans

The application provides multiple EMI plans with:

Monthly payment amount

Tenure

Interest rate

Cashback information

EMI plan selection


EMI calculations are performed dynamically using the selected variant price.

This avoids storing every possible EMI combination as static database records.


---

🖼️ User Experience

The frontend includes:

Responsive design

Product image gallery

Thumbnail navigation

Color/finish selection

RAM and storage selection

Dynamic pricing

EMI selection cards

Digital KYC modal

Loading states

Success states

Mobile-friendly interface



---

🛠️ Tech Stack

Frontend

Next.js

React

Tailwind CSS

App Router


Backend

Next.js Serverless API Routes

REST APIs


Database

MongoDB

Mongoose


DevOps & Cloud

AWS EC2

Docker

Kubernetes

K3s

ArgoCD

Prometheus

Alertmanager

Grafana

GitHub



---

🏗️ System Architecture

┌──────────────────────┐
                           │       GitHub         │
                           │ Source Code +        │
                           │ Kubernetes Manifests │
                           └──────────┬───────────┘
                                      │
                                      │ GitOps
                                      ▼
                           ┌──────────────────────┐
                           │       ArgoCD         │
                           │ Continuous Delivery  │
                           └──────────┬───────────┘
                                      │
                                      ▼
                    ┌──────────────────────────────────┐
                    │          AWS EC2 Instance        │
                    │                                  │
                    │           K3s Cluster            │
                    │                                  │
                    │  ┌────────────────────────────┐  │
                    │  │     1Fi Application        │  │
                    │  │                            │  │
                    │  │ Next.js + React + Tailwind │  │
                    │  │                            │  │
                    │  │       REST APIs            │  │
                    │  └─────────────┬──────────────┘  │
                    │                │                 │
                    │                ▼                 │
                    │       ┌─────────────────┐        │
                    │       │     MongoDB      │        │
                    │       │ Product Database │        │
                    │       └─────────────────┘        │
                    │                                  │
                    │  ┌────────────────────────────┐  │
                    │  │      Observability         │  │
                    │  │                            │  │
                    │  │ Prometheus                │  │
                    │  │ Alertmanager               │  │
                    │  │ Grafana                    │  │
                    │  └────────────────────────────┘  │
                    └──────────────────────────────────┘


---

☁️ Production DevOps Infrastructure

Instead of limiting the assignment to a basic application deployment, the project was extended with a production-oriented cloud and DevOps setup.

The production environment runs on an AWS EC2 instance with a lightweight K3s Kubernetes cluster.

Infrastructure Components

AWS EC2
   │
   ▼
K3s Kubernetes
   │
   ├── 1Fi Application
   ├── Kubernetes Services
   │
   └── Observability Stack
         ├── Prometheus
         ├── Alertmanager
         └── Grafana


---

🐳 Docker Containerization

The application is packaged as a Docker container and deployed to Kubernetes.

Application Source
       │
       ▼
Docker Image
       │
       ▼
Kubernetes Deployment
       │
       ▼
K3s Cluster
       │
       ▼
Production Application

Containerization provides a consistent application runtime between development and production.


---

☸️ Kubernetes — K3s

The production application runs inside a K3s Kubernetes cluster hosted on AWS EC2.

Kubernetes manages:

Application workloads

Pods

Deployments

Services

Container lifecycle

Workload recovery

Service discovery

Desired-state configuration


K3s provides a lightweight Kubernetes distribution suitable for the project's cloud environment.


---

🔄 GitOps with ArgoCD

ArgoCD is used to manage Kubernetes deployments through GitOps.

The GitHub repository acts as the declarative source of truth for the Kubernetes configuration.

Deployment Flow

Developer
    │
    ▼
Git Commit
    │
    ▼
GitHub
    │
    ▼
ArgoCD
    │
    ▼
Kubernetes Manifests
    │
    ▼
K3s Cluster
    │
    ▼
Production Deployment

This provides a declarative and traceable deployment workflow.

ArgoCD

https://argocd-1fi.duckdns.org


---

📊 Monitoring & Observability

A complete monitoring stack has been configured for infrastructure and application visibility.

Prometheus

Prometheus is used for metrics collection and monitoring.

The monitoring setup provides visibility into:

Node health

CPU utilization

Memory utilization

Kubernetes resources

Pod health

Application/infrastructure metrics



---

🚨 Alertmanager

Alertmanager handles alerts generated by Prometheus.

It provides:

Alert processing

Alert grouping

Alert routing

Alert handling


This allows abnormal system conditions to be surfaced and managed.


---

📈 Grafana

Grafana provides dashboards for visualizing monitoring metrics.

Dashboards provide visibility into:

CPU usage

Memory usage

Node performance

Kubernetes health

Pod/resource metrics

Infrastructure telemetry


Grafana

https://grafana-1fi.duckdns.org/


---

🗄️ Database Schema

MongoDB is used as the application's database with Mongoose as the ODM.

The product schema stores product information, pricing, images, colors, and storage configurations.

const ProductSchema = new Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  tag: {
    type: String,
  },

  mrp: {
    type: Number,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  images: [
    {
      type: String,
      required: true,
    },
  ],

  colors: [
    {
      color: {
        type: String,
        required: true,
      },

      image: {
        type: String,
        required: true,
      },
    },
  ],

  storageOptions: [
    {
      ram: {
        type: String,
        required: true,
      },

      storage: {
        type: String,
        required: true,
      },

      price: {
        type: Number,
        required: true,
      },

      mrp: {
        type: Number,
        required: true,
      },
    },
  ],
});


---

📡 REST API

The application exposes RESTful APIs through Next.js serverless API routes.

Method	Endpoint	Description

GET	/api/products	Fetch all products
GET	/api/products/[slug]	Fetch a specific product
GET	/api/seed	Seed initial product data



---

Example API Response

Request

GET /api/products/google-pixel-9-pro

Response

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


---

🌱 Database Seeding

The project includes a seed API for initializing the database with sample product data.

GET /api/seed

For local development:

http://localhost:3000/api/seed


---

🔐 Environment Configuration

Create a .env.local file:

MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/1fi_assignment?retryWrites=true&w=majority

> Never commit real database credentials or production secrets to the repository.




---

🚀 Local Setup

Prerequisites

Make sure the following are installed:

Node.js

npm

Git

MongoDB/MongoDB Atlas



---

1. Clone the Repository

git clone https://github.com/farhanlabs/assignments.git
cd assignments


---

2. Install Dependencies

npm install


---

3. Configure Environment Variables

Create:

.env.local

Add:

MONGODB_URI=<your-mongodb-connection-string>


---

4. Start the Development Server

npm run dev

Application:

http://localhost:3000


---

5. Seed the Database

Open:

http://localhost:3000/api/seed

After successful seeding, the initial product catalog will be available through the application.


---

🔁 Deployment Workflow

The production deployment follows a GitOps-oriented workflow:

┌──────────────┐
│   Developer  │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│    GitHub    │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│    ArgoCD    │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│     K3s      │
│  Kubernetes  │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Production  │
│ Application  │
└──────────────┘

Monitoring runs alongside the production workload:

Production Workloads
        │
        ▼
   Prometheus
        │
        ├──────────────► Alertmanager
        │
        ▼
     Grafana
        │
        ▼
 Monitoring Dashboards


---

🧠 Architectural Decisions

Next.js

Next.js provides a unified application framework for the frontend and backend API routes while supporting dynamic product routing through the App Router.

MongoDB

MongoDB provides a flexible NoSQL data model suitable for product catalogs with nested color and storage configurations.

Mongoose

Mongoose provides schema definition, validation, and structured interaction with MongoDB.

Dynamic EMI Calculation

EMI calculations are performed dynamically using the selected product variant's price, reducing the need to store every possible EMI combination.

Docker

Docker packages the application into a consistent and portable runtime environment.

Kubernetes

Kubernetes provides workload orchestration, service management, container lifecycle management, and desired-state configuration.

K3s

K3s provides a lightweight Kubernetes distribution suitable for the project's AWS EC2 infrastructure.

ArgoCD

ArgoCD provides GitOps-based continuous deployment and keeps Kubernetes resources synchronized with the desired state defined in Git.

Prometheus

Prometheus provides infrastructure and workload metrics collection.

Alertmanager

Alertmanager provides centralized alert handling and routing for Prometheus alerts.

Grafana

Grafana provides dashboards and visualization for monitoring Kubernetes and infrastructure metrics.


---

🎥 Demo

The project demonstration covers:

Application UI

Product and variant selection

Dynamic pricing

EMI functionality

Backend APIs

Database integration

Production deployment

Kubernetes environment

ArgoCD GitOps

Monitoring with Grafana


Demo Video:

https://youtu.be/rOIkaTlwpyo?si=JfIg6OrzHv3Q2Nzc


---

📋 Assignment Compliance

Requirement	Implementation

Full-stack web application	Next.js + React
Dynamic product data	MongoDB + REST APIs
Product information	Implemented
Product variants	Implemented
MRP and price	Implemented
Multiple EMI plans	Implemented
EMI selection	Implemented
Unique product URLs	Dynamic slug-based routing
Minimum 3 products	Implemented
Multiple variants per product	Implemented
Backend APIs	Next.js API Routes
Database	MongoDB
Database schema	Mongoose
Seed data	/api/seed
Responsive UI	Tailwind CSS
Deployment	AWS EC2 + K3s
Containerization	Docker
GitOps	ArgoCD
Monitoring	Prometheus
Alerting	Alertmanager
Visualization	Grafana
Demonstration	YouTube



---

🔍 Key Engineering Highlights

Full-Stack Development

Next.js
React
Tailwind CSS
REST APIs
MongoDB
Mongoose

Cloud & DevOps

AWS EC2
Docker
Kubernetes
K3s
ArgoCD
Prometheus
Alertmanager
Grafana
GitHub

End-to-End Architecture

User
 │
 ▼
Production Application
 │
 ▼
Next.js
 │
 ▼
REST APIs
 │
 ▼
MongoDB

GitHub
 │
 ▼
ArgoCD
 │
 ▼
K3s
 │
 ▼
Production
 │
 ├── Prometheus
 ├── Alertmanager
 └── Grafana


---

👨‍💻 Author

Md Farhan Rza

Full-Stack Developer | DevOps Engineer


---

⭐ Project Summary

This project was developed for the 1Fi SDE1 Full Stack Developer Assignment and intentionally extended beyond the basic assignment scope.

The final implementation demonstrates practical experience across:

Full-stack application development

REST API development

Database design

Dynamic routing

Dynamic pricing and EMI calculations

Docker containerization

AWS cloud infrastructure

Kubernetes orchestration

GitOps-based deployment

Continuous delivery

Monitoring

Observability

Alerting


Built with a focus on production readiness, reliability, automation, and maintainability.
