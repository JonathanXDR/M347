# Pull the latest image from Docker Hub and setup everything for the frontend
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the package.json file to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the files to the working directory
COPY . .

# Expose the port 8080
EXPOSE 8080

# Run the app
CMD ["npm", "run", "start"]
