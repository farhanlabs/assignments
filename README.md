🚀 1Fi E-Commerce EMI Suite

A production-ready full-stack e-commerce application developed for the 1Fi SDE1 – Full Stack Developer Technical Assignment.

The platform allows users to browse smartphones, configure product variants, and purchase products using Mutual Fund-backed Zero-Cost EMI plans.

The project has been enhanced with a production-grade Cloud & DevOps infrastructure including containerization, Kubernetes, Infrastructure as Code, CI/CD, GitOps, and monitoring.


---

✨ Application Features

📱 Product Catalog

The application provides a dynamic smartphone catalog backed by MongoDB.

Product information includes:

Product name

Product description

Product images

MRP

Selling price

Available colors

RAM configurations

Storage configurations

Variant-specific pricing


🔗 Dynamic Product Pages

Each product is accessible through a unique, SEO-friendly URL.

Examples:

/products/iphone-17-pro

/products/samsung-s24-ultra

/products/google-pixel-9-pro


Product details are fetched dynamically using the product slug.

💰 Dynamic Pricing

Product pricing is dynamically updated based on the selected product configuration.

Users can select:

Color

RAM

Storage


When the configuration changes, the application automatically updates the applicable variant price.

💳 EMI Plans

The application provides multiple EMI plans with:

Monthly payment amount

Tenure

Interest rate

Cashback information

EMI plan selection


EMI calculations are performed dynamically using the selected variant price rather than storing every possible EMI combination as static database records.

🛒 User Experience

The frontend provides:

Responsive design

Product image gallery

Thumbnail navigation

Color and finish selection

RAM and storage selection

Dynamic pricing

EMI selection cards

Product configuration

Interactive checkout flow



---

🏗️ System Architecture

The application follows a modern full-stack architecture.

Frontend

React

Responsive UI

Dynamic product pages

API-based product communication


Backend

Node.js

Express.js

REST APIs

MongoDB integration


Database

MongoDB

Dynamic product data

Product variants

Pricing information


DevOps & Cloud

AWS

Docker

Kubernetes

Terraform

Jenkins

GitHub Actions

Argo CD

Prometheus

Grafana



---

🔄 Application Flow

1. User opens the application.


2. Products are loaded dynamically from the backend.


3. User selects a product.


4. Product details are fetched using the product slug.


5. User selects color, RAM, and storage.


6. The application determines the applicable variant price.


7. Available EMI plans are displayed.


8. User selects an EMI plan.


9. The configured product is added to the checkout flow.


10. The order is processed through the backend APIs.




---

☁️ Production-Grade DevOps Infrastructure

The assignment has been extended beyond a basic application deployment into a production-oriented cloud and DevOps environment.

The infrastructure includes:

Infrastructure as Code using Terraform

Containerized application using Docker

Kubernetes-based deployment

CI/CD automation

GitOps-based deployment using Argo CD

Automated container image builds

Application monitoring

Infrastructure monitoring

Prometheus metrics collection

Grafana dashboards

Kubernetes health checks

Production-oriented deployment configuration



---

🔧 DevOps & Cloud Stack

Category	Technology

Cloud	AWS
Infrastructure as Code	Terraform
Containerization	Docker
Container Orchestration	Kubernetes
CI/CD	Jenkins / GitHub Actions
GitOps	Argo CD
Monitoring	Prometheus
Visualization	Grafana
Backend	Node.js / Express.js
Frontend	React
Database	MongoDB
Version Control	Git / GitHub



---

🚀 CI/CD Pipeline

The project uses an automated CI/CD workflow for application delivery.

Continuous Integration

The CI pipeline performs:

Source code checkout

Dependency installation

Application build

Validation

Docker image creation

Container image publishing


Continuous Deployment

The deployment workflow follows GitOps principles.

1. Developer pushes code to GitHub.


2. CI pipeline is triggered.


3. Application is built and validated.


4. Docker image is created.


5. Container image is pushed to the registry.


6. Kubernetes deployment configuration is updated.


7. Argo CD detects the Git changes.


8. Argo CD synchronizes the application.


9. Updated workloads are deployed to Kubernetes.




---

🐳 Docker

The application is containerized using Docker to provide a consistent and reproducible runtime environment.

Docker provides:

Consistent runtime environment

Reproducible deployments

Environment isolation

Simplified application packaging

Easy Kubernetes integration

Improved deployment portability



---

☸️ Kubernetes

The application is deployed on Kubernetes for container orchestration.

Kubernetes provides:

Declarative deployments

Service discovery

Application scaling

Self-healing workloads

Rolling updates

Health checks

Resource management

High availability through replicas



---

🔄 GitOps with Argo CD

Argo CD is used to implement GitOps-based continuous deployment.

The Git repository acts as the source of truth for Kubernetes deployment configuration.

When deployment configuration changes are committed to Git, Argo CD detects the changes and synchronizes the Kubernetes environment.

This provides:

Automated deployments

Declarative configuration

Deployment visibility

Version-controlled infrastructure

Easy rollback

Continuous synchronization



---

📊 Monitoring & Observability

The production environment includes monitoring and observability using Prometheus and Grafana.

Prometheus

Prometheus is used to collect and store application and infrastructure metrics.

Grafana

Grafana is used to visualize metrics through monitoring dashboards.

The monitoring setup helps track:

Kubernetes workloads

Pod health

CPU utilization

Memory utilization

Application availability

Infrastructure metrics

Deployment status



---

🔐 Security

The project follows production-oriented security practices.

These include:

Environment-based configuration

Sensitive values excluded from source control

Containerized workloads

Kubernetes resource isolation

Secure application configuration

Infrastructure managed through Terraform

Git-based deployment management


Secrets and credentials should be provided through environment variables or Kubernetes Secrets rather than being hardcoded into application source code.


---

📂 Project Structure

.
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── package.json
│
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── ingress.yaml
│
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
│
├── .github/
│   └── workflows/
│
├── Dockerfile
├── docker-compose.yml
└── README.md


---

⚙️ Local Development

Prerequisites

Install the following tools before running the application:

Node.js

npm

Docker

MongoDB

Git


Clone Repository

git clone <repository-url>
cd <project-directory>

Backend Setup

cd backend
npm install

Configure the required environment variables and start the backend:

npm run dev

Frontend Setup

cd frontend
npm install
npm run dev


---

🐳 Run with Docker

Build and start the complete application using Docker Compose:

docker compose up --build

To run the application in the background:

docker compose up -d --build


---

☸️ Kubernetes Deployment

Apply the Kubernetes manifests:

kubectl apply -f k8s/

Verify the deployment:

kubectl get pods
kubectl get services
kubectl get deployments


---

🌍 AWS Deployment

The application is deployed on AWS using a containerized Kubernetes-based infrastructure.

Infrastructure is provisioned using Terraform, while application deployment is managed through Kubernetes and Argo CD.

The architecture is designed to provide:

Reliable deployments

Scalable workloads

Automated infrastructure provisioning

Continuous delivery

Centralized monitoring

Production-oriented operations



---

📈 Scalability

The architecture is designed to support future scaling requirements.

Potential scaling strategies include:

Kubernetes Horizontal Pod Autoscaling

Multiple application replicas

Load balancing

MongoDB scaling

Independent frontend and backend scaling

Resource requests and limits

Rolling deployments

Automated recovery



---

🧪 Testing & Validation

The application and infrastructure can be validated across:

Frontend functionality

Backend APIs

Database connectivity

Product configuration

Dynamic pricing

EMI calculations

Docker builds

Kubernetes deployments

Application health

Monitoring

CI/CD workflows



---

🎯 Assignment Objectives

The implementation covers:

Full-stack application development

Dynamic product management

Variant-based pricing

EMI calculation

Responsive user experience

REST API development

Database integration

Cloud deployment

Docker containerization

Kubernetes orchestration

Infrastructure as Code

CI/CD automation

GitOps

Monitoring and observability



---

🏆 Production Engineering Approach

Instead of treating the assignment as only a frontend and backend implementation, the project has been designed with a production engineering mindset.

The implementation focuses on:

Automation

Reliability

Scalability

Observability

Reproducibility

Infrastructure as Code

GitOps

Containerization

Continuous Integration

Continuous Deployment


This demonstrates both full-stack development capabilities and practical DevOps engineering skills.


---

👨‍💻 Author

Farhan

DevOps Engineer | Full Stack Development | Cloud & Kubernetes


---

📄 License

This project was developed as part of the 1Fi SDE1 – Full Stack Developer Technical Assignment.
