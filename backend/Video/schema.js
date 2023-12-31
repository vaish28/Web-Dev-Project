import mongoose, { Mongoose } from "mongoose";

/**
 * Schema for a video document.
 */
export const videoSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    title: {
        type: String,
        required: true,
    },
    description: String,
    // TODO: Refer to an existing user in the database.
    userId: {
        type: String,
        ref: 'User',
        required: true
    },
    mimeType: {
        type: String,
        enum: ["video/mp4", "video/mov", "video/avi"],
        required: true
    },
    tags: [String],
    categories: [String],
    activity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Activity'
    }
},
    { collection: "videos", timestamps: true });


/**
 * Schema for a video comment document.
 */
export const commentsSchema = new mongoose.Schema({
    videoId: {
        type: String,
        ref: 'Video',
        required: true,
    },
    // TODO: Refer to an existing user in the database.
    userId: {
        type: String,
        ref: 'User',
        required: true
    },
    comment: {
        type: String,
        required: true
    },
}, {collection: "comments", timestamps: true})

/**
 * Schema for user activity.
 */
export const activitySchema = new mongoose.Schema({
    userId: {
        type: String,
        ref: 'User',
        required: true
    },
    action: {
        type: String,
        enum: ["Like", "Dislike"]
    },
    watchedVideos: [{
        type: String
    }]
}, {collection: "activity", timestamps: true})
