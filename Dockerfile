# Use the official Node.js image as the base image
FROM node:18

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies with --legacy-peer-deps flag
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the application port
EXPOSE 8000

# Start the application
CMD ["npm", "run", "start:dev"]
