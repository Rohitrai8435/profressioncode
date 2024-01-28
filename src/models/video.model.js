import mongoose from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

const videoSchema = mongoose.Schema(
    {
        videofile: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
        },
        views: {
            type: Number,
            default: 0,
        },
        isPublic: {
            type: Boolean,
            default: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserModel',
        },
    },
    { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);
const videoModel = mongoose.model('VideoModel', videoSchema);

export { videoModel };
