import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';

cloudinary.config({
  cloud_name: 'dv4zcdfxb',
  api_key: '571753664135726',
  api_secret: 'UfPyhtJLkoe48g1kS1tRb_LeePk',
});

const storage = multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: 'auto',
  });

  return result;
}

const upload = multer({ storage });

export { upload, imageUploadUtil };
