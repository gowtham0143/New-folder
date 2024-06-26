import Charity from '@/models/Charitys';
import Product from '@/models/Products';
import connectDb from '@/middleware/dbConnect';

const handler = async (req, res) => {
    let validCharity = await Charity.findOne({ isDeleted: 0, _id: req.body.charityId }).select('-createdAt -updatedAt -isActive -isDeleted');
    let productList = await Product.find({ isDeleted: 0, charityId: req.body.charityId }).select('-createdAt -updatedAt -isActive -isDeleted').sort({ _id: -1 });

    if (validCharity) {
        res.status(200).json({ validCharity, productList });
    }
    else {
        res.status(404).json({ message: "Charity Not Found!" });
    }
}

export default connectDb(handler);