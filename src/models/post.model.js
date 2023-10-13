const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    postImage: {
        type: String,
        default: ''
    },
    postText: {
        type: String,
        default: ''
    },
    likes:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now().toLocaleString("en-US", {timeZone: "Asia/Tashkent"})
    }
});


module.exports = mongoose.model('Post', PostSchema);
