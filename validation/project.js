const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProjectInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.projectname, { min: 5, max: 300 })) {
    errors.projectname = "Project name must be between 5 and 300 characters";
  }

  if (Validator.isEmpty(data.projectname)) {
    errors.projectname = "Text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
