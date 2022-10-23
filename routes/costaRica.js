//express route file
const {Router} = require('express');
const router = Router();
const {getCR, postCR} = require('../controllers/costaRica');


router.get("/", getCR);
router.post("/", postCR);




module.exports = router;