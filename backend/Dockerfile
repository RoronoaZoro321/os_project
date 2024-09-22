# backend/Dockerfile
FROM node:14-alpine
# Uses the official Node.js 14 image with Alpine Linux as the base

WORKDIR /app
# Sets the working directory inside the container to /app

COPY package.json .
# Copies the package.json file from the host to the container's working directory

RUN npm install
# Installs the Node.js dependencies defined in package.json

COPY server.js .
# Copies the server.js file from the host to the container's working directory

CMD ["node", "server.js"]
# Specifies the command to run when the container starts