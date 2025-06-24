// import fs from "fs";
// import crypto from "crypto";
// import axios from "axios";

// const workingKey = "B3ACAE21142FBB1FA2E53B0C1C184486"; // Replace with actual key

// function decrypt(encryptedText, key) {
//   const decodedEncryptedText = Buffer.from(encryptedText, "base64");
//   const initVector = Buffer.from([...Array(16).keys()]); // 0 to 15
//   const decipher = crypto.createDecipheriv("aes-128-cbc", key, initVector);
//   let decrypted = decipher.update(decodedEncryptedText);
//   decrypted = Buffer.concat([decrypted, decipher.final()]);
//   return decrypted.toString();
// }

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method Not Allowed  (post)" });
//   }

//   const rawBody = req.body;

//   fs.appendFileSync("log.txt", "RAW POST: " + JSON.stringify(rawBody) + "\n");

//   const encResponse = rawBody.encResp || "";
//   const rcvdString = decrypt(encResponse, workingKey);

//   const responseArray = {};
//   rcvdString.split("&").forEach((pair) => {
//     const [key, value] = pair.split("=");
//     responseArray[key] = decodeURIComponent(value);
//   });

//   fs.appendFileSync("log.txt", "DECRYPTED: " + JSON.stringify(responseArray) + "\n");

//   const pabblyURL =
//     "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZiMDYzMzA0MzI1MjZiNTUzYzUxMzIi_pc";

//   try {
//     await axios.post(pabblyURL, responseArray);
//     res.status(200).json({ message: "Success", data: responseArray });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error sending to Pabbly" });
//   }
// }

// export const config = {
//   api: {
//     bodyParser: {
//       sizeLimit: "1mb",
//       urlencoded: true,
//     },
//   },
// };

// import fs from "fs";
// import crypto from "crypto";
// import axios from "axios";

// const workingKey = "B3ACAE21142FBB1FA2E53B0C1C184486"; // 32-char = AES-256

// function decrypt(encryptedText, key) {
//   const decodedEncryptedText = Buffer.from(encryptedText, "base64");
//   const initVector = Buffer.from([...Array(16).keys()]); // 0–15
//   const decipher = crypto.createDecipheriv("aes-256-cbc", key, initVector);
//   let decrypted = decipher.update(decodedEncryptedText);
//   decrypted = Buffer.concat([decrypted, decipher.final()]);
//   return decrypted.toString();
// }

// export async function POST(request) {
//   try {
//     const formData = await request.formData();
//     const encResponse = formData.get("encResp") || "";

//     fs.appendFileSync("log.txt", "RAW POST: " + encResponse + "\n");

//     const rcvdString = decrypt(encResponse, workingKey);
//     fs.appendFileSync("log.txt", "DECRYPTED STRING RAW: " + rcvdString + "\n");

//     const responseArray = {};
//     rcvdString.split("&").forEach((pair) => {
//       const [key, value] = pair.split("=");
//       responseArray[key] = decodeURIComponent(value);
//     });

//     fs.appendFileSync("log.txt", "DECRYPTED OBJECT: " + JSON.stringify(responseArray) + "\n");

//     const pabblyURL =
//       "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZiMDYzMzA0MzI1MjZiNTUzYzUxMzIi_pc";

//     // Send as form-urlencoded

//     console.log("Sending data to Pabbly:", responseArray);
//     await axios.post(pabblyURL, new URLSearchParams(responseArray));
//     console.log("Data sent to Pabbly successfully");

//     console.log("Response Array:", responseArray);
//     return Response.json({ message: "Success", data: responseArray });
//   } catch (error) {
//     console.log("Error occurred:", error);
//     console.error("Error occurred:", error?.response?.data || error.message || error);
//     return Response.json(
//       { message: "Error processing request", error: error?.message || "Unknown error" },
//       { status: 500 }
//     );
//   }
// }



import fs from "fs";
import crypto from "crypto";
import axios from "axios";

const workingKey = "B3ACAE21142FBB1FA2E53B0C1C184486"; 

function decrypt(encryptedText, workingKey) {
  const key = crypto.createHash("md5").update(workingKey).digest();
  const iv = Buffer.from([...Array(16).keys()]);
  let encryptedBuffer;

  // Agar hex format hai (sirf 0-9 aur a-f ke characters hain)
  if (/^[0-9a-fA-F]+$/.test(encryptedText)) {
    encryptedBuffer = Buffer.from(encryptedText, "hex");
  } else {
    // Base64 samjho
    encryptedBuffer = Buffer.from(encryptedText, "base64");
  }

  const decipher = crypto.createDecipheriv("aes-128-cbc", key, iv);
  let decrypted = decipher.update(encryptedBuffer);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString("utf8");
}

// export async function POST(request) {
//   try {
//     const formData = await request.formData();
//     const encResponse = formData.get("encResp") || "";

//     // Log raw encrypted response
//     fs.appendFileSync("log.txt", "RAW POST: " + encResponse + "\n");

//     // Decrypt the response
//     const rcvdString = decrypt(encResponse, workingKey);
//     console.log("Decrypted String:", rcvdString);
//     fs.appendFileSync("log.txt", "DECRYPTED STRING RAW: " + rcvdString + "\n");

//     // Convert decrypted string to object
//     const responseArray = {};
//     rcvdString.split("&").forEach((pair) => {
//       const [key, value] = pair.split("=");
//       responseArray[key] = decodeURIComponent(value);
//     });

//     // Log final object
//     fs.appendFileSync("log.txt", "DECRYPTED OBJECT: " + JSON.stringify(responseArray) + "\n");

//     // Send to Pabbly
//     const pabblyURL =
//       "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZiMDYzMzA0MzI1MjZiNTUzYzUxMzIi_pc";

//     console.log("Sending data to Pabbly:", responseArray);
//     await axios.post(pabblyURL, new URLSearchParams(responseArray));
//     console.log("Data sent to Pabbly successfully");

//     // Success Response
//     return Response.json({ message: "Success", data: responseArray });

//   } catch (error) {
//     console.error("Error occurred:", error?.response?.data || error.message || error);
//     return Response.json(
//       { message: "Error processing request", error: error?.message || "Unknown error" },
//       { status: 500 }
//     );
//   }
// }



export async function POST(request) {
  try {
    const formData = await request.formData();
    const encResponse = formData.get("encResp") || "";

    // Log raw encrypted response
    fs.appendFileSync("log.txt", `\n--- NEW REQUEST ---\nRAW POST: ${encResponse}\n`);

    // Decrypt the response
    const rcvdString = decrypt(encResponse, workingKey);
    console.log("Decrypted String:", rcvdString);
    fs.appendFileSync("log.txt", "DECRYPTED STRING RAW: " + rcvdString + "\n");

    // Convert decrypted string to object
    const responseArray = {};
    rcvdString.split("&").forEach((pair) => {
      const [key, value] = pair.split("=");
      responseArray[key] = decodeURIComponent(value || "");
    });

    console.log("Decrypted Object:", responseArray);
    fs.appendFileSync("log.txt", "DECRYPTED OBJECT: " + JSON.stringify(responseArray) + "\n");

    // Sanitize data
    const sanitizedData = {};
    Object.keys(responseArray).forEach((key) => {
      sanitizedData[key] = String(responseArray[key] || "");
    });

    // Send to Pabbly only if payment is successful
    if (sanitizedData.order_status === "Success") {
      const pabblyURL =
        "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZiMDYzMzA0MzI1MjZiNTUzYzUxMzIi_pc";

      const pabblyResponse = await axios.post(
        pabblyURL,
        new URLSearchParams(sanitizedData)
      );

      console.log("Data sent to Pabbly successfully. Pabbly Response:", pabblyResponse.data);
      fs.appendFileSync("log.txt", "PABBBLY RESPONSE: " + JSON.stringify(pabblyResponse.data) + "\n");
    } else {
      console.log("Payment not successful. Data not sent to Pabbly.");
      fs.appendFileSync("log.txt", "PAYMENT NOT SUCCESSFUL. Data not sent to Pabbly.\n");
    }

    return Response.json({ message: "Success", data: sanitizedData });
  } catch (error) {
    console.error("Error occurred:", error?.response?.data || error.message || error);
    fs.appendFileSync("log.txt", "ERROR: " + (error?.response?.data || error.message || error) + "\n");

    return Response.json(
      { message: "Error processing request", error: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
