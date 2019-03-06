const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    max: 40
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String
  },
  skills: {
    type: [String]
  },
  bio: {
    type: String
  },
  githubusername: {
    type: String
  },
  project: [
    {
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      instance: [
        {
          name: {
            type: String,
            required: true
          },
          domain: {
            type: String,
            required: true
          },
          essential: {
            type: String
          },
          url: {
            type: String,
            required: true
          },
          status: {
            type: String
          },
          ssh_port: {
            type: String,
            required: true
          },
          data_center: [
            {
              name: {
                type: String,
                required: true
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
        }
      ]
    }
  ],

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
