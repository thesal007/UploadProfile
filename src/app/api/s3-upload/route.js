import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import config from "@/app/appConfig";

const s3Client = new S3Client({
  region: config.region,
  credentials: {
    accessKeyId: config.accessKey,
    secretAccessKey: config.secretKey,
  },
});
console.log("Configured region:", config.region);

async function uploadFileToS3(fileBuffer, fileName) {
    try {
      const params = {
        Bucket: config.bucketName,
        Key: `Myfolder/${fileName}`,
        Body: fileBuffer,
        ContentType: "image/jpg",  // Adjust as necessary
      };
      console.log("Bucket Name:", config.bucketName);  // Check if the bucket name is being set correctly
      console.log("Access Key ID:", config.accessKey);
      console.log("Secret Access Key:", config.secretKey);
  
      const command = new PutObjectCommand(params);
      await s3Client.send(command);
  
      return fileName;
    } catch (error) {
      console.error("Error uploading file to S3:", error); // Log detailed error
      throw new Error(`Failed to upload file to S3: ${error.message}`);
    }
  }
  

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "File is required." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = await uploadFileToS3(buffer, file.name);

    return NextResponse.json({ success: true, fileName });
  } catch (error) {
    console.error("Error during file upload:", error); // Log detailed error
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
