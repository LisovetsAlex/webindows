const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const AppsSchema = new Schema({
    name: String,
    owner_id: {
        type: Schema.Types.ObjectId,
        ref: "Users",
    },
    start_url: String,
    settings: {
        description: String,
        icon: { type: String, default: "Assets/Img_Program.PNG" },
        defaultScale: {
            width: Number,
            height: Number,
        },
    },
});

const AppsModel = model("Apps", AppsSchema);
module.exports = AppsModel;
