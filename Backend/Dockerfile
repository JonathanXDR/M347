# Use an official Node.js runtime as a parent image
FROM node:18.16.0

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages
RUN npm ci

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the app will listen on
EXPOSE 3000

# Define the command to start the app
CMD [ "npm", "run", "start" ]
