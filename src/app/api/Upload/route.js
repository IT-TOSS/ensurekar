// import { google } from "googleapis";
// import { NextApiRequest, NextApiResponse } from "next";
// import multer from "multer";
// import fs from "fs";
// import path from "path";
// import { promisify } from "util";

// const upload = multer({ dest: "uploads/" });

// const uploadMiddleware = promisify(upload.single("file"));

// const KEY_FILE_PATH = path.join(process.cwd(), "google-drive.json"); // apani JSON key Ka path do
// const SCOPES = ["https://www.googleapis.com/auth/drive.file"];

// const auth = new google.auth.GoogleAuth({
//   keyFile: KEY_FILE_PATH,
//   scopes: SCOPES,
// });

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     await uploadMiddleware(req, res);
//     console.log("HELLO")
//     console.log(req.body)

//     const drive = google.drive({ version: "v3", auth });

//     const fileMetaData = {
//       name: req.file?.originalname,
//       parents: ["YOUR_GOOGLE_DRIVE_FOLDER_ID"], // अपने Drive Folder ID से बदलें
//     };

//     const media = {
//       mimeType: req.file?.mimetype,
//       body: fs.createReadStream(req.file?.path || ""),
//     };

//     try {
//       const response = await drive.files.create({
//         requestBody: fileMetaData,
//         media: media,
//         fields: "id",
//       });

//       res.status(200).json({ success: true, fileId: response.data.id });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "File upload failed" });
//     }
//   } else {
//     res.status(405).json({ error: "Method Not Allowed" });
//   }
// }