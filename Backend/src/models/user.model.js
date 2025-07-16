import mongoose, {Schema} from "mongoose";

const userSchema = Schema({
    username: {
        required: true,
        type: String,
        unique: true,
        trim: true,
        minlength: 3,
    },
    email:
    {
        required: true,
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    passwordHash: {
        required: true,
        type: String,
    },
    fullName: {
        required: true,
        type: String,
    },
    lastLogin: {
        type: Date,
        default: Date.now,
    },
}
,{timestamps: true,});

export const User = mongoose.model("User", userSchema);