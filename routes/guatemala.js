//express route file
const {Router} = require('express');
const router = Router();
const {getGua, postGua} = require('../controllers/guatemala');


router.get("/", getGua);
router.post("/", postGua);



module.exports = router;