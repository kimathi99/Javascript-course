# Use Node.js LTS as the base image
FROM node:lts

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json from the parent directory to the container
# COPY ../package*.json ./

# Clean npm cache to avoid issues from previous installs
# RUN npm cache clean --force

# Install dependencies using npm ci for a clean install
# RUN npm ci

# Copy the rest of the application code
COPY ../ .

# Expose the port on which Vite runs
EXPOSE 5173

# Keep the container alive (optional)
CMD ["tail", "-f", "/dev/null"]
