const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Validation
const validateProjectInput = require("../../validation/project");

// Load Project Model
const Project = require("../../models/Project");

// Profile model
const Profile = require("../../models/Profile");
// @route   GET api/project/test
// @desc    Tests Project route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Project Works" }));

// @route   GET api/project
// @desc    Get posts
// @access  Public
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Project.find()
      .sort({ order: 1 })
      .then(project => res.json(project))
      .catch(err =>
        res.status(404).json({ noprojectfound: "No project found" })
      );
  }
);

// @route   GET api/project/:id
// @desc    Get post by id
// @access  Public
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Project.findById(req.params.id)
      .then(project => res.json(project))
      .catch(err =>
        res.status(404).json({ nopostfound: "No project found with that ID" })
      );
  }
);

// @route   POST api/project
// @desc    Create or edit project
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProjectInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newProject = new Project({
      projectname: req.body.projectname,
      description: req.body.description,
      text: req.body.text,
      name: req.user.name,
      avatar: req.user.avatar,
      user: req.user.id
    });

    newProject.save().then(project => res.json(project));
  }
);

// @route   DELETE api/project/:id
// @desc    Delete post
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Project.findById(req.params.id)
      .then(project => {
        // Delete
        project.remove().then(() => res.json({ success: true }));
      })
      .catch(err =>
        res.status(404).json({ projectnotfound: "No project found" })
      );
  }
);

// @route   POST api/project/instance/:id
// @desc    Add instance to project
// @access  Private
router.post(
  "/instance/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProjectInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    Project.findById(req.params.id)
      .then(project => {
        const newInstance = {
          name: req.user.name,
          avatar: req.user.avatar,
          user: req.user.id,
          instance_name: req.body.instance_name,
          domain: req.body.domain,
          essential: req.body.essential,
          url: req.body.url,
          status: req.body.status,
          ssh_port: req.body.ssh_port
        };

        //add data center array to new Instance
        //project->instance->data centers
        /*
        data_center: [
        {
          name: {
            type: String
          },
          size: {
            type: String
          },
          cpu: {
            type: String
          },
          memory: {
            type: String
          },
          storage: {
            type: String
          },
          create_date: {
            type: Date
          }
        }
      ]
        */

        // Add to instance array
        project.instance.unshift(newInstance);

        // Save
        project.save().then(project => res.json(project));
      })
      .catch(err =>
        res.status(404).json({ projectnotfound: "No project found" })
      );
  }
);

module.exports = router;
