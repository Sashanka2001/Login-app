
# Login App

**A simple full-stack login example with a Spring Boot backend and a React frontend.**

**Overview**
- **Purpose:** Demonstrates a minimal login flow with a Java Spring Boot backend and a React frontend.
- **Backend:** Spring Boot (Maven) application located in `Login-Backend/login`.
- **Frontend:** React app created with Create React App located in `Login-Frontend/login-app`.

**Features**
- Simple username/password login flow (example).
- Clear separation of frontend and backend projects for development.

**Tech Stack**
- Backend: Java, Spring Boot, Maven
- Frontend: JavaScript, React, npm

**Repository Structure**
- `Login-Backend/login` : Spring Boot application (Maven wrapper included)
	- `src/main/java/com/example/login` : application sources
	- `src/main/resources/application.properties` : backend config
- `Login-Frontend/login-app` : React frontend (Create React App)
	- `src/` : React source files (including `LoginForm.js`)

**Prerequisites**
- Java JDK 11+ (or the version your project requires)
- Node.js + npm (for the frontend)
- Windows PowerShell (instructions below use PowerShell commands)

**Quick Start — Backend (Spring Boot)**
1. Open a PowerShell terminal and change directory to the backend:

```powershell
cd .\Login-Backend\login
```

2. Run the application using the included Maven wrapper:

```powershell
.\mvnw.cmd spring-boot:run
```

3. Build a production JAR (optional):

```powershell
.\mvnw.cmd clean package
java -jar target\*.jar
```

4. Run backend tests:

```powershell
.\mvnw.cmd test
```

**Quick Start — Frontend (React)**
1. Open a PowerShell terminal and change directory to the frontend:

```powershell
cd .\Login-Frontend\login-app
```

2. Install dependencies and start the dev server:

```powershell
npm install
npm start
```

3. Run frontend tests:

```powershell
npm test
```

**Notes on API & Integration**
- The frontend talks to the backend API. Check `LoginController.java` in `Login-Backend/login/src/main/java/com/example/login/controller` for actual endpoints and request formats.
- Typical login request (example): `POST /api/login` with JSON body `{ "username": "...", "password": "..." }` — adapt if your controller uses different routes.

**Development Tips**
- Run backend and frontend concurrently in separate terminals for fast development.
- If the frontend needs to proxy API requests during development, configure the proxy in `Login-Frontend/login-app/package.json` or use a CORS configuration in `WebConfig.java`.

**Troubleshooting**
- If Maven wrapper fails, ensure `mvn` is installed or use the included `mvnw.cmd`.
- If frontend fails to start, delete `node_modules` and run `npm install` again.

**Contributing**
- Open an issue or submit a pull request. Keep changes focused and include clear run instructions.

**License**
- This repository does not include a license file. Add one if you intend to open-source the project.

---
If you'd like, I can also:
- add a short `docker-compose.yml` to run both services together,
- or add a sample `.env` and CORS/proxy example for local dev.
