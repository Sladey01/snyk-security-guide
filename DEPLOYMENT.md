# Deployment Guide

This document provides instructions for deploying the Snyk Security Guide application using different methods.

## Option 1: Deploy with Docker

### Prerequisites
- Docker installed on your system

### Steps

1. Build the Docker image:
   ```
   docker build -t snyk-security-guide .
   ```

2. Run the container:
   ```
   docker run -p 3000:3000 snyk-security-guide
   ```

3. Access the application at `http://localhost:3000`

## Option 2: Deploy on a Node.js Server

### Prerequisites
- Node.js (v14+) installed on your server

### Steps

1. Clone the repository:
   ```
   git clone https://github.com/YOUR_USERNAME/snyk-security-guide.git
   cd snyk-security-guide
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the application:
   ```
   npm start
   ```
   
   For production, consider using a process manager like PM2:
   ```
   npm install -g pm2
   pm2 start index.js --name "snyk-guide"
   ```

4. Access the application at `http://YOUR_SERVER_IP:3000`

## Option 3: Deploy to Cloud Platforms

### Heroku

1. Create a Procfile in the root directory:
   ```
   web: npm start
   ```

2. Deploy to Heroku:
   ```
   heroku create
   git push heroku main
   ```

### AWS Elastic Beanstalk

1. Install the EB CLI:
   ```
   pip install awsebcli
   ```

2. Initialize and deploy:
   ```
   eb init
   eb create snyk-guide-env
   eb deploy
   ```

## Environment Variables

The application supports the following environment variables:

- `PORT`: The port on which to run the server (default: 3000)

Example setting the port:
```
PORT=8080 npm start
```

## Running with HTTPS

For production deployments, it's recommended to use HTTPS. You can set up a reverse proxy like Nginx or use a service like Cloudflare to handle SSL termination.

### Example Nginx Configuration

```nginx
server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name your-domain.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
