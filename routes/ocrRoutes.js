const express = require("express");
const multer = require("multer");
const Tesseract = require("tesseract.js");

const router = express.Router();

// store uploaded files
const upload = multer({ dest: "uploads/" });

router.post("/extract", upload.single("file"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const result = await Tesseract.recognize(
            req.file.path,
            "eng"
        );

        res.json({
            text: result.data.text
        });

    } catch (err) {
        res.status(500).json({
            error: "OCR failed"
        });
    }
});

module.exports = router;