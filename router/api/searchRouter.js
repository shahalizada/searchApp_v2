const router = require("express").Router();
const { body, validationResult } = require("express-validator");
//DataBase Models...
const Search = require("../../models/searchModel");
const townName = require("../../models/cityNameModel");

//Add City Name
router.post(
  "/addCity",
  [body("cityName", "City Name is a required field!").not().isEmpty()],
  async (req, res) => {
    const { cityName } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let city = new townName({ cityName });
      await city.save();
      res
        .status(200)
        .json({ cityName: city, msg: "Your City Name was being saved." });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: "There is an error in city Name route." });
    }
  }
);

//Add Records
router.post(
  "/addRecord",
  [
    body("id", "ID is a required field").not().isEmpty(),
    body("firstName", "First Name is a required field").not().isEmpty(),
    body("lastName", "Last Name is a required field").not().isEmpty(),
    body("fatherName", "Father Name is a required field").not().isEmpty(),
    body("score", "Score is a required field").not().isEmpty(),
    body("status", "Status is a required field").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      id,
      firstName,
      lastName,
      fatherName,
      birthday,
      city,
      schoolName,
      status,
      gender,
      score,
      result,
    } = req.body;
    try {
      let record = await Search.findOne({ id });
      if (record) {
        return res
          .status(400)
          .json({ errors: [{ msg: "This ID was already being submitted!" }] });
      }
      record = new Search({
        id,
        firstName,
        lastName,
        fatherName,
        birthday,
        city,
        schoolName,
        status,
        gender,
        score,
        result,
      });
      await record.save();
      res
        .status(200)
        .json({ record, msg: "Your Record was successfully added." });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: "There is an error on Add Record route." });
    }
  }
);

//Search Records
router.post(
  "/searchRecord",
  [body("id", "ID is a required field.").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { id } = req.body;
    try {
      const findRecord = await Search.findOne({ id });
      if (!findRecord) {
        return res
          .status(404)
          .json({
            errors: [{ msg: "There are no associated records found." }],
          });
      }
      res.status(200).json({ findRecord });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: "There is an error search record route." });
    }
  }
);

module.exports = router;
