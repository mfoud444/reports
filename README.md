add sudo chmod -R 777 /opt/lampp/htdocs/reports_php/storage

# Laravel Project Setup and Running Guide

This guide will walk you through the steps required to set up and run a Laravel project on your local machine, using **Yarn** for the Laravel backend and **PNPM** for the frontend.

## Prerequisites

Ensure you have the following installed on your machine:

- **PHP** (version 7.4 or higher)
- **Composer** (for managing PHP dependencies)
- **Node.js** (for managing JavaScript dependencies)
- **Yarn** (for managing backend dependencies)
- **PNPM** (for managing frontend dependencies)
- **MySQL** or **SQLite** (for the database)
- **Apache** or **Nginx** (for serving the app, optional if using `artisan serve`)

## Step 1: Clone the Repository

Clone the Laravel project repository from GitHub (or any other source):

```bash
git clone https://github.com/mfoud444/reports_php.git
```

Navigate to the project directory:

```bash
cd reports_php
```

## Step 2: Install Project Dependencies

### Backend Dependencies (Laravel)

Install the required PHP dependencies using **Composer**:

```bash
composer install
```

For **Yarn**, run:

```bash
yarn install
```

This will install the backend dependencies for Laravel.

### Frontend Dependencies (PNPM)

Navigate to the frontend directory and install the frontend dependencies using **PNPM**:

```bash
cd FrontEndApp
pnpm install
```

## Step 3: Setup Environment Configuration

Copy the example environment configuration file:

```bash
cp .env.example .env
```

Open the `.env` file and set your database and other configurations (e.g., mail, caching, etc.):

```plaintext
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password


MAIL_USERNAME=yourmail@example.com
MAIL_PASSWORD="your password"
```

## Step 4: Generate Application Key

Generate the application key using the Artisan command. This will set the `APP_KEY` in your `.env` file:

```bash
php artisan key:generate
```

## Step 5: Run Migrations

If your project includes a database, you need to run the migrations to create the necessary database tables:

```bash
php artisan migrate
```

If there are any seeders to populate the database with sample data, run:

```bash
php artisan db:seed
```

## Step 6: Run Frontend Application

To start the frontend application, go back to the **FrontendApp** directory and run the following:

```bash
pnpm serve
```

This will start the development server for the frontend, which can usually be accessed at `http://localhost:3000`.

## Step 7: Serve the Laravel Application

You can serve your Laravel application using the built-in development server or via Apache or Nginx.

### Option 1: Using Artisan's Development Server:

Run the following command:

```bash
php artisan serve
```

This will start the development server at `http://localhost:8000`.

### Option 2: Using Apache or Nginx:

If you wish to use Apache or Nginx, configure your virtual host to point to the `public` directory of your Laravel project.

## Step 8: Access the Application

Once both the backend and frontend servers are running, visit the following URL in your browser:

```plaintext
http://localhost:8000
```

For the frontend:

```plaintext
http://localhost:3000
```

If you're using Apache or Nginx, navigate to your domain (`http://yourdomain.local`).

## Troubleshooting

If you encounter any issues during setup or running the application, try the following:

- **Clear application cache:**

```bash
php artisan cache:clear
php artisan config:clear
```

- **Re-run Composer and Yarn/PNPM:**

```bash
composer install
yarn install
pnpm install
```

- **Check server logs for detailed error information:**

```bash
tail -f storage/logs/laravel.log
```

## Conclusion

You should now have the Laravel application running locally with **Yarn** for backend dependencies and **PNPM** for the frontend. If you need to deploy it to a production server, consider following Laravel's deployment best practices, including setting up SSL, queue workers, and scheduled tasks.

---

Feel free to reach out if you have any questions or issues! Happy coding!