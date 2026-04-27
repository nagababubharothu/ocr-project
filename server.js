const express = require("express");
const path = require("path");

const app = express(); // ✅ MUST be before using app

// Routes
const ocrRoutes = require("./routes/ocrRoutes");
app.use("/api/ocr", ocrRoutes);

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, "public")));

// Default route
app.get("/", (req, res) => {
    res.send("OCR Server Running...");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});