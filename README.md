# Cyethack Application Documentation

Cyethack is a web application designed for vulnerability management and security scanning.
# Table of Contents

1. [Technologies Used](#technologies-used)
2. [Folder Structure](#folder-structure)
3. [Setup Instructions](#setup-instructions)
4. [Default Credentials](#default-credentials)
5. [Usage](#usage)
6. [Additional Notes](#additional-notes)
7. [License](#license)

# 1. Technologies Used <a name="technologies-used"></a>
The following technologies and libraries are used in the development of Cyethack:

- React.js: Frontend library for building user interfaces.
- Redux Toolkit: State management library for managing application state.
- React Router DOM: Routing library for navigating between pages in a React application.
- Ant Design: UI library with a set of high-quality React components.
- Emotion: Library for styling React components with CSS-in-JS.
- Chart.js: Simple yet flexible JavaScript charting library.
- React D3 Speedometer: React component for creating speedometer-style charts.

# 2. Folder Structure <a name="folder-structure"></a>
The project follows a structured organization to maintain scalability and clarity:

```bash
src
├── components          # Reusable UI components
│   ├── Boxs.jsx        # Component for displaying box elements
│   ├── Dashboard.jsx   # Main dashboard component
│   ├── Header.jsx      # Header component with navigation and user actions
│   ├── ListDetail.jsx  # Detailed view component for list items
│   ├── Lists.jsx       # Component for displaying a list of items
│   ├── NavBar.jsx      # Navigation bar component
│   ├── SearchBar.jsx   # Search bar component
│   ├── TableComponent.jsx # Component for displaying data in a table format
│   ├── UserData.jsx    # Component for displaying user data and charts
│   └── withHeader.jsx  # HOC for adding a header to components
├── constants           # Constants used across the application
│   └── Vulnerabilities.js # List of vulnerabilities and their details
├── pages               # Page components used by React Router
│   ├── HomePage
│   │   └── Home.jsx    # Home page component
│   ├── ListPage
│   │   └── List.jsx    # Page component displaying a list of items
│   └── ListDetailsPage
│       └── ListDetails.jsx # Page component displaying detailed information about an item
├── store               # Redux store setup and slices
│   ├── slices
│   │   ├── authSlice.js     # Redux slice for authentication state management
│   │   └── studentSlice.js  # Redux slice for student-related state management
├── styles              # Global styles or CSS files
│   └── index.css
├── App.js              # Root component defining application routes
├── index.js            # Entry point of the application
└── reportWebVitals.js  # Utility for measuring web vitals
```

# 3. Setup Instructions <a name="setup-instructions"></a>
To set up and run the Cyethack application locally, follow these steps:

Clone the repository:

```bash
git clone https://github.com/your-username/cyethack.git
cd cyethack
```

Install dependencies:

```bash
npm install
Run the application:
```

```bash
npm start
```

The application will run in development mode at http://localhost:3000.

Build for production:

```bash
npm run build
```
Builds the app for production to the build folder.

# 4. Default Credentials <a name="default-credentials"></a>
For testing purposes, the default username and password to access the application are both set to "admin".

# 5. Usage <a name="usage"></a>

### Logging In
When logging in during development or testing:
```bash
Username: admin
Password: admin
```

Please ensure to change the default credentials and implement secure authentication mechanisms before deploying the application in a production environment.

## 6. Additional Notes <a name="additional-notes"></a>
- This application is designed with scalability and security in mind, leveraging modern frontend technologies.
- Developers are encouraged to explore and modify the codebase to suit specific requirements or extend functionality.
- For any issues or feature requests, please refer to the project's GitHub repository and open an issue.