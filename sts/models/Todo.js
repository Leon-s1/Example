const { Schema, model } = require('mongoose')

const schema = new Schema({
  title: {
    type: String,
    required: true,
    allowedProtoMethods: {
      trim: true,
    },
  },

  completed: {
    type: Boolean,
    default: false,
    allowedProtoMethods: {
      trim: true,
    },
  },
})

module.exports = model('Todo', schema)
