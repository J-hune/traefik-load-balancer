# Reverse Proxy Project with Traefik

This project demonstrates the use of Traefik as a reverse proxy to manage two Node.js applications and load balancing. It allows you to expose multiple applications securely with automatic HTTPS certificates.

![Traefik in Action](./img/traefik.gif)

## Prerequisites

Before getting started, make sure you have the following dependencies installed:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started
    
1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/J-hune/traefik-load-balancer.git
   ```

2. Navigate to the project directory:

   ```bash
   cd traefik-load-balancer
   ```

3. Create a `.env` file by making a copy of the provided `.env.example`:

   ```bash
   cp .env.example .env
   ```

4. Modify the `.env` file with your preferred settings:

    - `DOMAIN_NAME`: Set your domain name.
    - `ACME_EMAIL`: Provide your email for Let's Encrypt certificate registration.
    - `LOG_LEVEL`: (Optional) Set the log level (e.g., INFO, DEBUG).

5. Modify the permissions of the `acme.json` file:

   ```bash
   chmod 600 ./letsencrypt/acme.json
   ```
   
6. Start the project using Docker Compose:

   ```bash
   docker compose up -d
   ```

7. The project will now be running, and Traefik will handle routing and load balancing for your applications.

## Accessing the Applications

You can access your applications through the following URLs:

- App 1: [http://app1.DOMAIN_NAME](http://app1.DOMAIN_NAME)
- App 2: [http://app2.DOMAIN_NAME](http://app2.DOMAIN_NAME)

Replace `DOMAIN_NAME` with the domain name you specified in your `.env` file.

## Traefik Dashboard

Traefik provides a dashboard to monitor and manage your routing configuration. You can access it at [http://localhost](http://localhost). Note that it's recommended to secure the Traefik dashboard in a production environment.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Happy reverse proxying!