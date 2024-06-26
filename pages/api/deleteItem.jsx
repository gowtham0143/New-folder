import Product from '@/models/Products';
import connectDb from '@/middleware/dbConnect';

const handler = async (req, res) => {
    if (req.method == 'POST') {
        try {
            let validProduct = await Product.findById(req.body.itemId);

            if (validProduct) {
                validProduct['isDeleted'] = 1;
                await validProduct.save();

                res.status(200).json({ message: "Deleted Successfully!" });
            }
            else {
                res.status(404).json({ message: "Product Not Found!" });
            }
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error!" });
        }
    }
    else {
        res.status(400).json({ message: "Invalid Request Method!" });
    }
}

export default connectDb(handler);