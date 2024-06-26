import Product from '@/models/Products';
import connectDb from '@/middleware/dbConnect';

const handler = async (req, res) => {
    if (req.method == 'POST') {
        try {
            let newProduct = new Product;
            newProduct['name'] = req.body.name;
            newProduct['price'] = req.body.price;
            newProduct['link'] = req.body.link;
            newProduct['charityId'] = req.body.charityId;
            newProduct['imgName'] = req.body.imgName;
            newProduct['importFlag'] = 1;
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