# 🚀 1Fi E-Commerce EMI Suite

A production-ready full-stack e-commerce application built as part of the **1Fi SDE1 Full Stack Developer Assignment**.

The application allows users to explore premium smartphones, select different product configurations, and view EMI options backed by mutual funds. Along with implementing the required full-stack functionality, the project has been extended with a **production-grade DevOps infrastructure** featuring Kubernetes orchestration, GitOps-based deployment, monitoring, observability, and automated application delivery.

---

## 🌐 Project Overview

The application demonstrates a complete full-stack workflow:

**Frontend → Backend API → MongoDB → Kubernetes → GitOps → Monitoring & Observability**

The project was initially built to satisfy the core SDE1 assignment requirements and was then extended into a production-oriented cloud and DevOps environment.

### Core Application Capabilities

- Dynamic product catalog
- Dynamic product pages
- Multiple product variants
- Storage/RAM configurations
- Product pricing and MRP
- Dynamic EMI calculations
- Product image galleries
- Color/finish selection
- Digital KYC application flow
- RESTful APIs
- MongoDB database integration
- Responsive fintech-oriented UI

### DevOps Capabilities

- AWS EC2 infrastructure
- K3s Kubernetes cluster
- Docker containerization
- ArgoCD GitOps
- Continuous deployment
- Prometheus monitoring
- Alertmanager alerting
- Grafana dashboards
- Application and infrastructure observability
- Production HTTPS endpoints

---

# 🔗 Live Project Links

### 🛍️ Live Production Application

https://1fi.duckdns.org

### 🔄 ArgoCD GitOps Dashboard

https://argocd-1fi.duckdns.org

### 📊 Grafana Monitoring

https://grafana-1fi.duckdns.org/

### 💻 GitHub Repository

https://github.com/farhanlabs/assignments.git

### 🎥 Project Demonstration Video

https://youtu.be/rOIkaTlwpyo?si=JfIg6OrzHv3Q2Nzc

---

# 🏗️ Architecture

```text
                         ┌─────────────────────────┐
                         │        GitHub           │
                         │ Application Source Code │
                         │  Kubernetes Manifests   │
                         └────────────┬────────────┘
                                      │
                                      │ GitOps
                                      ▼
                         ┌─────────────────────────┐
                         │        ArgoCD            │
                         │ Continuous Deployment    │
                         │ Git → Kubernetes         │
                         └────────────┬────────────┘
                                      │
                                      ▼
                  ┌─────────────────────────────────────┐
                  │            AWS EC2 Instance          │
                  │                                     │
                  │              K3s Cluster             │
                  │                                     │
                  │   ┌─────────────────────────────┐   │
                  │   │     1Fi Application         │   │
                  │   │                             │   │
                  │   │ Next.js + React + Tailwind   │   │
                  │   │                             │   │
                  │   │      REST API Routes        │   │
                  │   └──────────────┬──────────────┘   │
                  │                  │                  │
                  │                  ▼                  │
                  │        ┌──────────────────┐         │
                  │        │     MongoDB       │         │
                  │        │ Product Database  │         │
                  │        └──────────────────┘         │
                  │                                     │
                  │   ┌─────────────────────────────┐   │
                  │   │       Observability         │   │
                  │   │                             │   │
                  │   │ Prometheus → Metrics        │   │
                  │   │ Alertmanager → Alerts       │   │
                  │   │ Grafana → Visualization     │   │
                  │   └─────────────────────────────┘   │
                  └─────────────────────────────────────┘


---

✨ Assignment Requirements

The implementation satisfies the core requirements specified in the 1Fi SDE1 assignment.

Product Experience

Each product page provides:

Product name

Product image

Variant information

Storage/RAM options

MRP

Selling price

Multiple EMI plans

Monthly payment amount

EMI tenure

Interest rate

Cashback information

EMI plan selection

Proceed/Application flow


The assignment requires at least 3 products with 2 or more variants for each product, which is supported by the implementation.


---

🧩 Application Features

Dynamic Product Routing

Every product has a unique SEO-friendly URL.

Example:

/products/iphone-17-pro
/products/samsung-s24-ultra
/products/google-pixel-9-pro

Product data is dynamically fetched based on the product slug.


---

💰 Dynamic Pricing Engine

Product pricing changes dynamically based on the selected configuration.

Product
 ├── RAM
 ├── Storage
 ├── Color
 └── Variant Price

The selected variant determines the active product price and corresponding EMI calculation.

This avoids maintaining a large number of static EMI combinations in the database.


---

💳 EMI Calculation

EMI values are calculated dynamically using the active product variant price.

The application supports different:

Tenures

Interest rates

Monthly payment amounts

Cashback information


This provides a realistic EMI-selection experience similar to modern fintech/e-commerce platforms.


---

🖼️ Interactive Product UI

The application includes:

Responsive design

Product image gallery

Image thumbnails

Color/finish selectors

Variant selection

Smooth navigation

EMI selection cards

Modal-based Digital KYC form

Loading states

Success states

Mobile-friendly interface



---

🛠️ Technology Stack

Frontend

Next.js

React

Tailwind CSS

Next.js App Router


Backend

Next.js Serverless API Routes

RESTful APIs


Database

MongoDB

Mongoose


Containerization

Docker


Cloud Infrastructure

AWS EC2


Container Orchestration

K3s Kubernetes


GitOps / Continuous Deployment

ArgoCD


Monitoring & Observability

Prometheus

Alertmanager

Grafana


Source Control

GitHub



---

☁️ Production DevOps Infrastructure

Instead of deploying the assignment as a basic application deployment, the project was extended into a production-oriented DevOps environment.

The complete infrastructure runs on an AWS EC2 instance using a lightweight K3s Kubernetes cluster.

Infrastructure Flow

Developer
   │
   ▼
GitHub
   │
   ▼
ArgoCD
   │
   ▼
K3s Kubernetes Cluster
   │
   ├── Application
   │
   ├── Services
   │
   └── Monitoring Stack
        │
        ├── Prometheus
        ├── Alertmanager
        └── Grafana


---

🔄 GitOps with ArgoCD

ArgoCD is used to implement a GitOps-based continuous deployment workflow.

GitHub acts as the source of truth for the Kubernetes deployment configuration.

Deployment Flow

Code Change
    │
    ▼
GitHub Repository
    │
    ▼
ArgoCD Detects Changes
    │
    ▼
Kubernetes Manifests Applied
    │
    ▼
K3s Cluster Updated
    │
    ▼
Application Deployment

This allows application deployments to be managed declaratively through Git.

ArgoCD Dashboard

https://argocd-1fi.duckdns.org


---

☸️ Kubernetes with K3s

The application is containerized and deployed on a lightweight K3s Kubernetes cluster running on AWS EC2.

Kubernetes is responsible for:

Application workload management

Pod scheduling

Service discovery

Container lifecycle management

Deployment management

Restarting failed workloads

Declarative infrastructure configuration


K3s provides a lightweight Kubernetes distribution suitable for running the complete environment on a single cloud instance.


---

🐳 Containerization

The application is packaged as a Docker container to provide a consistent runtime environment across development and production.

Source Code
     │
     ▼
Docker Build
     │
     ▼
Container Image
     │
     ▼
Kubernetes Deployment
     │
     ▼
Running Application


---

📊 Monitoring & Observability

A complete monitoring stack has been implemented to monitor both application and infrastructure health.

Prometheus

Prometheus is used for collecting and storing metrics from the Kubernetes environment and application infrastructure.

Monitored areas include:

Cluster health

Node metrics

Resource utilization

Application metrics

Pod health

Infrastructure performance



---

🚨 Alertmanager

Alertmanager is integrated with Prometheus to handle and route alerts generated from monitoring rules.

It provides a mechanism for:

Alert detection

Alert routing

Alert grouping

Alert handling


This helps identify abnormal system conditions and infrastructure issues.


---

📈 Grafana

Grafana is used to visualize collected metrics through monitoring dashboards.

Dashboards provide visibility into:

CPU utilization

Memory utilization

Node performance

Kubernetes health

Pod/resource metrics

Application telemetry


Grafana Dashboard

https://grafana-1fi.duckdns.org/


---

🗄️ Database Schema

The application uses MongoDB with Mongoose as the ODM.

The product schema stores product information, pricing, images, colors, and storage configurations.

const ProductSchema = new Schema({
  slug: {
    type: String,
    required: true,
    unique: true
  },

  name: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  tag: {
    type: String
  },

  mrp: {
    type: Number,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  images: [
    {
      type: String,
      required: true
    }
  ],

  colors: [
    {
      color: {
        type: String,
        required: true
      },

      image: {
        type: String,
        required: true
      }
    }
  ],

  storageOptions: [
    {
      ram: {
        type: String,
        required: true
      },

      storage: {
        type: String,
        required: true
      },

      price: {
        type: Number,
        required: true
      },

      mrp: {
        type: Number,
        required: true
      }
    }
  ]
});


---

📡 REST API Endpoints

The application exposes serverless REST APIs through Next.js.

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

🔐 Environment Variables

Create a .env.local file for local development.

MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/1fi_assignment?retryWrites=true&w=majority

Production secrets are kept outside the source code and are provided to the application through environment configuration.


---

🚀 Local Development

1. Clone Repository

git clone https://github.com/farhanlabs/assignments.git

cd assignments

2. Install Dependencies

npm install

3. Configure Environment Variables

Create:

.env.local

Add:

MONGODB_URI=<your-mongodb-connection-string>

4. Start Development Server

npm run dev

The application will be available at:

http://localhost:3000


---

🌱 Database Seeding

Before using the application locally, seed the database.

Open:

http://localhost:3000/api/seed

The endpoint initializes the sample product data in MongoDB.


---

📦 Production Deployment

The production environment uses:

AWS EC2
   │
   ▼
K3s Kubernetes
   │
   ├── Application Deployment
   │
   ├── Services
   │
   └── Monitoring Stack

Deployment configuration is managed declaratively through Git and synchronized to the Kubernetes cluster using ArgoCD.


---

🔁 CI/CD & GitOps Workflow

Developer
    │
    ▼
Git Commit
    │
    ▼
GitHub
    │
    ▼
Container Build
    │
    ▼
Updated Deployment Configuration
    │
    ▼
ArgoCD
    │
    ▼
K3s Kubernetes
    │
    ▼
Production Application

GitOps provides a declarative and traceable deployment workflow where the repository represents the desired state of the Kubernetes environment.


---

📊 Production Observability Flow

Kubernetes / Application
          │
          ▼
      Prometheus
          │
          ├──────────────► Alertmanager
          │                     │
          │                     ▼
          │                Alert Handling
          │
          ▼
       Grafana
          │
          ▼
   Monitoring Dashboards

This provides visibility into the health and performance of the production environment.


---

🧠 Architectural Decisions

Why Next.js?

Next.js provides a unified frontend and backend environment, allowing the project to implement both the user interface and RESTful serverless APIs within a single application.

Why MongoDB?

MongoDB provides a flexible NoSQL model suitable for product catalogs containing nested structures such as colors, storage options, and variants.

Why Dynamic EMI Calculation?

EMI calculations are performed dynamically using the active product variant price rather than storing every possible EMI combination in the database.

This keeps the data model simpler while allowing the UI to immediately reflect configuration changes.

Why Kubernetes?

Kubernetes provides a production-oriented orchestration layer for managing application workloads, services, deployments, and container lifecycle.

Why K3s?

K3s provides a lightweight Kubernetes distribution that is well suited for running a complete Kubernetes environment on a cloud VM while maintaining standard Kubernetes concepts and workflows.

Why ArgoCD?

ArgoCD introduces GitOps-based continuous delivery, making Git the declarative source of truth for Kubernetes deployments.

Why Prometheus + Grafana?

Prometheus provides metric collection and storage, while Grafana provides visualization and operational dashboards.

Why Alertmanager?

Alertmanager provides centralized handling and routing of Prometheus alerts for abnormal system conditions.


---

🎯 Assignment Compliance

Requirement	Implementation

Full-stack web application	Next.js + React
Dynamic product data	MongoDB + REST APIs
Product details	Implemented
Product variants	Implemented
Multiple EMI plans	Implemented
EMI selection	Implemented
Unique product URLs	Dynamic slug-based routing
Minimum 3 products	Implemented
Multiple variants	Implemented
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
Demo video	YouTube



---

🔍 Project Highlights

This project goes beyond a basic assignment implementation by combining full-stack development with production-oriented DevOps practices.

Full-Stack

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

Production Workflow

Code
 ↓
GitHub
 ↓
GitOps
 ↓
ArgoCD
 ↓
K3s
 ↓
Production
 ↓
Prometheus
 ↓
Grafana


---

🎥 Demonstration

The demonstration video showcases the application along with the backend/API and production infrastructure.

Video:
https://youtu.be/rOIkaTlwpyo?si=JfIg6OrzHv3Q2Nzc


---

👨‍💻 Author

Md Farhan Rza

Full-Stack Developer | DevOps Engineer


---

⭐ Final Note

This project was developed for the 1Fi SDE1 Full Stack Developer Assignment with a focus on building not only the requested full-stack functionality but also a reliable, observable, and production-oriented deployment environment.

The implementation demonstrates practical experience across:

Full-stack development

REST API design

Database modeling

Containerization

Cloud infrastructure

Kubernetes

GitOps

Continuous deployment

Monitoring

Observability

Alerting
