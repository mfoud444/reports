# Stage 1: Build the frontend (Vue.js with pnpm)
FROM node:20 as frontend-builder

# Set working directory for frontend
WORKDIR /app/frontend

# Copy package.json and pnpm-lock.yaml
COPY frontend/package.json frontend/pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install frontend dependencies
RUN pnpm install

# Copy the rest of the frontend files
COPY frontend .

# Build the frontend
RUN pnpm run build

# Stage 2: Build the backend (Laravel)
FROM composer:2 as backend-builder

# Set working directory for backend
WORKDIR /app/backend

# Copy Laravel files
COPY backend .

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Stage 3: Final production image
FROM php:8.2-fpm-alpine

# Set working directory
WORKDIR /var/www/html

# Install system dependencies
RUN apk add --no-cache \
    nginx \
    supervisor \
    libzip-dev \
    zip \
    unzip \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd pdo_mysql zip pcntl

# Copy Nginx and Supervisor configuration files
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Copy backend files from backend-builder stage
COPY --from=backend-builder /app/backend .

# Copy frontend build files from frontend-builder stage
COPY --from=frontend-builder /app/frontend/dist ./public

# Set permissions for Laravel storage and bootstrap/cache
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Expose ports
EXPOSE 80

# Start Nginx and PHP-FPM using Supervisor
CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]