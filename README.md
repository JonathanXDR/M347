# M347-Portfolio

Welcome to M347-Portfolio, a ToDo application built using Docker and Kubernetes. This README provides documentation on how to set up, manage, and debug the application. The application consists of a frontend, backend, and a MariaDB database.

## Table of Contents

- [M347-Portfolio](#m347-portfolio)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Using Docker](#using-docker)
    - [Build Images](#build-images)
    - [Run Containers](#run-containers)
    - [Manage Containers using Docker Compose](#manage-containers-using-docker-compose)
    - [Debugging Docker](#debugging-docker)
  - [Using Kubernetes](#using-kubernetes)
    - [Manage Kubernetes Resources](#manage-kubernetes-resources)
    - [Debugging Kubernetes](#debugging-kubernetes)
  - [Additional Information](#additional-information)
    - [Environment Variables](#environment-variables)
    - [GitHub Actions](#github-actions)

## Prerequisites

Before you begin, ensure you have the following tools & services installed on your local machine:

- [Docker](https://docs.docker.com/get-docker/) - Used for running and building the application.
- [Kubernetes (Kubectl)](https://kubernetes.io/docs/tasks/tools/) - Used for managing the application in a Kubernetes cluster (Local or Cloud).
- [Minikube](https://minikube.sigs.k8s.io/docs/start/) - Used for running a local Kubernetes cluster.

## Getting Started

## Using Docker

### Build Images

Normally, the Docker images for the frontend and backend are built using [GitHub Actions](#github-actions), when pushing a commit to the `main` branch. However, you can also build the Docker images locally using the following commands:

```bash
docker build -t <frontend or backend> ./<Frontend or Backend>
```

### Run Containers

To run the application using Docker, you can use the following commands. This will pull the latest Images from the GitHub Container Registry if the images are not already present on your local machine. Then it will run the containers in the background and expose the frontend on port 8080 and the backend on port 3000.

```bash
docker run -d -p 8080:8080 --name frontend ghcr.io/jonathanxdr/todo-frontend:latest
docker run -d -p 3000:3000 --name backend ghcr.io/jonathanxdr/todo-backend:latest
```

### Manage Containers using Docker Compose

For running the application locally quickly, you can use Docker Compose. This will create & run the Docker containers for the frontend, backend, and MariaDB database. To start the application, run the following command:

```bash
docker-compose up -d
```

To stop the application, run the following command:

```bash
docker-compose down
```

### Debugging Docker

Here are some useful docker commands for debugging:

```bash
# 1. List all running containers, including their IDs, names, and statuses.
docker ps

# 2. Show the logs of a specific container, which can help you find error messages or trace the application's execution.
docker logs <container-id/name>

# 3. Execute a command inside a running container, such as running a shell (`/bin/bash` or `/bin/sh`) to investigate the container's file system and processes.
docker exec -it <container-id/name> <command>

# 4. Provide detailed information about a container, including its configuration, network settings, and mounted volumes.
docker inspect <container-id/name>

# 5. Display real-time performance statistics for all running containers, including CPU usage, memory consumption, and network I/O.
docker stats

# 6. Show the running processes inside a container, similar to the `top` command on Linux.
docker top <container-id/name>

# 7. List the file system changes made in a container compared to the base image.
docker diff <container-id/name>

# 8. Copy files or directories between a container and the local file system, which can be helpful for examining application data or configuration files.
docker cp <container-id/name>:<path/to/source> <path/to/destination>

# 9. If you are using Docker Compose, show the logs for all services defined in the `docker-compose.yml` file.
docker-compose logs

#10. Tear down the current services and rebuild the containers from scratch if you've made changes to your application's code or dependencies.
docker-compose down && docker-compose up --build
```

## Using Kubernetes

For running the application locally, you can use Minikube. This will create the Kubernetes cluster. To start Minikube, run the following command:

```bash
minikube start
```

To stop Minikube again, run:

```bash
minikube stop
```

### Manage Kubernetes Resources

After the Kubernetes cluster was created, you can apply the Kubernetes resources for the application using the following commands. Make sure to run them in the given order:

```bash
kubectl apply -f k8s/mariadb-config.yaml
kubectl apply -f k8s/mariadb-secret.yaml
kubectl apply -f k8s/mariadb.yaml
kubectl apply -f k8s/backend.yaml
kubectl apply -f k8s/frontend.yaml
kubectl apply -f k8s/ingress.yaml
```

For updating individual resources, you can simply run the `kubectl apply` command as above again. To delete the Kubernetes resources, use the `delete` keyword instead of `apply`:

### Debugging Kubernetes

Here are some useful kubectl commands for debugging:

```bash
# 1. Get information about all resources in the cluster (e.g., pods, services, deployments)
kubectl get <resource-type>

# 2. Describe a specific resource in detail
kubectl describe <resource-type> <resource-name>

# 3. Get logs from a specific pod
kubectl logs <pod-name>

# 4. Stream logs from a specific pod in real-time
kubectl logs -f <pod-name>

# 5. Get the current state of a Kubernetes configuration
kubectl config view

# 6. Switch between different Kubernetes contexts
kubectl config use-context <context-name>

# 7. Execute a command within a specific pod
kubectl exec -it <pod-name> -- <command>

# 8. Get the current status of a specific deployment
kubectl rollout status deployment/<deployment-name>

# 9. Display the history of a specific deployment
kubectl rollout history deployment/<deployment-name>

# 10. Get resource usage information for each pod in the namespace
kubectl top pod

# 11. Get resource usage information for each node in the cluster
kubectl top node

# 12. Debug issues with ingress by displaying ingress resources
kubectl get ingress

```

## Additional Information

### Environment Variables

The application uses the following environment variables:

- `DB_HOST` - The hostname of the MariaDB database server.
- `DB_PORT` - The port number to use for the connection to the MariaDB database server.
- `DB_USER` - The username to use for connecting to the MariaDB database.
- `DB_PASSWORD` - The password to use for connecting to the MariaDB database.
- `DB_NAME` - The name of the MariaDB database to use.

These environment variables can be set in the respective Docker and Kubernetes configuration files.

### GitHub Actions

`publish.yml`, is responsible for building and publishing Docker images for the frontend and backend components of the application. The action is triggered on each push to the repository.

The `publish.yml` file is composed of two jobs: `publish-frontend-image` and `publish-backend-image`. Both jobs have similar steps:

1. Check out the repository using the `actions/checkout@v2` action.
2. Log in to the GitHub Container Registry using the `docker/login-action@v1` action, with the `GHCR_PAT` secret for authentication.
3. Build the Docker image for either the frontend or backend, tagging it with the appropriate path in the GitHub Container Registry (e.g., `ghcr.io/jonathanxdr/todo-frontend:latest` or `ghcr.io/jonathanxdr/todo-backend:latest`).
4. Push the built image to the GitHub Container Registry.

This GitHub Action allows for automated building and publishing of the Docker images, ensuring that the latest versions are always available in the GitHub Container Registry.
