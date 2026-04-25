FROM nginx:alpine

# Copy main nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy server-specific config
COPY nginx-server.conf /etc/nginx/conf.d/default.conf

# Copy all website files
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]