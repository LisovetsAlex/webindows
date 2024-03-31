const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UsersSchema = new Schema({
    name: String,
    password: String,
    downloaded_app_ids: [String],
    public_settings: {
        icon: { type: String, default: "Assets/Img_Sound.PNG" },
        bio: { type: String, default: "This is dude has no bio lol" },
    },
    personal_settings: {
        bg_img_url: { type: String, default: "Assets/Img_Bg_Fields.jpg" },
        desktop_shortcuts: [
            {
                app_name: String,
                position: {
                    x: Number,
                    y: Number,
                },
            },
        ],
    },
});

const UsersModel = model("Users", UsersSchema);
module.exports = UsersModel;
