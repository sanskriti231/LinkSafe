import mongoose, {Schema} from "mongoose";

const linkDataSchema = Schema({
    user: {
        required: true, 
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        required: true,
        type: String,
        trim: true,
    },
    url: {
        required: true,
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    isEncrypted: {
        type: Boolean,
        default: false
    },
},
{timestamps: true,}
);

export const LinkData = mongoose.model("LinkData", linkDataSchema);
