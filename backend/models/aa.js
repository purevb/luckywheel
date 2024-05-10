const mongoose = require("mongoose");

const wheelSchema = new mongoose.Schema({
    Name :{
        type:String,
        required:true,
        trim:true
    }
});
const Wheel = mongoose.model("wheel", wheelSchema);
module.exports = Wheel;
