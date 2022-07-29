const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema definition - ODM - Object Document Mapping

const usersAndRoleSchema = new Schema({
   userId:String,
   password: String,
   role: String
})
const usersAndRole = mongoose.model('usersandrole',usersAndRoleSchema);
module.exports = usersAndRole;