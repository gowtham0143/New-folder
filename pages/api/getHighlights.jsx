import Charity from '@/models/Charitys';
import connectDb from '@/middleware/dbConnect';

const handler = async (req, res) => {
    let highlights = await Charity.find({ isDeleted: 0, highlighted: 1 }).select('-createdAt -updatedAt -isDeleted').limit(3);
    res.status(200).json({ highlights });
}

export default connectDb(handler);