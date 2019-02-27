const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProjectSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  projectname: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  text: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  instance: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      },
      instance_name: {
        type: String
      },
      domain: {
        type: String
      },
      essential: {
        type: String
      },
      url: {
        type: String
      },
      status: {
        type: String
      },
      ssh_port: {
        type: String
      },
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
    }
  ]
});

module.exports = Project = mongoose.model("project", ProjectSchema);
