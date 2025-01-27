# Use the official PHP 8.0 Apache image as the base image
FROM php:8.0-apache

# Set working directory
WORKDIR /var/www/html

# Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    default-mysql-client \
    wget \
    unzip \
    mariadb-server \
    git \
    && docker-php-ext-install mysqli pdo pdo_mysql \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install Node.js 20
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g yarn pnpm

# Copy your application files
COPY . .
RUN ls -la
# Copy .env.example to .env
RUN cp .env.example .env

# Install Composer dependencies
# RUN composer install

# Generate application key
RUN php artisan key:generate

# Set environment variables
ENV PORT=8000
ENV DB_PORT=8001
EXPOSE ${PORT} ${DB_PORT}

# Change Apache listening port
RUN sed -i "s/Listen 80/Listen ${PORT}/" /etc/apache2/ports.conf

# Suppress deprecation warnings
RUN echo "error_reporting = E_ALL & ~E_DEPRECATED & ~E_STRICT" > /usr/local/etc/php/conf.d/error-reporting.ini

# Download and install phpMyAdmin
RUN wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O /tmp/phpmyadmin.zip \
    && unzip /tmp/phpmyadmin.zip -d /var/www/html/ \
    && mv /var/www/html/phpMyAdmin-* /var/www/html/phpmyadmin \
    && rm /tmp/phpmyadmin.zip

# Copy configuration file for phpMyAdmin
COPY config.inc.php /var/www/html/phpmyadmin/

# Configure MariaDB server
RUN sed -i "s/^\(bind-address\s*=\s*\).*\$/\10.0.0.0/" /etc/mysql/mariadb.conf.d/50-server.cnf \
    && sed -i "s/^\(port\s*=\s*\).*\$/\1${DB_PORT}/" /etc/mysql/mariadb.conf.d/50-server.cnf \
    && service mariadb start \
    && mysql -e "CREATE DATABASE rep;" \
    && mysql -e "CREATE USER 'bootmy'@'%' IDENTIFIED BY 'pmapass';" \
    && mysql -e "GRANT ALL PRIVILEGES ON *.* TO 'bootmy'@'%';" \
    && mysql -e "FLUSH PRIVILEGES;"

# Copy the wait-for-mysql script
COPY wait-for-mysql.sh /usr/local/bin/wait-for-mysql.sh
RUN chmod +x /usr/local/bin/wait-for-mysql.sh

# Install frontend dependencies
RUN cd frontend && pnpm install && cd ..

# Run database migrations and seed
RUN php artisan migrate --seed

# Build frontend assets
RUN yarn deploy

# Start MariaDB and Apache in the foreground
CMD service mariadb start && /usr/local/bin/wait-for-mysql.sh && apache2-foreground