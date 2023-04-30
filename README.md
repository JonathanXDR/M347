# M347-Portfolio

Welcome to M347-Portfolio, a ToDo application built using Docker and Kubernetes. This README provides documentation on how to set up, manage, and debug the application. The application consists of a frontend, backend, and a MariaDB database.

## Table of Contents

- [M347-Portfolio](#m347-portfolio)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Using Docker](#using-docker)
    - [Build Docker Images](#build-docker-images)
    - [Run with Docker Compose](#run-with-docker-compose)
    - [Debugging Docker](#debugging-docker)
  - [Using Kubernetes](#using-kubernetes)
    - [Create Kubernetes Resources](#create-kubernetes-resources)
    - [Accessing the Application](#accessing-the-application)
    - [Delete Kubernetes Resources](#delete-kubernetes-resources)
    - [Debugging Kubernetes](#debugging-kubernetes)
  - [Additional Information](#additional-information)
    - [Environment Variables](#environment-variables)
    - [GitHub Actions](#github-actions)

## Prerequisites

Before you begin, ensure you have the following tools & services installed on your local machine:

- [Docker](https://docs.docker.com/get-docker/)
- [Kubernetes (Kubectl)](https://kubernetes.io/docs/tasks/tools/)
- [Minikube](https://minikube.sigs.k8s.io/docs/start/)

## Getting Started

## Using Docker

### Build Docker Images

Build the Docker image only for the frontend using the following command:

```bash
docker build -t frontend ./Frontend
```

Build the Docker image only for the backend using the following command:

```bash
docker build -t backend ./Backend
```

### Run with Docker Compose

```bash
docker-compose up -d
```

To stop the application, run the following command:

```bash
docker-compose down
```

### Debugging Docker

To debug the application using Docker, you can use the following commands:

- `docker ps` - List all running containers.
- `docker logs <container-id>` - View the logs of a container.
- `docker exec -it <container-id> /bin/bash` - Open a shell in a container.
- `docker inspect <container-id>` - View the details of a container.

## Using Kubernetes

### Create Kubernetes Resources

1. Create a ConfigMap for filling in the db data:

```bash
kubectl create configmap todo-db-init --from-file=./Database/ToDo.sql
```

2. Apply the MariaDB configuration, secret, and deployment files:

```bash
kubectl apply -f k8s/mariadb-config.yaml
kubectl apply -f k8s/mariadb-secret.yaml
kubectl apply -f k8s/mariadb.yaml
```

3. Apply the backend deployment and service files:

```bash
kubectl apply -f k8s/backend.yaml
```

4. Apply the frontend deployment and service files:

```bash
kubectl apply -f k8s/frontend.yaml
```

5. (Optional) Apply the ingress configuration:

```bash
kubectl apply -f k8s/ingress.yaml
```

### Accessing the Application

1. Retrieve the external IP of the frontend service:

```bash
kubectl get services
```

2. Access the frontend by visiting the external IP (found in the previous step) in your browser.

### Delete Kubernetes Resources

1. To delete the Kubernetes resources created earlier, run the following commands:

```bash
kubectl delete -f k8s/mariadb-config.yaml
kubectl delete -f k8s/mariadb-secret.yaml
kubectl delete -f k8s/mariadb.yaml
kubectl delete -f k8s/backend.yaml
kubectl delete -f k8s/frontend.yaml
```

2. (Optional) Delete the ingress configuration:

```bash
kubectl delete -f k8s/ingress.yaml
```

### Debugging Kubernetes

To debug the application using Kubernetes, you can use the following commands:

- `kubectl get pods` - List all pods.
- `kubectl logs <pod-name>` - View the logs of a pod.
- `kubectl exec -it <pod-name> -- /bin/bash` - Open a shell in a pod.
- `kubectl describe <resource-type> <resource-name>` - View the details of a resource.
- `kubectl delete <resource-type> <resource-name>` - Delete a resource.
- `kubectl exec -it <pod-name> -- mysql -u root -p toor` - Open a shell in the MariaDB pod and connect to the database.
- `kubectl logs <pod-name> -c <container-name> --previous ` - View the logs of a previous container in a pod.

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
