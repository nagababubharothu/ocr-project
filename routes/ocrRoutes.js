const express = require("express");
const multer = require("multer");
const Tesseract = require("tesseract.js");

const router = express.Router();

const upload = multer({ dest: "uploads/" });

// OCR API
router.post("/extract", upload.single("file"), async (req, res) => {
    try {
        const result = await Tesseract.recognize(req.file.path, "eng");

        res.json({
            text: result.data.text
        });

    } catch (err) {
        res.status(500).json({ error: "OCR failed" });
    }
});

module.exports = router;