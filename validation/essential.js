const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEssentialInput(data) {
  let errors = {};

  data.order = !isEmpty(data.order) ? data.order : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.type = !isEmpty(data.type) ? data.type : "";
  data.learn_more = !isEmpty(data.learn_more) ? data.learn_more : "";
  data.image_url = !isEmpty(data.image_url) ? data.image_url : "";

  if (!Validator.isLength(data.name, { min: 2, max: 40 })) {
    errors.name = "Name needs to between 2 and 40 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
