import mongoose from "mongoose";

export const settingsSchema = new mongoose.Schema({
    isFullScreen: Boolean,
    position: { x: Number, y: Number },
    scale: { width: Number, height: Number },
});

export const SettingsModel = mongoose.model("SettingsModel", settingsSchema);
