import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_LOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
});
const uploadOnCloudinary = async (locafilepath) => {
    try {
        if (!locafilepath) return null;
        const response = await cloudinary.uploader.upload(locafilepath, {
            resource_type: 'auto',
        });
        console.log('File Uploaded on Cloudinary', response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(locafilepath);
        return null;
    }
};

export { uploadOnCloudinary };
