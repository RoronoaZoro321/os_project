# frontend/Dockerfile
FROM nginx:alpine
# Uses the official Nginx image with Alpine Linux as the base

COPY nginx.conf /etc/nginx/nginx.conf
# Copies the custom nginx.conf file to the appropriate location in the container

COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/
# Copies the frontend files (HTML, CSS, and JavaScript) to Nginx's default serving directory