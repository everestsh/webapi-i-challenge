const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    const races = ['human', 'elf', 'hobbit', 'wizard', 'dwarf', 'arc']
    res.status(200).json(races)
})
module.exports = router