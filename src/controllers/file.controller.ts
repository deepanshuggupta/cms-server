import { S3 } from "aws-sdk";
import { Request, RequestHandler, Response } from "express";
import Busboy from "busboy";
import { randomImageName } from "../utils";
import dotenv from "dotenv";
dotenv.config();

const AWS_ID = process.env.AWS_ACCESS_ID || "";
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || "";

export const uploadFile: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const busboy = Busboy({ headers: req.headers });
    // let data = {};
    busboy.on("file", (name: any, file: any, info: any) => {
      const s3 = new S3({
        credentials: {
          accessKeyId: AWS_ID,
          secretAccessKey: AWS_SECRET_ACCESS_KEY,
        },
      });

      const fileName = randomImageName(info.filename);
      const params = {
        Bucket: "razeo-cms",
        Key: `sample/${fileName}`,
        Body: file,
      };

      s3.upload({ ...params }).send((err, data) => {
        if (err) {
          console.log(err);
        }
        console.log("upload", data);
        res.json({ uri: data.Location });
      });
    });

    req.pipe(busboy);
  } catch (error: any) {
    console.log(error);
  }
};
