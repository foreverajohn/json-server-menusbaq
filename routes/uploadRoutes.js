const express = require('express');
const multer = require('multer')
const router = express.Router()

const upload = multer({
    storage: multer.memoryStorage(),
});

router.post('/', upload.array('avatar'), (req, res) => {
    const { user } = req.user
    res.send(`/${req.file.path}`)
})

module.exports = router