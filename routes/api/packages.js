const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Validation
const validateEssentialInput = require("../../validation/package");

// Load Package Model
const Package = require("../../models/Package");

// Profile model
const Profile = require("../../models/Profile");
// @route   GET api/package/test
// @desc    Tests package route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Package Works" }));

// @route   GET api/packages
// @desc    Get posts
// @access  Public
router.get("/", (req, res) => {
  Package.find()
    .sort({ order: 1 })
    .then(package => res.json(package))
    .catch(err =>
      res.status(404).json({ nopackagefound: "No packages found" })
    );
});

// @route   GET api/packages/:id
// @desc    Get post by id
// @access  Public
router.get("/:id", (req, res) => {
  Package.findById(req.params.id)
    .then(package => res.json(package))
    .catch(err =>
      res.status(404).json({ nopackagefound: "No packages found with that ID" })
    );
});

// @route   POST api/package
// @desc    Create or edit essential
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePackageInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newPackage = new Package({
      order: req.body.order,
      name: req.body.name,
      description: req.body.description,
      type: req.body.type,
      learn_more: req.body.learn_more,
      image_url: req.body.image_url
    });

    newPackage.save().then(package => res.json(package));
  }
);

// @route   DELETE api/packages/:id
// @desc    Delete post
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Package.findById(req.params.id)
      .then(package => {
        // Delete
        package.remove().then(() => res.json({ success: true }));
      })
      .catch(err =>
        res.status(404).json({ packagenotfound: "No package found" })
      );
  }
);
module.exports = router;
