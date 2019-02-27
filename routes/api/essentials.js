const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Validation
const validateEssentialInput = require("../../validation/essential");

// Load Essential Model
const Essential = require("../../models/Essential");

// Profile model
const Profile = require("../../models/Profile");
// @route   GET api/essential/test
// @desc    Tests essential route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Essential Works" }));

// @route   GET api/essentials
// @desc    Get posts
// @access  Public
router.get("/", (req, res) => {
  Essential.find()
    .sort({ order: 1 })
    .then(essential => res.json(essential))
    .catch(err =>
      res.status(404).json({ noessentialfound: "No essentials found" })
    );
});

// @route   GET api/essentials/:id
// @desc    Get post by id
// @access  Public
router.get("/:id", (req, res) => {
  Essential.findById(req.params.id)
    .then(essential => res.json(essential))
    .catch(err =>
      res.status(404).json({ nopostfound: "No essentials found with that ID" })
    );
});

// @route   POST api/essential
// @desc    Create or edit essential
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEssentialInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newEssential = new Essential({
      order: req.body.order,
      name: req.body.name,
      description: req.body.description,
      type: req.body.type,
      learn_more: req.body.learn_more,
      image_url: req.body.image_url
    });

    newEssential.save().then(essential => res.json(essential));
  }
);

// @route   DELETE api/essentials/:id
// @desc    Delete post
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Essential.findById(req.params.id)
      .then(essential => {
        // Delete
        essential.remove().then(() => res.json({ success: true }));
      })
      .catch(err =>
        res.status(404).json({ essentialnotfound: "No essential found" })
      );
  }
);
module.exports = router;
