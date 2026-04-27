const express = require("express");
const path = require("path");

const app = express();

// Routes
const ocrRoutes = require("./routes/ocrRoutes");
app.use("/api/ocr", ocrRoutes);

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// Default route
app.get("/", (req, res) => {
    res.redirect("/login.html");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});