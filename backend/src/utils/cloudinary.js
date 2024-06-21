import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key:process.env.CLOUDINARY_API_KEY , 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localfilepath) => {
    try{
        if(!localfilepath){
            throw new Error("Please provide a file path");
        }
        const response=await cloudinary.uploader.upload(localfilepath,{
            resource_type: "auto"
        });
        console.log("File uploaded successfully and the URL is::",response.url);
        return response;
    }
    catch(error){
        fs.unlinkSync(localfilepath);//remove the locally saved temp file as the upload failed
        console.error(err);
    }
}

export { uploadOnCloudinary };