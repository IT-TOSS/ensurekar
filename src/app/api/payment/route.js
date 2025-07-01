

// export async function POST(request) {
//   try {
//     const formData = await request.formData();
//     const encResponse = formData.get("encResp") || "";

//     fs.appendFileSync("log.txt", `\n--- NEW REQUEST ---\nRAW POST: ${encResponse}\n`);

//     const rcvdString = decrypt(encResponse, workingKey);
//     console.log("Decrypted String:", rcvdString);
//     fs.appendFileSync("log.txt", "DECRYPTED STRING RAW: " + rcvdString + "\n");

//     const responseArray = {};
//     rcvdString.split("&").forEach((pair) => {
//       const [key, value] = pair.split("=");
//       responseArray[key] = decodeURIComponent(value || "");
//     });

//     console.log("Decrypted Object:", responseArray);
//     fs.appendFileSync("log.txt", "DECRYPTED OBJECT: " + JSON.stringify(responseArray) + "\n");

//     const sanitizedData = {};
//     Object.keys(responseArray).forEach((key) => {
//       sanitizedData[key] = String(responseArray[key] || "");
//     });

//     // Send to Pabbly (Always, irrespective of payment status)
//     const pabblyURL =
//       "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZiMDYzMzA0MzI1MjZiNTUzYzUxMzIi_pc";

//     try {
//       const pabblyResponse = await axios.post(
//         pabblyURL,
//         new URLSearchParams(sanitizedData)
//       );
//       console.log("Data sent to Pabbly successfully. Pabbly Response:", pabblyResponse.data);
//       fs.appendFileSync("log.txt", "PABBBLY RESPONSE: " + JSON.stringify(pabblyResponse.data) + "\n");
//     } catch (pabblyError) {
//       console.error("Error sending to Pabbly:", pabblyError?.response?.data || pabblyError.message);
//       fs.appendFileSync("log.txt", "PABBBLY ERROR: " + (pabblyError?.response?.data || pabblyError.message) + "\n");
//     }


//     // WhatsApp Redirect
//     const orderId = sanitizedData.order_id || "N/A";
//     const whatsappNumber = "917470756060";
//     const message = `Hi 8959176446 Bot, payment done for OrderID: ${orderId}`;
//     const encodedMessage = encodeURIComponent(message);

//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

//     console.log("Redirecting to WhatsApp:", whatsappURL);

//     return Response.redirect(whatsappURL, 302);
//   } catch (error) {
//     console.error("Error occurred:", error?.response?.data || error.message || error);
//     fs.appendFileSync("log.txt", "ERROR: " + (error?.response?.data || error.message || error) + "\n");

//     return Response.json(
//       { message: "Error processing request", error: error?.message || "Unknown error" },
//       { status: 500 }
//     );
//   }
// }




// import fs from "fs";
// import crypto from "crypto";
// import axios from "axios";

// const workingKey = "B3ACAE21142FBB1FA2E53B0C1C184486"; 
// const watiApiKey = "1191307.cciF3DwUUb8TCVV1yfYTS0L1onucTKm1oPd";

// const phoneNumber = "917470756060"; 

// function decrypt(encryptedText, workingKey) {
//   const key = crypto.createHash("md5").update(workingKey).digest();
//   const iv = Buffer.from([...Array(16).keys()]);
//   let encryptedBuffer;

//   // Agar hex format hai (sirf 0-9 aur a-f ke characters hain)
//   if (/^[0-9a-fA-F]+$/.test(encryptedText)) {
//     encryptedBuffer = Buffer.from(encryptedText, "hex");
//   } else {
//     // Base64 samjho
//     encryptedBuffer = Buffer.from(encryptedText, "base64");
//   }

//   const decipher = crypto.createDecipheriv("aes-128-cbc", key, iv);
//   let decrypted = decipher.update(encryptedBuffer);
//   decrypted = Buffer.concat([decrypted, decipher.final()]);

//   return decrypted.toString("utf8");
// }

// export async function POST(request) {
//   try {
//     const formData = await request.formData();
//     const encResponse = formData.get("encResp") || "";

//     fs.appendFileSync("log.txt", `\n--- NEW REQUEST ---\nRAW POST: ${encResponse}\n`);

//     const rcvdString = decrypt(encResponse, workingKey);
//     console.log("Decrypted String:", rcvdString);
//     fs.appendFileSync("log.txt", "DECRYPTED STRING RAW: " + rcvdString + "\n");

//     const responseArray = {};
//     rcvdString.split("&").forEach((pair) => {
//       const [key, value] = pair.split("=");
//       responseArray[key] = decodeURIComponent(value || "");
//     });

//     console.log("Decrypted Object:", responseArray);
//     fs.appendFileSync("log.txt", "DECRYPTED OBJECT: " + JSON.stringify(responseArray) + "\n");

//     const sanitizedData = {};
//     Object.keys(responseArray).forEach((key) => {
//       sanitizedData[key] = String(responseArray[key] || "");
//     });

//     // Send to Pabbly (Always, irrespective of payment status)
//     // const pabblyURL =
//     //   "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZiMDYzMzA0MzI1MjZiNTUzYzUxMzIi_pc";

//     // try {
//     //   const pabblyResponse = await axios.post(
//     //     pabblyURL,
//     //     new URLSearchParams(sanitizedData)
//     //   );
//     //   console.log("Data sent to Pabbly successfully. Pabbly Response:", pabblyResponse.data);
//     //   fs.appendFileSync("log.txt", "PABBBLY RESPONSE: " + JSON.stringify(pabblyResponse.data) + "\n");
//     // } catch (pabblyError) {
//     //   console.error("Error sending to Pabbly:", pabblyError?.response?.data || pabblyError.message);
//     //   fs.appendFileSync("log.txt", "PABBBLY ERROR: " + (pabblyError?.response?.data || pabblyError.message) + "\n");
//     // }

//     // // WhatsApp Redirect
//    const orderId = sanitizedData.order_id;
//    const customerName = sanitizedData.name || "N/A";
//    const amountPaid = sanitizedData.amount || "N/A";
//    const paymentDate = sanitizedData.payment_date || "N/A";
//    const paymentMode = sanitizedData.payment_mode || "N/A";
//    const transactionId = sanitizedData.transaction_id;
     
//    const whatsappNumber = "917470756060";
//    const message = `Hi, I have already completed the payment. Please confirm the payment from your end. Here are the details for your reference:
//    Name: ${customerName}
//    Order ID: ${orderId}
//    Amount Paid: ₹${amountPaid}
//    Payment Date: ${paymentDate}
//    Payment Mode: ${paymentMode}
//    Transaction ID: ${transactionId}
     
//    Kindly confirm and proceed with the next steps.`;
     
//    const encodedMessage = encodeURIComponent(message);
//    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
     
//    console.log("Redirecting to WhatsApp:", whatsappURL);
     
//    return Response.redirect(whatsappURL, 302);


//     //--------------------------

//      // Send WhatsApp Message via WATI
//     // const orderId = sanitizedData.order_id ;
//     // const orderStatus = sanitizedData.order_status?.toLowerCase() || "";

//     // let templateName = "";
//     // if (orderStatus === "success") {
//     //   templateName = "payment_success";
//     // } else {
//     //   templateName = "payment_cancel";
//     // }


//     // const watiPayload = {
//     //   template_name: templateName,
//     //   broadcast_name: "Payment Status",
//     //   parameters: [
//     //     { name: "order_id", value: orderId }
//     //   ],
//     //   phone_number: phoneNumber
//     // };

//     // try {
//     //   const watiResponse = await axios.post(
//     //     "https://app.mbgcart.com/api/v1/sendTemplateMessage",
//     //     watiPayload,
//     //     {
//     //       headers: {
//     //         "X-ACCESS-TOKEN": watiApiKey,
//     //         "Content-Type": "application/json"
//     //       }
//     //     }
//     //   );

//     //   console.log("WhatsApp message sent via WATI:", watiResponse.data);
//     // } catch (watiError) {
//     //   console.error("Error sending WhatsApp message:", watiError?.response?.data || watiError.message);
//     // }

//     // Final success response
//     return Response.json({ message: "Success", data: sanitizedData });
//   } catch (error) {
//     console.error("Error occurred:", error?.response?.data || error.message || error);
//     fs.appendFileSync("log.txt", "ERROR: " + (error?.response?.data || error.message || error) + "\n");

//     return Response.json(
//       { message: "Error processing request", error: error?.message || "Unknown error" },
//       { status: 500 }
//     );
//   }
// }




import fs from "fs";
import crypto from "crypto";
import { NextResponse } from "next/server";

const workingKey = "B3ACAE21142FBB1FA2E53B0C1C184486"; 
const watiApiKey = "1191307.cciF3DwUUb8TCVV1yfYTS0L1onucTKm1oPd";

function decrypt(encryptedText, workingKey) {
  const key = crypto.createHash("md5").update(workingKey).digest();
  const iv = Buffer.from([...Array(16).keys()]);
  let encryptedBuffer;

  if (/^[0-9a-fA-F]+$/.test(encryptedText)) {
    encryptedBuffer = Buffer.from(encryptedText, "hex");
  } else {
    encryptedBuffer = Buffer.from(encryptedText, "base64");
  }

  const decipher = crypto.createDecipheriv("aes-128-cbc", key, iv);
  let decrypted = decipher.update(encryptedBuffer);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString("utf8");
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const encResponse = formData.get("encResp") || "";

    fs.appendFileSync("log.txt", `\n--- NEW REQUEST ---\nRAW POST: ${encResponse}\n`);

    const rcvdString = decrypt(encResponse, workingKey);
    fs.appendFileSync("log.txt", "DECRYPTED STRING RAW: " + rcvdString + "\n");

    const responseArray = {};
    rcvdString.split("&").forEach((pair) => {
      const [key, value] = pair.split("=");
      responseArray[key] = decodeURIComponent(value || "");
    });

    fs.appendFileSync("log.txt", "DECRYPTED OBJECT: " + JSON.stringify(responseArray) + "\n");

    const sanitizedData = {};
    Object.keys(responseArray).forEach((key) => {
      sanitizedData[key] = String(responseArray[key] || "");
    });

    const orderId = sanitizedData.order_id;
    const customerName = sanitizedData.name || "N/A";
    const amountPaid = sanitizedData.amount || "N/A";
    const paymentDate = sanitizedData.payment_date || "N/A";
    const paymentMode = sanitizedData.payment_mode || "N/A";
    const transactionId = sanitizedData.transaction_id;

    const whatsappNumber = "917470756060";
    const message = `Hi, I have already completed the payment. Please confirm the payment from your end. Here are the details for your reference:
Name: ${customerName}
Order ID: ${orderId}
Amount Paid: ₹${amountPaid}
Payment Date: ${paymentDate}
Payment Mode: ${paymentMode}
Transaction ID: ${transactionId}

Kindly confirm and proceed with the next steps.`;

    // STEP 1: Save payment data via your internal API
    const saveResponse = await fetch("https://tossconsultancyservices.com/ensurekar-dashboard/paymentsave.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sanitizedData)
    });

    const saveResult = await saveResponse.json();

    if (!saveResponse.ok || !saveResult.success) {
      throw new Error(saveResult.message || "Failed to save payment data");
    }

    fs.appendFileSync("log.txt", "DATA SAVED SUCCESSFULLY: " + saveResult.message + "\n");

    // STEP 2: Redirect to WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    fs.appendFileSync("log.txt", "REDIRECT URL: " + whatsappURL + "\n");
    return NextResponse.redirect(whatsappURL, 302);

  } catch (error) {
    const errorMessage = error?.response?.data || error.message || "Unknown error";
    console.error("Error occurred:", errorMessage);
    fs.appendFileSync("log.txt", "ERROR: " + errorMessage + "\n");

    return NextResponse.json(
      { message: "Error processing request", error: errorMessage },
      { status: 500 }
    );
  }
}
