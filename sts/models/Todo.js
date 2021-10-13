const { Schema, model } = require('mongoose')

const schema = new Schema({
  // const template = handlebars.compile({{title}});
  title: {
    type: String,
    required: true,
            },


  //
  // const template = handlebars.compile({{title}});
  // const title = template(
  //     { aString: "  abc  " },
  //     {
  //       allowedProtoMethods: {
  //         trim: true
  //       }
  //     }
  // );

  completed: {
    type: Boolean,
    default: false,
    //
  }

})

module.exports = model('Todo', schema)
