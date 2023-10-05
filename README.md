# Alucard
Alucard: Your Oasis of Beauty. Explore curated beauty packages, hassle-free booking, and expert specialists dedicated to enhancing your natural glow.Experience personalized pampering at its finest. Your journey to radiant beauty begins here.

# Features

- View Beauty-Packages: User can explore various beauty packages
- Seamless Booking System: Enjoy a hassle-free booking experience with our user-friendly interface, allowing you to schedule appointments with ease
- Expert Specialists: Connect with skilled and experienced beauty specialists who are dedicated to enhancing your natural beauty and providing top-notch services.
- Personalized Pampering: Experience personalized beauty treatments and services, uniquely designed to cater to your individual requirements and desires.
- Admin Control: Admins manage users, bookings, packages, and more.

# Technologies
- Express.js
- Node.js
- MongoDB
- Mongoose
- TypeScript
- JSON Web Tokens (JWT) for authentication

# Model

## User

| Field        | Data Type | Description            |
|--------------|-----------|------------------------|
| name         | string    | User's name            |
| email        | string    | User's email address   |
| password     | string    | User's password        |
| photoUrl     | string    | URL to user's photo    |
| address      | string    | User's address (optional) |
| phoneNumber  | string    | User's phone number (optional) |
| role         | enum[user, admin] | User's role (user or admin) |
| bookings     | array of Booking | List of user's bookings |

## BeautyPackage

| Field        | Data Type | Description                   |
|--------------|-----------|-------------------------------|
| title        | string    | Beauty package title          |
| description  | string    | Description of the package    |
| category     | string    | Category of the package       |
| images       | array of string | URLs to package images     |
| price        | number    | Package price                 |
| specialists  | array of Specialist | List of specialists associated with the package |
| bookings     | array of Booking | List of bookings for the package |

## Specialist

| Field        | Data Type | Description                       |
|--------------|-----------|-----------------------------------|
| name         | string    | Specialist's name                 |
| designation  | string    | Specialist's job title/designation |
| bio          | string    | Specialist's biography/description |
| photoUrl     | string    | URL to specialist's photo         |
| dateOfBirth  | string    | Specialist's date of birth        |
| beautyPackages | array of BeautyPackage | List of packages offered by the specialist |

## Booking

| Field         | Data Type | Description                              |
|---------------|-----------|------------------------------------------|
| user          | User{}    | User who made the booking                |
| beautyPackage | BeautyPackage{} | Package that was booked             |

# API Routes

| SL No. | HTTP Verb | Endpoint                          | Description                 | Permission |
|--------|-----------|------------------------------------|-----------------------------|------------|
| 1      | POST      | `/api/auth/register`               | Register a user             | All        |
| 2      | POST      | `/api/auth/login`                  | Login user                 | All        |
| 3      | GET       | `/api/users`                      | Get all users              | Admin      |
| 4      | GET       | `/api/users/{userId}`              | Get a user                 | User/Admin |
| 5      | DELETE    | `/api/users/{userId}`              | Delete a user              | User/Admin |
| 6      | PUT       | `/api/users/{userId}`              | Update a user              | User/Admin |
| 7      | GET       | `/api/beauty_packages`             | Get all beauty packages    | All        |
| 8      | GET       | `/api/beauty_packages/{beautyPackageId}` | Get a beauty package | All        |
| 9      | POST      | `/api/beauty_packages`             | Create a beauty package    | Admin      |
| 10     | PUT       | `/api/beauty_packages/{beautyPackageId}` | Update a beauty package | Admin      |
| 11     | DELETE    | `/api/beauty_packages/{beautyPackageId}` | Delete a beauty package | Admin      |
| 12     | GET       | `/api/specialists`                 | Get all specialists        | All        |
| 13     | GET       | `/api/specialists/{specialistId}`  | Get a specialist           | All        |
| 14     | POST      | `/api/specialists/{beautyPackageId}` | Create a specialist     | Admin      |
| 15     | PUT       | `/api/specialists/{specialistId}`  | Update a specialist        | Admin      |
| 16     | DELETE    | `/api/specialists/{specialistId}`  | Delete a specialist        | Admin      |
| 17     | POST      | `/api/bookings/create/{beautyPackageId}` | Create a booking      | User       |
| 18     | GET       | `/api/bookings`                    | Get all bookings           | Admin      |
| 19     | DELETE    | `/api/bookings/{bookingId}`        | Delete a booking           | User       |

# Installation
1. Clone the Repository
2. Create an `.env`file with the following variables:
   - `MONGO_URI` (Your MongoDB connection URI)
   - `JWT_SECRET` (A secret key for JWT token generation)
3. Run `yarn` to install project dependencies.
4. Start the development server with `yarn dev`.

# Conclusion

this beauty salon booking system project provides a robust and efficient solution for managing user accounts, beauty packages, specialists, and bookings. By utilizing this system, beauty salons can streamline their operations, enhance customer experience, and improve overall efficiency.
