import mongoose from "mongoose";
import { settingsSchema } from "./settings.model";

export const appSchema = new mongoose.Schema({
    name: String,
    html: String,
    img: String,
    settings: settingsSchema,
});

export const AppModel = mongoose.model("AppModel", appSchema);
