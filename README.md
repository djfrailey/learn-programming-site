# Learn Programming Site

This website is built using KoaJS and VueJS

### Installation
```
git clone https://github.com/zlshames/learn-programming-site.git
cd learn-programming-site
npm install                   // Installs required packages
npm run dev                   // Starts the front-end development server
npm run server                // Starts the back-end server w/ watch
npm run server:prod           // Starts the back-end production server
```

> In order to run the back-end server correctly, you will need to copy the example config
```
cp config.example.js config.js
```

### Creating MySQL Database
> First, make sure MySQL is installed on your server
```
sudo apt-get update
sudo apt-get install mysql-server
sudo mysql_secure_installation
sudo mysql_install_db
```
> Second, you want to start the MYSQL server. Here are the commands to start/stop/use shell:
```
mysql-ctl start
mysql-ctl stop
mysql-ctl cli
```
> Third, once your mysql server is running, you must create the mysql table before running the migration
```
CREATE DATABASE learn_programming;
```
> Lastly, you will need to install knex (SQL ORM library) globally in order to run the migrations and access the database
```
npm i -g knex                        // This will install knex globally
knex migrate:latest                  // This will run the database migrations
knex migrate:rollback                // This will rollback the database migrations
```
