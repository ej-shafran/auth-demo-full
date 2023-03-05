# installation
npm install @nestjs/config @nestjs/jwt @hilma/auth-nest cookie-parser

npm install -D @types/cookie-parser

# generate random base64 string with 32 characters
openssl rand -base64 32

# insert roles into the DB
mysql -uroot -p auth_demo < ./sql/add_roles.sql