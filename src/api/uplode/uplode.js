import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {


    console.log(req.body)

    console.log("JHello")

    // if (req.method !== 'POST') {
    //   return res.status(405).json({ message: 'Method Not Allowed' });
    // }
  
    // const form = new formidable.IncomingForm();
    // form.uploadDir = path.join(process.cwd(), '/public/uploads'); // Upload folder
    // form.keepExtensions = true; // Keep file extensions
  
    // if (!fs.existsSync(form.uploadDir)) {
    //   fs.mkdirSync(form.uploadDir, { recursive: true }); // Ensure directory exists
    // }
  
    // form.parse(req, (err, fields, files) => {
    //   if (err) {
    //     return res.status(500).json({ error: 'Error parsing files' });
    //   }
  
    //   const uploadedFiles = Object.values(files).flat().map(file => ({
    //     name: file.newFilename,
    //     path: `/uploads/${file.newFilename}`,
    //   }));
  
    //   res.status(200).json({ message: 'Files uploaded successfully', files: uploadedFiles });
    // });
  }