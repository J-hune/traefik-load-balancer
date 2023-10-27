# Use a base Node.js image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the port on which the application is listening (e.g., port 3001)
EXPOSE 3001

# Command to start the application
CMD ["node", "app.js"]