# 🌐 React Portfolio - DevOps Powered Deployment

This is my personal portfolio site built using **React** and deployed using a full **CI/CD DevOps pipeline** involving:

- 🐳 Docker (containerization)
- 🛠️ GitHub Actions (build & deploy automation)
- ☁️ AWS EC2 (production server)
- 🔁 Docker Hub (image hosting)
- 🌐 GoDaddy (domain & DNS)
- 🔒 HTTPS with Let's Encrypt & Certbot

---

## 🚀 Live Website

**🔗 https://abhijeet.lol**

---

## 🧱 Tech Stack

| Layer            | Tech                             |
|------------------|----------------------------------|
| Frontend         | React (Vite)                     |
| Containerization | Docker                           |
| CI/CD Pipeline   | GitHub Actions                   |
| Deployment       | AWS EC2 (Ubuntu 24.04)           |
| Reverse Proxy    | Nginx inside Docker              |
| Domain/DNS       | GoDaddy → EC2 IP                 |
| SSL/HTTPS        | Certbot + Let's Encrypt          |

---

## 📦 CI/CD Workflow

### ✅ 1. On Push to `main`:
- GitHub Action builds Docker image using `client/Dockerfile`
- Pushes it to [Docker Hub](https://hub.docker.com/u/abhijeet55)

### ✅ 2. On successful build:
- SSHs into EC2
- Pulls the new image
- Stops & removes the old container
- Deploys the new one using:
  ```bash
  docker run -d --name portfolio-site --restart=always -p 80:80 -p 443:443 ...



