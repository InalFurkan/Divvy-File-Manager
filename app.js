// imports
const express = require("express");
const path = require("path");
const app = express();

// Middleware to parse JSON and serve static files
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from public/

// Import routes
const authRoutes = require("routes/authRoutes");

// Use routes
app.use("/auth", authRoutes); // Prefix all auth-related routes with /auth

// Default route for serving the main page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html")); // Serve index.html
});

// Set the port and start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
