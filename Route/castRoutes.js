const express = require("express");
const router = express.Router();

const CastController = require("../Controller/castController");

router.get("/", CastController.getaddDetails);
router.post("/", CastController.postDetails);
router.get("/details", CastController.details);

router.get("/credited", CastController.creditedDetails);
router.get("/credited/:id", CastController.credited);

module.exports = router;
