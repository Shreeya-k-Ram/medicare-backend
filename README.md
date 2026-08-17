🏥 Medicare

RuhShree Healthcare Platform

It is a full-stack healthcare web application designed to simplify interactions between patients and doctors through a secure and user-friendly digital platform.

The application combines a React.js frontend with a Spring Boot REST API backend and MySQL database, using JWT-based authentication and Spring Security to protect API resources.


🌐 Project Overview

Medicare provides a centralized platform for managing essential healthcare workflows such as:

- 👤 Patient registration and authentication
- 👨‍⚕️ Doctor information and management
- 📅 Appointment booking
- 📋 Appointment management
- 🔐 Secure user authentication
- 🔄 Communication between React frontend and Spring Boot backend
- 🛡️ Protected REST API endpoints

The project was developed to gain practical experience in building a real-world full-stack application using modern frontend, backend, database, and security technologies.


✨ Key Features

👤 Patient

- User registration and login
- Secure JWT authentication
- Patient profile management
- View doctor information
- Book doctor appointments
- View appointment details

👨‍⚕️ Doctor

- Secure doctor authentication
- View assigned appointments
- Access relevant appointment and patient information
- Manage doctor-related information

📅 Appointment

- Book appointments between patients and doctors
- Store appointment information
- Retrieve appointment details
- View doctor-specific appointments
- Secure appointment APIs

🔐 Security

- JWT-based authentication
- Spring Security
- Protected REST API endpoints
- JWT request filtering
- Token-based communication between frontend and backend


🔄 Application Workflow

👤 Patient Workflow

Home Page
    ↓
Register / Login
    ↓
JWT Authentication
    ↓
Explore Doctors
    ↓
Select Doctor
    ↓
Book Appointment
    ↓
Appointment Confirmation
    ↓
View Appointment

👨‍⚕️ Doctor Workflow

Login
   ↓
JWT Authentication
   ↓
Doctor Dashboard
   ↓
View Appointments
   ↓
View Relevant Patient Information


🛠️ Technology Stack

🎨 Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Fetch API

⚙️ Backend

- Java
- Spring Boot
- Spring Security
- REST APIs
- JWT
- OpenAPI / Swagger

🗄️ Database

- MySQL

🔧 Development & Tools

- Maven
- Git
- GitHub
- IntelliJ IDEA
- VS Code


🏗️ Application Architecture

Medicare follows a layered Controller-Service-Repository architecture.

┌──────────────────────────┐
│      React Frontend      │
└────────────┬─────────────┘
             │
             │ REST API + JWT
             ▼
┌──────────────────────────┐
│     Spring Boot API      │
├──────────────────────────┤
│       Controllers        │
├──────────────────────────┤
│         Services         │
├──────────────────────────┤
│       Repositories       │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│          MySQL           │
└──────────────────────────┘


📁 Project Structure

The project is organized into a React frontend and a layered Spring Boot backend.

medicare/
│
├── ruhshree-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── package.json
│   └── ...
│
├── src/
│   └── main/
│       └── java/
│           └── com/shreeya/medicare/
│               ├── config/
│               ├── controller/
│               ├── dto/
│               ├── entity/
│               ├── exception/
│               ├── repository/
│               ├── security/
│               └── service/
│
├── pom.xml
└── README.md


🔐 Authentication & Authorization

Medicare uses JWT-based authentication with Spring Security to secure communication between the frontend and backend.

🔑 Authentication Flow

User Login
    ↓
Credentials Verified
    ↓
JWT Token Generated
    ↓
Token Stored by Frontend
    ↓
Token Sent With API Requests
    ↓
JwtFilter Intercepts Request
    ↓
JWT Token Validated
    ↓
Protected Resource Access


🛡️ Security Components

- "SecurityConfig"
- "JwtFilter"
- "JwtService"
- Spring Security
- JWT authentication
- Protected REST endpoints


🔄 API Overview

Module        |    Endpoint              |      Method              |      Purpose
User          |    "/users/login"        |      Post                |      User authentication
Patient       |    "/patients/..."       |      GET / POST / PUT    |      Patient operations
Doctor        |    "/doctors/..."        |      GET / POST / PUT    |      Doctor operations
Appointment   |    "/appointments/..."   |      GET / POST / PUT    |      Appointment operations

API documentation is configured using OpenAPI / Swagger.


🚀 Getting Started

📋 Prerequisites

- Java 17+
- Maven
- Node.js & npm
- MySQL
- Git

1️. Clone the Repository

git clone: https://github.com/Shreeya-k-Ram/ruhshree-health-platform
cd medicare


2️. Configure MySQL

-> Create a MySQL database for the application.
-> Update the database configuration in:
-> src/main/resources/application.properties
-> Use your local credentials:
-> spring.datasource.url=jdbc:mysql://localhost:3306/medicare
-> spring.datasource.username=YOUR_USERNAME
-> spring.datasource.password=YOUR_PASSWORD

3️. Run the Spring Boot Backend

From the project root:

Windows: mvnw.cmd spring-boot:run
Linux / macOS: ./mvnw spring-boot:run

The backend will start at: http://localhost:8080

4️. Run the React Frontend

Open a new terminal:
```
cd ruhshree-frontend
npm install
npm run dev
```
The frontend will be available at: http://localhost:5173

5️. Open the Application

Once both frontend and backend are running open: http://localhost:5173


🔮 Future Enhancements

The platform can be extended with:

- 📧 Email and SMS appointment notifications
- 💳 Online payment integration
- 📄 Digital prescription and medical report management
- 📹 Online doctor consultation
- 📊 Advanced admin analytics and reporting
- 🔍 Advanced search, filtering, and pagination
- ☁️ Cloud deployment and production monitoring


📚 What I Learned

Through this project, I gained practical experience in:

- Building REST APIs with Spring Boot
- Implementing JWT authentication and Spring Security
- Applying role-based authorization
- Connecting React.js with Spring Boot APIs
- Working with MySQL and JPA
- Designing Controller-Service-Repository architecture
- Using DTOs for API communication
- Handling secured API requests and CORS
- Using Git and GitHub for version control


👩‍💻 Author

Shreeya Ram

Java Developer | Full-Stack Developer

GitHub:
https://github.com/Shreeya-k-Ram

LinkedIn:
https://www.linkedin.com/in/shreeya-kumari-ram-bba022334
