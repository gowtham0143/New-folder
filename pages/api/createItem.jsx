import Product from '@/models/Products';
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
    if (req.method == 'POST') {
        const uploadDir = path.join(process.cwd(), '/public/product');
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

            let newProduct = new Product;
            newProduct['name'] = fields.itemName[0];
            newProduct['price'] = fields.price[0];
            newProduct['link'] = fields.link[0];
            newProduct['charityId'] = fields.charityId[0];
            newProduct['description'] = fields.description[0];
            newProduct['imgName'] = filename;
            await newProduct.save();

            res.status(200).json({ message: "Data Saved Successfully!" });
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error!" });
        }
    }
    else {
        res.status(400).json({ message: "Invalid Request Method!" });
    }
}

export default connectDb(handler);