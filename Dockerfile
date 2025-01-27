FROM php:8.0-apache

# Set working directory
WORKDIR /var/www/html

# Copy your application files
COPY . .

# Set environment variables
ENV PORT=8000
ENV DB_PORT=8001
EXPOSE ${PORT} ${DB_PORT}

# Change Apache listening port
RUN sed -i "s/Listen 80/Listen ${PORT}/" /etc/apache2/ports.conf

# Install MySQLi extension
RUN docker-php-ext-install mysqli

# Suppress deprecation warnings
RUN echo "error_reporting = E_ALL & ~E_DEPRECATED & ~E_STRICT" > /usr/local/etc/php/conf.d/error-reporting.ini

# Install necessary dependencies
RUN apt-get update && apt-get install -y \
    default-mysql-client \
    wget \
    unzip \
    && docker-php-ext-install mysqli pdo pdo_mysql

# Download and install phpMyAdmin
RUN wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O /tmp/phpmyadmin.zip \
    && unzip /tmp/phpmyadmin.zip -d /var/www/html/ \
    && mv /var/www/html/phpMyAdmin-* /var/www/html/phpmyadmin \
    && rm /tmp/phpmyadmin.zip

# Copy configuration file for phpMyAdmin
COPY config.inc.php /var/www/html/phpmyadmin/

# Copy the SQL file into the container
COPY moh.sql /tmp/moh.sql

# Install and configure MariaDB server
RUN apt-get update && apt-get install -y mariadb-server \
    && sed -i "s/^\(bind-address\s*=\s*\).*\$/\10.0.0.0/" /etc/mysql/mariadb.conf.d/50-server.cnf \
    && sed -i "s/^\(port\s*=\s*\).*\$/\1${DB_PORT}/" /etc/mysql/mariadb.conf.d/50-server.cnf \
    && service mariadb start \
    && mysql -e "CREATE DATABASE rep;" \
    && mysql -e "CREATE USER 'bootmy'@'%' IDENTIFIED BY 'pmapass';" \
    && mysql -e "GRANT ALL PRIVILEGES ON *.* TO 'bootmy'@'%';" \
    && mysql -e "FLUSH PRIVILEGES;" 
# Copy the wait-for-mysql script
COPY wait-for-mysql.sh /usr/local/bin/wait-for-mysql.sh
RUN chmod +x /usr/local/bin/wait-for-mysql.sh

RUN npm install -g yarn
RUN yarn install

RUN cd frontend
# Install pnpm globally
RUN npm install -g pnpm

# Install frontend dependencies
RUN pnpm install

RUN cd ..
RUN php artisan db:seed
RUN yarn deploy

# Start MariaDB and Apache in the foreground
CMD service mariadb start && /usr/local/bin/wait-for-mysql.sh && apache2-foreground