


## Video App Backend

This project is the backend for a video application. It handles user management, authentication, and video uploads, and serves various API endpoints to interact with the app's data.

- [Model Link](https://app.eraser.io/workspace/0byMpXUhHC0kERWniDcj?origin=share)

## Features

- **User Authentication:** Secure login and registration endpoints.
- **File Uploads:** Supports video uploads using Multer middleware.
- **Cloudinary Integration:** Handles storage of uploaded media.
- **Error Handling:** Centralized error handling with custom error classes.
- **Middleware:** Authentication and file handling.
- **API Response Format:** Consistent API responses using `ApiResponse.js`.


## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- Node.js 
- npm or yarn
- A Cloudinary account for media storage

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/JoshiSuyash08/Backend-videoStreamingApp.git
   ```

2. Navigate to the project directory:
   ```sh
   cd video-app-backend
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Create a `.env` file in the root directory with the following environment variables:
   ```env
   PORT=5000
   DATABASE_URL=<your-database-url>
   CLOUDINARY_NAME=<your-cloudinary-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   JWT_SECRET=<your-jwt-secret>
   ```

5. Start the server:
   ```sh
   npm start
   ```



## API Endpoints

### Authentication
- **POST /api/auth/login:** User login
- **POST /api/auth/register:** User registration

### Users
- **GET /api/users:** Retrieve all users (protected route)
- **GET /api/users/:id:** Retrieve a specific user by ID

### Video Uploads
- **POST /api/videos/upload:** Upload a new video (requires authentication and file upload)

## Middleware

- **auth.middleware.js:** Protects routes by verifying JWT tokens.
- **multer.middleware.js:** Handles file uploads using Multer.


## Utilities

- **ApiErrors.js:** Custom error classes for handling different error types.
- **ApiResponse.js:** Standardizes the format of API responses.
- **asyncHandler.js:** Simplifies asynchronous route handling.
- **cloudinary.js:** Cloudinary integration for managing media storage.



