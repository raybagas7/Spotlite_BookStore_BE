# SpotBook Book Store REST APi

Backend for Book Store, consisting of admin/writer and regular users.

- Admin has more authority to manage book and tag.
- Writer as a user, whoever post a book then he is a writer with that account
- User can Order a book an cancel it using point
- Point will be reduced if user perform order and will be back if he cancel it
- Paginated books and orders.
- Signup for regular user and admin/writer
- Every user have a profile data
- Only one token, AccessToken only
- Build on top of Express with TypeORM

## Documentation

- [Postman Documentation](https://documenter.getpostman.com/view/20860825/2sA35Ba3ox#1055f8c2-518e-4d66-a775-d837ba685471)

## Run Locally

It need PostgreSQL and NodeJs installed in your local environment

Clone the project

```bash
  git clone https://github.com/raybagas7/Spotlite_BookStore_BE.git
```

Go to the project directory

```bash
  cd Spotlite_BookStore_BE
```

Install dependencies

```bash
  npm install
```

Environment variable

```bash
  cp .env.example .env
  follow the .env.example and fill every variable with your local Environment without quote/double quote
```

Migrate database

```bash
  npm run migration
```

Revert migration if you want to revert

```bash
  npm run migration:revert
```

Running the Server Locally

```bash
  npm run start:dev
```

Running the Server in Production

```bash
  npm run build
  npm run start
```
