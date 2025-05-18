# Use official Node.js image
FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port (change if your app uses a different port)
EXPOSE 3000

# Run the app
CMD ["./start.sh"]

