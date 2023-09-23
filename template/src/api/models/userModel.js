import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter your name'],
        }
    }
)
const User=mongoose.model('user', userSchema);

export {User}
