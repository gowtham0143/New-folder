import Charity from '@/models/Charitys';
import connectDb from '@/middleware/dbConnect';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

// Disable the default body parser
export const config = {
    api: {
        bodyParser: false,
    },
};

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const uploadDir = path.join(process.cwd(), '/public/charity');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }

        const form = formidable({
            uploadDir,
            keepExtensions: true,
            filename: (name, ext, part, form) => {
                return `${Date.now()}_${part.originalFilename}`;
            }
        });

        const parseForm = () => {
            return new Promise((resolve, reject) => {
                form.parse(req, (err, fields, files) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({ fields, files });
                    }
                });
            });
        };

        try {
            const { fields, files } = await parseForm();

            // Get the new filename
            const filename = files?.image[0].newFilename;

            let newCharity = new Charity();
            newCharity.name = fields.institudeName[0];
            newCharity.email = fields.email[0];
            newCharity.address = fields.address[0];
            newCharity.about = fields.about[0];
            newCharity.contact1 = fields.contact1[0];
            newCharity.contact2 = fields.contact2[0];
            newCharity.imgName = filename;
            await newCharity.save();

            res.status(200).json({ message: "Data Saved Successfully!" });
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error!" });
        }
    } else {
        res.status(400).json({ message: "Invalid Request Method!" });
    }
};

export default connectDb(handler);
