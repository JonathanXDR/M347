# Pull the latest image from Docker Hub and setup everything for the frontend
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the files to the working directory
COPY . .

# Build the app
RUN npm run build

# Use Nginx to serve the static files
FROM nginx:stable-alpine

# Copy the built files to the Nginx directory
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose the port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
