# Start with the official Node.js Docker image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to Docker environment
COPY package*.json ./

# Install npm packages
RUN npm install

# Copy the rest of your app's source code to Docker environment
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start command
CMD [ "npm", "start" ]
