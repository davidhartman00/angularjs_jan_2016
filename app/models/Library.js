var
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    resourceSchema = new Schema({
        title: String,
        url: String,
        description: String
    }),
    librarySchema = new Schema({
        libName: String,
        popularity: Number,
        resources: [resourceSchema]
    })
    
var Library = mongoose.model('Library', librarySchema)

module.exports = Library