import mongoose from "mongoose";
import { Schema, Document } from "mongoose";
import { unique } from "next/dist/build/utils";

export interface InWaitlistEmail extends Document {
    email: string;
    createdAt: Date;
    username: string;
    lastsenseAt?: Date;
}

const WaitlistEmailSchema = new Schema<InWaitlistEmail>({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
});

export default mongoose.models.WaitlistEmail || 
    mongoose.model<InWaitlistEmail>("WaitlistEmail", WaitlistEmailSchema);