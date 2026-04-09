# Nginx Geteway

A simple Node.js + NGINX project to demonstrate load balancing.

## Overview

This repository shows how NGINX can sit in front of Node.js instances and distribute requests across services. It is a practical reference for understanding reverse proxy and load-balancing basics.

## Features

- Node.js application server
- NGINX configuration for request routing
- Docker-based setup with `docker-compose.yml`
- Easy local demonstration of traffic distribution

## Tech Stack

- JavaScript (Node.js)
- NGINX
- Docker / Docker Compose

## Project Structure

- `index.js`: Node app entry point
- `nginx/`: NGINX configuration files
- `docker-compose.yml`: multi-service orchestration
- `Dockerfile`: image definition
- `package.json`: dependencies/scripts

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/mateushenriquedasilva/nginx-geteway.git
cd nginx-geteway
```

2. Start services:

```bash
docker compose up --build
```

3. Open the exposed endpoint in your browser or via curl.

## Learning Focus

- Reverse proxy fundamentals
- Request distribution patterns
- Containerized local infrastructure

## Next Steps

- Add health checks for upstream services
- Add observability (logs/metrics)
- Add HTTPS termination with certificates
- Add scaling examples with more instances

## License

This project is available under the repository license terms.
