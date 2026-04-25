FROM nginx:alpine

# Copy all project files to nginx html directory
COPY . /usr/share/nginx/html

# Remove nginx default config and use our setup
RUN rm /etc/nginx/conf.d/default.conf

# Optional: Add custom nginx config if needed
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]